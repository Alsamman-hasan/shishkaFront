import { createAsyncThunk } from '@reduxjs/toolkit';
import { CardPayload, CartAddedRes } from '../../types/productType';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { getCartsReq } from '@/entities/Cart';

export const addToCart = createAsyncThunk<
  Iresponse<CartAddedRes[]>,
  CardPayload,
  ThunkConfig<string>
>('cart/updateCarts', async (payload, { extra, rejectWithValue, dispatch }) => {
  try {
    const response = await extra.api.post<Iresponse<CartAddedRes[]>>('', {
      method: 'updateCartItem',
      params: payload,
    });
    if (response.data.error || !response.data)
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    dispatch(getCartsReq({ replace: true }));
    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
