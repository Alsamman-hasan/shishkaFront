// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { StateSchema } from '@/app/providers/StorProvider';

export const getIsLoading = (state: StateSchema) => state?.mainPage.isLoading;
export const getError = (state: StateSchema) => state?.mainPage.error;
export const getCatalogs = (state: StateSchema) => state?.mainPage.catalogs;
