import { createAsyncThunk } from '@reduxjs/toolkit';
import { getParams } from '../selectors/getCheckoutData';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { getCartsReq } from '@/entities/Cart';

export const checkoutReq = createAsyncThunk<
  Iresponse<string>,
  void,
  ThunkConfig<string>
>(
  'checkout/checkout',
  async (_, { extra, rejectWithValue, getState, dispatch }) => {
    try {
      const params = getParams(getState());
      const response = await extra.api.post<Iresponse<string>>('', {
        method: 'checkout',
        params,
      });
      if (response.data.error || !response.data)
        return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
      dispatch(getCartsReq({}));
      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);
