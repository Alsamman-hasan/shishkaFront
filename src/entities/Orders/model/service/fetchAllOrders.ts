import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPage,
  getStatuses,
  getStep,
} from '../selector/getOrderData/getOrderData';
import { ordersList } from '../types/orderSchema';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const fetchAllOrdersReq = createAsyncThunk<
  Iresponse<ordersList[]>,
  void,
  ThunkConfig<string>
>('order/fetchAllOrders', async (_, { extra, rejectWithValue, getState }) => {
  try {
    const page = getPage(getState());
    const status = getStatuses(getState());
    const step = getStep(getState());
    const response = await extra.api.post<Iresponse<ordersList[]>>('', {
      method: 'getOrders',
      params: { page, status, step },
    });

    if (response.data.error)
      return rejectWithValue(response.data.error.message);
    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
