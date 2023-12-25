import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SubCatalogsSchema } from '../types/subCatalog';

const initialState: SubCatalogsSchema = {
  subCategory: {
    category: '',
    categoryId: '',
    groups: [],
  },
};

const subCatalogsSlice = createSlice({
  initialState,
  name: 'subCatalogs',
  reducers: {
    setSubCategory: (
      state,
      { payload }: PayloadAction<Catalogs | undefined>,
    ) => {
      if (payload) state.subCategory = payload;
    },
  },
});

export const { actions: subCatalogsActions } = subCatalogsSlice;
export const { reducer: subCatalogsReducer } = subCatalogsSlice;
