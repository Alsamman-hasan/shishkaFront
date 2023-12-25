import { CircularProgress } from '@mui/material';
import { memo } from 'react';
import cls from './CartTableMobile.module.scss';
import {
  getUpdatedCartLoading,
  getUpdatedCart,
  getDeletedIdIsLoading,
  getRemoveIsLoading,
} from '../../model/selectors/getCartData/getCartData';
import { addToFavoriteReq } from '../../model/services/addToFavorite/addToFavorite';
import { removeCartReq } from '../../model/services/removeCart/removeCart';
import { updateCartReq } from '../../model/services/updateCart/updateCart';
import { cartActions } from '../../model/slice/cartSlice';
import { Cart } from '../../model/types/cartSchema';
import Dec from '@/shared/assets/icons/productCardIcons/dec.svg';
import Inc from '@/shared/assets/icons/productCardIcons/inc.svg';
import noImage from '@/shared/assets/images/img4.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppImage } from '@/shared/ui/AppImage';

import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface CartTableMobileProps {
  className?: string;
  cartItems: Cart[];
}
export const CartTableMobile = memo((props: CartTableMobileProps) => {
  const { className, cartItems } = props;
  const dispatch = useAppDispatch();
  const updateLoading = useAppSelector(getUpdatedCartLoading);
  const updateId = useAppSelector(getUpdatedCart);
  const removeLoading = useAppSelector(getRemoveIsLoading);
  const deletedId = useAppSelector(getDeletedIdIsLoading);

  const onAddCount = (id: string, count: number) => {
    dispatch(cartActions.setAddCart({ productId: id, qty: count + 1 }));
    dispatch(updateCartReq());
  };

  const onRemoveItem = (id: string, count: number) => {
    if (count <= 1) return;
    dispatch(cartActions.setRemoveCart({ productId: id, qty: count - 1 }));
    dispatch(updateCartReq());
  };

  const onDeleteCart = (id: string) => {
    dispatch(cartActions.setDeleteCart(id));
    dispatch(removeCartReq([id]));
  };

  const addToFavorite = (id: string) => {
    dispatch(addToFavoriteReq(id));
  };

  return (
    <VStack
      className={classNames(cls.CartTableMobile, {}, [className])}
      gap={1}
    >
      {cartItems.map(
        ({ images, name, qty, id, sellingPrice, discountPrice }, i) => (
          <HStack key={id} max gap={0.75} align='start' className={cls.cart}>
            <div className={cls.img}>
              <AppImage
                src={(images && images[0].url) || noImage}
                alt={(images && images[0].orientation) || 'shishka'}
              />
            </div>
            <VStack max gap={0.25}>
              <PTag tage='P2'>{name}</PTag>
              <Htag tage='h3'>{discountPrice}₽</Htag>
              <HStack max justify='between' className={cls.IncDec}>
                <div
                  className={classNames(cls.down, {
                    [cls.dis]: qty <= 1,
                  })}
                  onClick={() => onRemoveItem(id, qty)}
                >
                  <Dec />
                </div>
                {updateId?.productId === id && updateLoading ? (
                  <HStack justify='center' className={cls.count}>
                    <CircularProgress className={cls.icon} size={17} />
                  </HStack>
                ) : (
                  <Htag className={cls.title} tage='h3'>
                    {qty}
                  </Htag>
                )}
                <div className={cls.up} onClick={() => onAddCount(id, qty)}>
                  <Inc />
                </div>
              </HStack>
              <HStack
                max
                justify='end'
                gap={1.75}
                className={cls.actionWrapper}
              >
                <div onClick={() => addToFavorite(id)}>
                  <PTag tage='P3' className={cls.actions}>
                    В избранное
                  </PTag>
                </div>
                <div onClick={() => onDeleteCart(id)}>
                  {deletedId === id && removeLoading ? (
                    <CircularProgress className={cls.icon} size={17} />
                  ) : (
                    <PTag tage='P3' className={cls.actions}>
                      Удалить
                    </PTag>
                  )}
                </div>
              </HStack>
            </VStack>
          </HStack>
        ),
      )}
    </VStack>
  );
});
