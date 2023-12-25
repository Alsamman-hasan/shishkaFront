import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StorProvider';
import { getOrders } from '@/shared/lib/sortValue/namingOrdersToParams';

export const getProductList = (state: StateSchema) =>
  state.productsPage?.productsData;
export const getBrands = (state: StateSchema) => state.productsPage?.brands;
export const getView = (state: StateSchema) =>
  state.productsPage?.view || 'Group';
export const getSizes = (state: StateSchema) => state.productsPage?.sizeList;
export const getColors = (state: StateSchema) => state.productsPage?.colors;
export const getStrength = (state: StateSchema) => state.productsPage?.strength;
export const getSortValue = (state: StateSchema) =>
  state.productsPage?.orderBy || 'Высокий рейтинг';
export const getFilterData = (state: StateSchema) =>
  state.productsPage?.dataFilter;

export const getPage = (state: StateSchema) => state.productsPage?.page || 1;
export const getPages = (state: StateSchema) => state.productsPage?.pages || 0;
export const getFound = (state: StateSchema) => state.productsPage?.found;
export const getSearch = (state: StateSchema) => state.productsPage?.search;
export const getGroupId = (state: StateSchema) => state.productsPage?.groupId;
export const getTotal = (state: StateSchema) => state.productsPage?.total;
export const getStep = (state: StateSchema) => state.productsPage?.step || 9;
export const getIsLoadingProducts = (state: StateSchema) =>
  state.productsPage?.isLoading;

export const getIsEmpty = createSelector(getFound, found => {
  if (found === 0) return true;
  return false;
});

export const getParams = createSelector(
  getPage,
  getStep,
  getGroupId,
  getSortValue,
  getFilterData,
  (page, step, groupId, sort, filters) => {
    const orderBy = getOrders(sort);
    return {
      ...filters,
      groupId,
      orderBy,
      page,
      step,
    };
  },
);
