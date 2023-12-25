import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createArrayFromObj,
  enNamesColor,
  russianNamesColor,
  getNewFilterValue,
} from '../lib';
import { sortItems } from '../selector/getInitialData/getInitialData';
import { fetchProducts } from '../service/fetchProducts';
import {
  ProductsPageSchema,
  DataFilter,
  Colors,
  ColorsRus,
} from '../types/productsPage';
import { CheckBoxesType } from '@/features/ProductFilters';
import { SortTypes } from '@/features/ProductSort';

const initialState: ProductsPageSchema = {
  brands: [],
  colors: [],
  error: undefined,
  groupId: '',
  isLoading: false,
  orderBy: 'Высокий рейтинг',
  page: 1,
  pages: 0,
  productsData: [],
  sizeList: [],
  sortItems,
  step: 9,
  strength: [],
  total: 0,
  view: 'Group',
};

const productsPageSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false;
        state.found = payload.result?.found;
        state.total = payload.result?.total;
        state.pages = payload.result?.pages;
        state.productsData = payload.result?.items;
        if (meta.arg.replace) {
          state.filters = payload.result?.filters;
          const colorRus = payload.result?.filters.color.map(c =>
            russianNamesColor(c as Colors),
          );
          const brandItems = createArrayFromObj(payload.result?.filters?.brand);
          const sizItems = createArrayFromObj(payload.result?.filters?.volume);
          const colors = createArrayFromObj(colorRus);
          const strength = createArrayFromObj(
            payload.result?.filters?.strength,
          );
          state.brands = brandItems || [];
          state.sizeList = sizItems || [];
          state.colors = colors || [];
          state.strength = strength || [];
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  initialState,
  name: 'productsPage',
  reducers: {
    setChooseBrand: (state, { payload }: PayloadAction<CheckBoxesType>) => {
      const { newItem, selectItem } = getNewFilterValue(state.brands, payload);
      state.brands = newItem;
      state.dataFilter = { ...state.dataFilter, brand: selectItem };
    },
    setChooseColor: (state, { payload }: PayloadAction<CheckBoxesType>) => {
      const { newItem, selectItem } = getNewFilterValue(state.colors, payload);
      const enColor = selectItem?.map(c => enNamesColor(c as ColorsRus));
      state.colors = newItem;
      state.dataFilter = { ...state.dataFilter, color: enColor };
    },
    setChooseSize: (state, { payload }: PayloadAction<CheckBoxesType>) => {
      const { newItem, selectItem } = getNewFilterValue(
        state.sizeList,
        payload,
      );
      state.sizeList = newItem;
      const newSelect = selectItem?.map(s => Number(s));
      state.dataFilter = { ...state.dataFilter, volume: newSelect };
    },
    setChooseStrength: (state, { payload }: PayloadAction<CheckBoxesType>) => {
      const { newItem, selectItem } = getNewFilterValue(
        state.strength,
        payload,
      );
      state.strength = newItem;
      const newSelect = selectItem?.map(s => Number(s));
      state.dataFilter = { ...state.dataFilter, strength: newSelect };
    },
    setClearFilter: state => {
      state.dataFilter = undefined;
    },
    setFilterValues: (state, { payload }: PayloadAction<DataFilter>) => {
      state.dataFilter = { ...state.dataFilter, ...payload };
    },

    setGroupId: (state, { payload }: PayloadAction<string>) => {
      state.groupId = payload;
    },

    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setSort: (state, { payload }: PayloadAction<SortTypes>) => {
      state.orderBy = payload;
    },
    setView: (state, { payload }: PayloadAction<ProductView>) => {
      state.view = payload;
    },
  },
});

export const { actions: productsPageActions } = productsPageSlice;
export const { reducer: productsPageReducer } = productsPageSlice;
