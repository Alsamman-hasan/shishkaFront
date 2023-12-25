import { createSelector } from '@reduxjs/toolkit';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
// import { conversionBlogs } from '../../lib/conversionBlogs';
import { StateSchema } from '@/app/providers/StorProvider';

export const getIsLoading = (state: StateSchema) => state?.catalogs?.isLoading;
export const getError = (state: StateSchema) => state?.catalogs?.error;
export const getBlogs = (state: StateSchema) => state?.catalogs?.catalogs;

export const getBlogsItems = createSelector(
  getBlogs,
  catalog =>
    // if (catalog) return conversionBlogs(catalog);

    undefined,
);
