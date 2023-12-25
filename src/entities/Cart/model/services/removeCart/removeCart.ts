import { createAsyncThunk } from '@reduxjs/toolkit';
import { Cart } from '../../types/cartSchema';
import { getCartsReq } from '../getCardItems/getCardItems';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const removeCartReq = createAsyncThunk<
  Iresponse<Cart[]>,
  string[],
  ThunkConfig<string>
>(
  'carts/removeCartReq',
  async (removedCart, { extra, rejectWithValue, getState, dispatch }) => {
    try {
      const response = await extra.api.post<Iresponse<Cart[]>>('', {
        method: 'removeCartItems',
        params: {
          items: removedCart,
        },
      });

      if (response.data.error)
        return rejectWithValue(response.data.error.message);
      dispatch(getCartsReq({ replace: true }));
      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);
