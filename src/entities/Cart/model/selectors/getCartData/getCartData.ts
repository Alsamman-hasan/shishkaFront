import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StorProvider';

export const getCartItems = (state: StateSchema) => state?.carts?.carts || [];

export const getCartSum = (state: StateSchema) => state?.carts?.sum || 0;
export const getCartSavings = (state: StateSchema) =>
  state?.carts?.savings?.toFixed(3) || 0;
export const getCartTotalSum = (state: StateSchema) =>
  state?.carts?.totalCoast || 0;

export const getIsLoading = (state: StateSchema) => state?.carts?.isLoading;
export const getRemoveIsLoading = (state: StateSchema) =>
  state?.carts?.isRemoveLoading;
export const getDeletedIdIsLoading = (state: StateSchema) =>
  state?.carts?.deletedCartID;

export const getUpdatedCart = (state: StateSchema) => state?.carts?.updateCart;
export const getUpdatedCartLoading = (state: StateSchema) =>
  state?.carts?.isUpdateLoading;

export const getTotal = createSelector(getCartItems, carts => {
  if (carts.length) {
    const total = carts.map(i => i.sum).reduce((a, b) => a + b);
    return total.toFixed(3) || 0;
  }
  return 0;
});

export const getCartLength = createSelector(
  getCartItems,
  carts => carts.length,
);
export const getCountCarts = createSelector(getCartItems, carts => {
  if (carts.length === 1) return `${carts.length} товар`;
  if (carts.length <= 4 || carts.length >= 2) return `${carts.length} товара`;
  return `${carts.length} товаров`;
});
