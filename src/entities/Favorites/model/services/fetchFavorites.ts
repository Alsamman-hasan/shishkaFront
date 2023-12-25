import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSort } from '../selectors/getFavoritesData';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { getOrders } from '@/shared/lib/sortValue/namingOrdersToParams';

interface fetchFavoritesProps {
  replace?: boolean;
}

export const fetchFavorites = createAsyncThunk<
  Iresponse<Product[]>,
  fetchFavoritesProps,
  ThunkConfig<string>
>(
  'favorites/fetchFavorites',
  async (_props, { extra, rejectWithValue, getState, dispatch }) => {
    const sort = getSort(getState());
    const orderBy = getOrders(sort);
    try {
      const response = await extra.api.post<Iresponse<Product[]>>('', {
        method: 'getFavoriteProducts',
        params: { orderBy },
      });
      if (response.data.error || !response.data)
        return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);
