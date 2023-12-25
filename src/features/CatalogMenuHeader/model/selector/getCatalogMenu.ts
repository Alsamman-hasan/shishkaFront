/* eslint-disable ulbi-tv-plugin/layer-imports */
import { StateSchema } from '@/app/providers/StorProvider';

export const getCatalogMenu = (state: StateSchema) =>
  state.CatalogMenu?.catalogMenu;

export const getIsLoading = (state: StateSchema) =>
  state.CatalogMenu?.isLoading;
