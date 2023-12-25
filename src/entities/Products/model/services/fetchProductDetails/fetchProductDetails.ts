import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const fetchProductDetails = createAsyncThunk<
  Iresponse<Product>,
  string,
  ThunkConfig<string>
>(
  'product/fetchProductDetails',
  async (id, { extra, rejectWithValue, dispatch }) => {
    try {
      const response = await extra.api.post<Iresponse<Product>>('', {
        method: 'getProduct',
        params: { id },
      });
      if (response.data.error?.code === 'BAD_REQUEST')
        return rejectWithValue('Такой товар не найден');
      if (response.data.error?.code === 'NOT_FOUND')
        return rejectWithValue('Такой товар не найден');
      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);
