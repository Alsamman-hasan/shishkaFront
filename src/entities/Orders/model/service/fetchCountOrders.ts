import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStatuses, getStep } from '../selector/getOrderData/getOrderData';
import { ThunkConfig } from '@/app/providers/StorProvider';

interface ResultType {
  count: number;
}
export const fetchCountOrdersReq = createAsyncThunk<
  Iresponse<number>,
  void,
  ThunkConfig<string>
>('order/fetchCountOrders', async (_, { extra, rejectWithValue, getState }) => {
  try {
    const status = getStatuses(getState());
    const step = getStep(getState());
    const response = await extra.api.post<Iresponse<number>>('', {
      method: 'getCountOrders',
      params: { status, step },
    });

    if (response.data.error)
      return rejectWithValue(response.data.error.message);
    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
