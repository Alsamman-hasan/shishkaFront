import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartRequestResult } from '../../types/cartSchema';
import { ThunkConfig } from '@/app/providers/StorProvider';

interface fetchCartsProps {
  replace?: boolean;
}

export const getCartsReq = createAsyncThunk<
  Iresponse<CartRequestResult>,
  fetchCartsProps,
  ThunkConfig<string>
>(
  'carts/getCartItems',
  async (_props, { extra, rejectWithValue, getState }) => {
    try {
      const response = await extra.api.post<Iresponse<CartRequestResult>>('', {
        method: 'getCart',
      });

      if (response.data.error)
        return rejectWithValue(response.data.error.message);
      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);
