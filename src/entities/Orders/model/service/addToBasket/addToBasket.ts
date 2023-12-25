import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { getCartsReq } from '@/entities/Cart';

interface CartAddedRes {
  cartId: string;
  productId: string;
  qty: number;
}

interface CardPayload {
  productId: string;
  qty: number;
}

export const reorderReq = createAsyncThunk<
  Iresponse<CartAddedRes[]>,
  CardPayload,
  ThunkConfig<string>
>('order/reorder', async (payload, { extra, rejectWithValue, dispatch }) => {
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
