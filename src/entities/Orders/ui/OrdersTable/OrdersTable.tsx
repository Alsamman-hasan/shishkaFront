import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import cls from './OrdersTable.module.scss';
import {
  getOrders,
  getIsLoadingAllOrders,
  getPage,
  getPages,
} from '../../model/selector/getOrderData/getOrderData';
import { fetchAllOrdersReq } from '../../model/service/fetchAllOrders';
import { orderActions } from '../../model/slice/ordersSlice';
import { OrderItem } from '../OrderItem/OrderItem';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PaginationUi } from '@/shared/ui/PaginationUi/PaginationUi';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface OrdersTableProps {
  className?: string;
  filter: 'заказы' | 'Завершенных' | 'Текущих' | 'Отмененных';
}

export const OrdersTable = memo((props: OrdersTableProps) => {
  const { className, filter } = props;
  const dispatch = useAppDispatch();
  const ordersData = useAppSelector(getOrders);
  const isLoading = useAppSelector(getIsLoadingAllOrders);
  const page = useAppSelector(getPage);
  const pages = useAppSelector(getPages);

  const handleChangePage = useCallback(
    (event: ChangeEvent<unknown>, newPage: number) => {
      dispatch(orderActions.setPage(newPage));
      dispatch(fetchAllOrdersReq());
    },
    [dispatch],
  );

  const getSkeletonTab = () =>
    new Array(6)
      .fill(0)
      .map((item, index) => <Skeleton key={index} height={72} width='100%' />);

  const content = useMemo(() => {
    if (isLoading) return getSkeletonTab();
    if (ordersData?.length)
      return ordersData?.map(item => (
        <VStack key={item.id} max>
          <OrderItem
            created={item.created}
            orderName={item.name}
            status={item.status}
            id={item.id}
          />
        </VStack>
      ));

    return (
      <HStack max justify='center' align='center'>
        <Htag tage='h1'> нет {filter} заказов </Htag>
      </HStack>
    );
  }, [filter, isLoading, ordersData]);
  return (
    <VStack
      max
      gap={1.25}
      className={classNames(cls.OrdersTable, {}, [className])}
    >
      {content}
      {!!pages && pages > 1 && (
        <HStack max justify='end'>
          <PaginationUi
            count={Number(pages)}
            handleChange={handleChangePage}
            page={page}
          />
        </HStack>
      )}
    </VStack>
  );
});
