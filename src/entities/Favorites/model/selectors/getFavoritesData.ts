import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StorProvider';

export const getSort = (state: StateSchema) =>
  state.favorites?.sort || 'Высокий рейтинг';

export const getFavoriteData = (state: StateSchema) =>
  state.favorites?.data || [];

export const getFavoriteIsLoading = (state: StateSchema) =>
  state.favorites?.isLoading || false;

export const getFavoriteError = (state: StateSchema) => state.favorites?.error;

export const getFavCartLength = createSelector(
  getFavoriteData,
  carts => carts.length,
);
