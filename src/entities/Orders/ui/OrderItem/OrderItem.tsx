import { memo, useCallback, useState } from 'react';
import { OrderDetails } from './OrderDetails';
import cls from './OrderItem.module.scss';
// import { getOrderDetailsId } from '../../model/selector/getOrderDetails/getOrderDetails';
import { getSelectOrderId } from '../../model/selector/getOrderData/getOrderData';
import { fetchOrderDetailsReq } from '../../model/service/fetchOrderDetails';
import { orderActions } from '../../model/slice/ordersSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { CollapseUi } from '@/shared/ui/CollapseUi/CollapseUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';

export interface OrderItemProps {
  className?: string;
  orderName: string;
  created: string;
  status: string;
  id: string;
}
export const OrderItem = memo((props: OrderItemProps) => {
  const { className, created, orderName, status, id } = props;
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const selectOrderId = useAppSelector(getSelectOrderId);

  const handleClick = useCallback(
    (orderId: string) => {
      dispatch(orderActions.setSelectId(orderId));
      setOpen(!open);
      if (!open) dispatch(fetchOrderDetailsReq(orderId));
    },
    [dispatch, open],
  );
  return (
    <div className={classNames(cls.OrderItem, {}, [className])}>
      <HStack
        max
        justify='between'
        align='center'
        className={cls.collapse}
        onClick={() => handleClick(id)}
      >
        <HStack gap={0.75} className={cls.OrderInfo}>
          <Htag tage='h3' className={cls.orderName}>
            {orderName}
          </Htag>
          <PTag tage='P2'>{created}</PTag>
        </HStack>
        <PTag tage='P3' className={cls.status}>
          {status}
        </PTag>
      </HStack>
      <CollapseUi open={!!open && selectOrderId === id}>
        <OrderDetails className={cls.collapseWrapper} />
      </CollapseUi>
    </div>
  );
});
