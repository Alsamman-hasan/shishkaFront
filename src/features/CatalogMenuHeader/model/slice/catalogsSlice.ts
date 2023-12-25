import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { conversionCatalogs } from '../../lib/converMenuCatalogs';
import { fetchCatalogs } from '../service/fetchCatalogs';
import { CatalogMenuSchema } from '../types/catalogMenu';

const initialState: CatalogMenuSchema = {
  catalogMenu: [],
  error: undefined,
  isLoading: false,
};

const catalogsMenuSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchCatalogs.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCatalogs.fulfilled,
        (state, { payload }: PayloadAction<Iresponse<Catalogs[]>>) => {
          state.isLoading = false;
          state.catalogMenu = conversionCatalogs(payload.result as Catalogs[]);
        },
      )
      .addCase(fetchCatalogs.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'catalogsMenu',
  reducers: {},
});

export const { actions: catalogsMenuActions } = catalogsMenuSlice;
export const { reducer: catalogsMenuReducer } = catalogsMenuSlice;
