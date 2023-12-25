import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToFavoritePayload } from '../../types/productType';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { fetchFavorites } from '@/entities/Favorites';

export const addToFavoriteReq = createAsyncThunk<
  Iresponse<string>,
  addToFavoritePayload,
  ThunkConfig<string>
>(
  'product/addToFavorite',
  async ({ productId }, { extra, rejectWithValue, dispatch }) => {
    try {
      const response = await extra.api.post<Iresponse<string>>('', {
        method: 'like',
        params: { productId },
      });
      if (response.data.error || !response.data)
        return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
      dispatch(fetchFavorites({ replace: true }));
      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);
