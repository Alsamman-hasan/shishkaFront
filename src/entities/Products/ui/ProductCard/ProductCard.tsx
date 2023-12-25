import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../model/services/addToBasket/addToBasket';
import { addToFavoriteReq } from '../../model/services/addToFavorite/addToFavorite';
import { productActions } from '../../model/slice/productSlice';
import { ProductCardProps } from '../../model/types/productType';
import { ProductCardGroups } from '../ProductCardGroups/ProductCardGroups';
import { ProductCardList } from '../ProductCardList/ProductCardList';
import { getIsAuth } from '@/entities/authData';
import { getRouteSignIn } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

export const ProductCard = memo((props: ProductCardProps) => {
  const {
    card: { view = 'Group' },
    isLoading = false,
  } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth =
    useAppSelector(getIsAuth) || Boolean(localStorage.getItem('isAuth'));

  const onAddToCart = useCallback(
    (count: number, id: string) => {
      if (count < 0) return;
      if (!isAuth) navigate(getRouteSignIn());
      else {
        dispatch(productActions.setAddedToCartProductId(id));
        dispatch(addToCart({ productId: id, qty: count }));
      }
    },
    [dispatch, isAuth, navigate],
  );

  const addToFavorite = useCallback(
    (id: string) => {
      if (!isAuth) navigate(getRouteSignIn());
      else dispatch(addToFavoriteReq({ productId: id }));
    },
    [dispatch, isAuth, navigate],
  );

  const content = useCallback(() => {
    if (view === 'Group')
      return (
        <ProductCardGroups
          {...props}
          onAddToCart={onAddToCart}
          onAddToFavorite={addToFavorite}
        />
      );

    return (
      <ProductCardList
        {...props}
        onAddToCart={onAddToCart}
        onAddToFavorite={addToFavorite}
      />
    );
  }, [addToFavorite, onAddToCart, props, view]);
  return content();
});
