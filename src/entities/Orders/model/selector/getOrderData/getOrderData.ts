import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StorProvider';
import { sortValue } from '@/shared/lib/sortValue/soretValue';

export const getProfileOrderSort = createSelector(
  (state: StateSchema) => state.orders?.sort,
  sort => sortValue(sort),
);

export const getOrders = createSelector(
  (state: StateSchema) => state.orders?.orders,
  orders => {
    const allOrders = orders?.map(or => {
      switch (or.status) {
        case 'all':
          return { ...or };
        case 'canceled':
          return { ...or, status: 'Отменен' };
        case 'Completed':
          return { ...or, status: 'Завершен' };
        case 'active':
          return { ...or, status: 'Текущий' };
        default:
          return or;
      }
    });
    return allOrders;
  },
);
export const getAllOrders = (state: StateSchema) => state.orders?.orders || [];
export const getPage = (state: StateSchema) => state.orders?.page || 1;
export const getStep = (state: StateSchema) => state.orders?.step || 1;
export const getStatuses = (state: StateSchema) => state.orders?.status;
export const getPages = (state: StateSchema) => state.orders?.pages || 1;
export const getIsLoadingAllOrders = (state: StateSchema) =>
  state.orders?.isLoading;
export const getSelectOrderId = (state: StateSchema) =>
  state.orders?.selectOrderId || '';
