import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUpdatedCart } from '../../selectors/getCartData/getCartData';
import { ResUpdateCart } from '../../types/cartSchema';
// import { getCartsReq } from '../getCardItems/getCardItems';
import { getCartsReq } from '../getCardItems/getCardItems';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const updateCartReq = createAsyncThunk<
  Iresponse<ResUpdateCart[]>,
  void,
  ThunkConfig<string>
>(
  'carts/updateCart',
  async (_, { extra, rejectWithValue, getState, dispatch }) => {
    const params = getUpdatedCart(getState());
    try {
      const response = await extra.api.post<Iresponse<ResUpdateCart[]>>('', {
        method: 'updateCartItem',
        params,
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
