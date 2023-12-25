import { StateSchema } from '@/app/providers/StorProvider';

export const getOrderDetailsIsLoading = (state: StateSchema) =>
  state.orders?.isLoadingDetails;

export const getOrderDetailsError = (state: StateSchema) =>
  state.orders?.errorDetails;

export const getOrderDetailsItems = (state: StateSchema) =>
  state.orders?.orderDetails?.items || [];

export const getOrderDetailsItemsId = (state: StateSchema) =>
  state.orders?.orderDetails?.itemsId || [];

export const getOrderDetailsId = (state: StateSchema) =>
  state.orders?.orderDetails?.items[0].orderId || '';

export const getOrderDetailsSum = (state: StateSchema) =>
  state.orders?.orderDetails?.sum;

export const getOrderDetailsSaving = (state: StateSchema) =>
  state.orders?.orderDetails?.savings;

export const getOrderDetailsTotal = (state: StateSchema) =>
  state.orders?.orderDetails?.totalCoast;
