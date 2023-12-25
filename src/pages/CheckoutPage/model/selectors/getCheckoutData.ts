import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StorProvider';

export const getCheckoutFullName = (state: StateSchema) =>
  state?.Checkout?.fullName || state.profileData?.data?.name;

export const getCheckoutBirthday = (state: StateSchema) =>
  state?.Checkout?.birthday || state.profileData?.data?.birthday || null;

export const getCheckoutCity = (state: StateSchema) =>
  state?.Checkout?.city || state.profileData?.data?.city || '';

export const getCheckoutDataProcessing = (state: StateSchema) =>
  state?.Checkout?.dataProcessing;

export const getCheckoutError = (state: StateSchema) => state?.Checkout?.error;

export const getCheckoutIsLoading = (state: StateSchema) =>
  state?.Checkout?.isLoading;

export const getCheckoutPhone = (state: StateSchema) =>
  state?.Checkout?.mobile || state.profileData?.data?.mobile || '';

export const getCheckoutStore = (state: StateSchema) =>
  state?.Checkout?.store || '';

export const getCheckoutSuccess = (state: StateSchema) =>
  state?.Checkout?.successCheckout || false;

export const getCheckoutLoading = (state: StateSchema) =>
  state?.Checkout?.checkoutLoading || false;

export const getParams = createSelector(
  getCheckoutBirthday,
  getCheckoutCity,
  getCheckoutPhone,
  getCheckoutFullName,
  getCheckoutStore,
  (birthday, city, mobile, name, storeId) => ({
    birthday,
    city,
    // mobile,
    name,
    storeId,
  }),
);
