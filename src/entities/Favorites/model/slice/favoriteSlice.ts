import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFavorites } from '../services/fetchFavorites';
import { FavoritesSchema } from '../types/favoritesTypes';
import { SortTypes } from '@/features/ProductSort';

const initialState: FavoritesSchema = {
  isLoading: false,
  sort: 'Высокий рейтинг',
};

const favoritesSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchFavorites.pending, (state, action) => {
        state.error = undefined;
        if (action.meta.arg.replace) state.isLoading = false;
        else state.isLoading = true;
      })
      .addCase(
        fetchFavorites.fulfilled,
        (state, { payload }: PayloadAction<Iresponse<Product[]>>) => {
          state.isLoading = false;
          state.error = undefined;
          state.data = payload.result;
        },
      )
      .addCase(fetchFavorites.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'favorites',
  reducers: {
    setSort: (state, { payload }: PayloadAction<SortTypes>) => {
      state.sort = payload;
    },
  },
});

export const { actions: favoritesActions } = favoritesSlice;
export const { reducer: favoritesReducer } = favoritesSlice;
