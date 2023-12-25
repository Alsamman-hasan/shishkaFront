import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFavorites } from './fetchFavorites';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const removeAllLikesReq = createAsyncThunk<
  Iresponse<string>,
  string[],
  ThunkConfig<string>
>(
  'like/removeLikes',
  async (productIds, { extra, rejectWithValue, dispatch, getState }) => {
    try {
      const response = await extra.api.post<Iresponse<string>>('', {
        method: 'deleteAllLike',
        params: { productIds },
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
