import { createAsyncThunk } from '@reduxjs/toolkit';
import { OrderDetails } from '../types/orderSchema';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const fetchOrderDetailsReq = createAsyncThunk<
  Iresponse<OrderDetails>,
  string,
  ThunkConfig<string>
>('order/fetchOrderDetails', async (orderId, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.post<Iresponse<OrderDetails>>('', {
      method: 'getOrder',
      params: { orderId },
    });

    if (response.data.error)
      return rejectWithValue(response.data.error.message);
    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
