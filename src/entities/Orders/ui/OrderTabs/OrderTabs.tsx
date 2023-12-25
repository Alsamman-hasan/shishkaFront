import { memo, useCallback, useMemo } from 'react';
import cls from './OrderTabs.module.scss';
import { fetchAllOrdersReq } from '../../model/service/fetchAllOrders';
import { fetchCountOrdersReq } from '../../model/service/fetchCountOrders';
import { orderActions } from '../../model/slice/ordersSlice';
import { Statuses } from '../../model/types/orderSchema';
import { OrdersTable } from '../OrdersTable/OrdersTable';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { Tabs } from '@/shared/ui/Tabs';

export interface OrderTabsProps {
  className?: string;
}
export const OrderTabs = memo((props: OrderTabsProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const onFetchData = useCallback(
    (id?: string) => {
      dispatch(orderActions.setStatus(id as Statuses));
      dispatch(fetchAllOrdersReq());
      dispatch(fetchCountOrdersReq());
    },
    [dispatch],
  );

  const tabs = useMemo(
    () => [
      {
        element: <OrdersTable filter='заказы' />,
        id: 'all',
        tab: 'Все заказы',
      },
      {
        element: <OrdersTable filter='Завершенных' />,
        id: 'Completed',
        tab: 'Завершенные',
      },
      {
        element: <OrdersTable filter='Текущих' />,
        id: 'active',
        tab: 'Текущие',
      },
      {
        element: <OrdersTable filter='Отмененных' />,
        id: 'canceled',
        tab: 'Отмененные',
      },
    ],
    [],
  );

  return (
    <HStack max className={classNames(cls.OrderTabs, {}, [className])}>
      <div style={{ width: '100%' }}>
        <Tabs
          className={cls.tab}
          tabs={tabs}
          variant='scrollable'
          classTabsItem={cls.classTabs}
          onChooseTab={onFetchData}
        />
      </div>
    </HStack>
  );
});
