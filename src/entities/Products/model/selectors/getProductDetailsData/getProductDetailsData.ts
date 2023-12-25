import { StateSchema } from '@/app/providers/StorProvider';

export const getProductDetails = (state: StateSchema) =>
  state.productDetails?.details;

export const getProductDetailsCategory = (state: StateSchema) =>
  state.productDetails?.details?.categoryId;

export const getProductDetailsName = (state: StateSchema) =>
  state.productDetails?.details?.name || 'loading...';

export const getProductDetailsIsLoading = (state: StateSchema) =>
  state.productDetails?.isLoading;

export const getProductDetailsError = (state: StateSchema) =>
  state.productDetails?.error;
