import { CircularProgress } from '@mui/material';
import { memo } from 'react';
import cls from './CartTable.module.scss';
import {
  getDeletedIdIsLoading,
  getRemoveIsLoading,
  getUpdatedCart,
  getUpdatedCartLoading,
} from '../../model/selectors/getCartData/getCartData';

import { addToFavoriteReq } from '../../model/services/addToFavorite/addToFavorite';
import { removeCartReq } from '../../model/services/removeCart/removeCart';
import { updateCartReq } from '../../model/services/updateCart/updateCart';
import { cartActions } from '../../model/slice/cartSlice';
import { Cart } from '../../model/types/cartSchema';
import Up from '@/shared/assets/icons/Carts/VectorUp.svg';
import noImage from '@/shared/assets/images/img4.png';
import { getRouteProductDetails } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';

import { HStack, VStack } from '@/shared/ui/Stack';

export interface CartTableProps {
  className?: string;
  cartItems: Cart[];
}
export const CartTable = memo((props: CartTableProps) => {
  const { className, cartItems } = props;
  const dispatch = useAppDispatch();
  const updateLoading = useAppSelector(getUpdatedCartLoading);
  const removeLoading = useAppSelector(getRemoveIsLoading);
  const deletedId = useAppSelector(getDeletedIdIsLoading);
  const updateId = useAppSelector(getUpdatedCart);

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
    <div className={classNames(cls.CartTable, {}, [className])}>
      <table>
        <thead>
          <tr>
            <th className={cls.first}>
              <PTag tage='P3'>Товар</PTag>
            </th>
            <th>
              <PTag tage='P3'>Цена</PTag>
            </th>
            <th>
              <PTag tage='P3'>Количество</PTag>
            </th>
            <th className={cls.sum}>
              <PTag tage='P3'>Сумма</PTag>
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(
            (
              {
                cartId,
                images,
                name,
                sum,
                qty,
                id,
                discountPrice,
                sellingPrice,
              },
              i,
            ) => (
              <tr key={`${cartId}-${i}`}>
                <td className={cls.first}>
                  <HStack gap={0.75}>
                    <AppLink
                      to={getRouteProductDetails(id)}
                      className={cls.link}
                    >
                      <div className={cls.img}>
                        <AppImage
                          src={(images && images[0].url) || noImage}
                          alt={(images && images[0].orientation) || 'shishka'}
                        />
                      </div>
                    </AppLink>
                    <VStack gap={0.75}>
                      <AppLink
                        to={getRouteProductDetails(id)}
                        className={cls.link}
                      >
                        <PTag tage='P2'>{name}</PTag>
                      </AppLink>
                      <HStack gap={1.5}>
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
                </td>
                <td>
                  <VStack>
                    <Htag tage='h3'>{discountPrice || sellingPrice}₽</Htag>
                    {!!discountPrice && (
                      <span className={cls.sellingPrice}>{sellingPrice}₽</span>
                    )}
                  </VStack>
                </td>
                <td>
                  {updateId?.productId === id && updateLoading ? (
                    <HStack justify='center' className={cls.count}>
                      <CircularProgress className={cls.icon} size={17} />
                    </HStack>
                  ) : (
                    <HStack justify='between' className={cls.count}>
                      <Htag className={cls.title} tage='h3'>
                        {qty}
                      </Htag>
                      <VStack>
                        <div
                          className={cls.up}
                          onClick={() => onAddCount(id, qty)}
                        >
                          <Up />
                        </div>
                        <div
                          className={classNames(cls.down, {
                            [cls.dis]: qty <= 1,
                          })}
                          onClick={() => onRemoveItem(id, qty)}
                        >
                          <Up />
                        </div>
                      </VStack>
                    </HStack>
                  )}
                </td>
                <td className={cls.sum}>
                  <Htag tage='h3'>{sum.toFixed(3)} ₽</Htag>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
});
