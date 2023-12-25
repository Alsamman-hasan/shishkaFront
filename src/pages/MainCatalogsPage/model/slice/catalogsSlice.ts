import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCatalogsData } from '../service/fetchCatalogs';
import { CatalogsSchema } from '../types/catalog';

const initialState: CatalogsSchema = {
  catalogs: [],
  error: undefined,
  isLoading: false,
};

const catalogsSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchCatalogsData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCatalogsData.fulfilled,
        (state, { payload }: PayloadAction<Iresponse<Catalogs[]>>) => {
          state.isLoading = false;
          state.catalogs = payload.result as Catalogs[];
        },
      )
      .addCase(fetchCatalogsData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'catalogs',
  reducers: {},
});

export const { actions: catalogsActions } = catalogsSlice;
export const { reducer: catalogsReducer } = catalogsSlice;
