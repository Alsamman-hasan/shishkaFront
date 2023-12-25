import { StateSchema } from '@/app/providers/StorProvider';

export const getAddToCartIsLoading = (state: StateSchema) =>
  state.product?.isAddToCartLoading;

export const getAddToCartError = (state: StateSchema) =>
  state.product?.isAddToCartError;

export const getProductAddToCart = (state: StateSchema) =>
  state.product?.productId;
