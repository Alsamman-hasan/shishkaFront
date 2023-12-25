import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StorProvider';

export const getAllStores = (state: StateSchema) => state.shops?.stores;
export const getSelectShop = (state: StateSchema) => state.shops?.selectShop;
export const getCites = (state: StateSchema) => state.shops?.cities || [];
// export const getTabItems = createSelector(getCites, cities => {
//   if (!cities) return [];
//   return cities.map(item => ({
//     id: item.id,
//     title: item.title,
//   }));
// });

export const getSelectorItems = createSelector(getCites, cities => {
  if (!cities) return [];
  return cities.map((item, i) => ({
    id: i.toString(),
    title: item.title,
  }));
});
