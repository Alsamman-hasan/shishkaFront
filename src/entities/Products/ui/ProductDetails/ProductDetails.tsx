import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './ProductDetails.module.scss';
import {
  getProductDetails,
  getProductDetailsError,
  getProductDetailsIsLoading,
} from '../../model/selectors/getProductDetailsData/getProductDetailsData';
import { addToCart } from '../../model/services/addToBasket/addToBasket';
import { addToFavoriteReq } from '../../model/services/addToFavorite/addToFavorite';
import { fetchProductDetails } from '../../model/services/fetchProductDetails/fetchProductDetails';
import { productDetailsReducer } from '../../model/slice/productDetailsSlice';
import { productActions } from '../../model/slice/productSlice';
import { ProductDetailsAvailability } from '../ProductDetailsAvailability/ProductDetailsAvailability';
import { ProductDetailsError } from '../ProductDetailsError/ProductDetailsError';
import { ProductDetailsInfo } from '../ProductDetailsInfo/ProductDetailsInfo';
import { getIsAuth } from '@/entities/authData';
import { getRouteSignIn } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { Loader } from '@/shared/ui/Loader/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProductDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  productDetails: productDetailsReducer,
};

export const ProductDetails = memo((props: ProductDetailsProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth =
    useAppSelector(getIsAuth) || Boolean(localStorage.getItem('isAuth'));
  const details = useAppSelector(getProductDetails);
  const isLoading = useAppSelector(getProductDetailsIsLoading);
  const error = useAppSelector(getProductDetailsError);

  const onAddToCart = useCallback(
    (count: number, productID: string) => {
      if (count < 0) return;
      if (!isAuth) navigate(getRouteSignIn());
      dispatch(productActions.setAddedToCartProductId(id));
      dispatch(addToCart({ productId: productID, qty: count }));
    },
    [dispatch, id, isAuth, navigate],
  );

  const addToFavorite = useCallback(
    (productID: string) => {
      if (!isAuth) navigate(getRouteSignIn());
      dispatch(addToFavoriteReq({ productId: productID }));
    },
    [dispatch, isAuth, navigate],
  );

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      {!!error && <ProductDetailsError error={error} />}
      {isLoading ? (
        <HStack max justify='center' align='center'>
          <Loader />
        </HStack>
      ) : (
        <VStack
          max
          className={classNames(cls.ProductDetails, {}, [className])}
          gap={5}
        >
          {!!details && (
            <ProductDetailsInfo
              card={details}
              onAddToCart={onAddToCart}
              onAddToFavorite={addToFavorite}
            />
          )}
          <ProductDetailsAvailability />
          <div />
        </VStack>
      )}
    </DynamicModuleLoader>
  );
});
