import { memo, useCallback } from 'react';
import { OrderDetailsWrapper } from './OrderDetailsWrapper';
import { OrderFooter } from './OrderFooter';
import cls from './OrderItem.module.scss';
import {
  getOrderDetailsItems,
  getOrderDetailsTotal,
  getOrderDetailsIsLoading,
  getOrderDetailsItemsId,
} from '../../model/selector/getOrderDetails/getOrderDetails';
import { reorderReq } from '../../model/service/addToBasket/addToBasket';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

export interface OrderDetailsProps {
  className?: string;
}

export const OrderDetails = memo((props: OrderDetailsProps) => {
  const { className } = props;
  const matches = useMediaQuery('(max-width: 768px)');
  const dispatch = useAppDispatch();
  const orderItems = useAppSelector(getOrderDetailsItems);
  const total = useAppSelector(getOrderDetailsTotal);
  const isLoading = useAppSelector(getOrderDetailsIsLoading);
  const test = useAppSelector(getOrderDetailsItemsId);

  const onReorder = useCallback(() => {
    const data = test.map(or => ({
      productId: or.productId,
      qty: Number(or.qty),
    }));
    data.forEach(i => {
      dispatch(reorderReq(i));
    });
  }, [dispatch, test]);

  const content = useCallback(() => {
    if (isLoading)
      return (
        <VStack max className={cls.detailsLoading} gap={1}>
          <Skeleton width='100%' height={40} />
          <Skeleton width='100%' height={40} />
        </VStack>
      );
    return (
      <>
        {orderItems.map(ord => (
          <OrderDetailsWrapper
            key={ord.id}
            count={ord.qty}
            name={ord.name}
            price={ord.sellingPrice}
            total={ord.sum}
          />
        ))}
      </>
    );
  }, [isLoading, orderItems]);

  return (
    <VStack
      gap={1.25}
      className={classNames(cls.OrderDetails, {}, [className])}
    >
      {!matches && (
        <OrderDetailsWrapper
          isHeader
          count='Количество'
          name='Товар'
          price='Цена'
          total='Сумма'
        />
      )}
      {content()}
      <OrderFooter
        address='г.Нижний Новгород, ул. Гагарина 222а'
        total={total || 0}
        itemsCount={orderItems.length || 0}
        isLoading={!!isLoading}
        onReorder={onReorder}
      />
    </VStack>
  );
});
