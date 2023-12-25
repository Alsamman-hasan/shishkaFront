// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { StateSchema } from '@/app/providers/StorProvider';

export const getCatalogName = (state: StateSchema) =>
  state.subCatalog?.subCategory?.category || '';

export const getCatalogId = (state: StateSchema) =>
  state.subCatalog?.subCategory?.categoryId;
