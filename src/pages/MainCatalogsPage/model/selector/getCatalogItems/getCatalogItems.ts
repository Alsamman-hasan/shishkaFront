import { createSelector } from '@reduxjs/toolkit';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { conversionCatalogs } from '../../lib/conversionCatalogs';
import { StateSchema } from '@/app/providers/StorProvider';

export const getIsLoading = (state: StateSchema) => state?.catalogs?.isLoading;
export const getError = (state: StateSchema) => state?.catalogs?.error;
export const getCatalogs = (state: StateSchema) => state?.catalogs?.catalogs;

export const getCatalogsItems = createSelector(getCatalogs, catalog => {
  if (catalog) return conversionCatalogs(catalog);

  return undefined;
});
