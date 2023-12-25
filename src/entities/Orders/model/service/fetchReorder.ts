import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { getCartsReq, ResUpdateCart } from '@/entities/Cart';

export const updateCartReq = createAsyncThunk<
  Iresponse<ResUpdateCart[]>,
  string,
  ThunkConfig<string>
>(
  'carts/updateCart',
  async (_, { extra, rejectWithValue, getState, dispatch }) => {
    // const params = getUpdatedCart(getState());
    try {
      const response = await extra.api.post<Iresponse<ResUpdateCart[]>>('', {
        method: 'updateCartItem',
        params: {},
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
