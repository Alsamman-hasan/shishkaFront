import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { shops } from '../selector/ShopsData';
import { cities } from '../selector/citiesData';
import { ShopeCity, ShopsPageSchema } from '../types/types';

const initialState: ShopsPageSchema = {
  cities,
  selectShop: { id: 0, title: 'Все' },
  stores: shops,
};

const shopPageSlice = createSlice({
  initialState,
  name: 'shopsPage',
  reducers: {
    setChooseCity: (state, { payload }: PayloadAction<ShopeCity>) => {
      if (!payload.title) return;
      const filterShops = shops.filter(item => item.city === payload.title);
      if (payload.title === 'Все') state.stores = shops;
      else state.stores = filterShops;
      state.selectShop = payload;
    },
  },
});

export const { actions: shopPageActions } = shopPageSlice;
export const { reducer: shopPageReducer } = shopPageSlice;
