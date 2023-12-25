import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';
import { checkoutReq } from '../services/checkout';
import { CheckoutSchema } from '../types/checkoutTypes';

const initialState: CheckoutSchema = {
  birthday: null,
  checkoutLoading: false,
  city: '',
  error: undefined,
  fullName: '',
  isLoading: false,
  store: '',
  successCheckout: false,
};

const checkoutSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(checkoutReq.pending, state => {
        state.error = undefined;
        state.isLoading = true;
        state.successCheckout = false;
        state.checkoutLoading = true;
      })
      .addCase(
        checkoutReq.fulfilled,
        (state, { payload }: PayloadAction<Iresponse<string>>) => {
          state.isLoading = false;
          state.error = undefined;
          state.successCheckout = true;
          state.checkoutLoading = false;
        },
      )
      .addCase(checkoutReq.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.successCheckout = false;
        state.checkoutLoading = false;
      });
  },
  initialState,
  name: 'checkout',
  reducers: {
    setBirthday: (state, { payload }: PayloadAction<Dayjs | null>) => {
      state.birthday = payload;
    },
    setCity: (state, { payload }: PayloadAction<string>) => {
      state.city = payload;
    },
    setDataProcessing: (state, { payload }: PayloadAction<boolean>) => {
      state.dataProcessing = payload;
    },
    setFullName: (state, { payload }: PayloadAction<string>) => {
      state.fullName = payload;
    },
    setPhone: (state, { payload }: PayloadAction<string>) => {
      state.mobile = payload;
    },
    setStore: (state, { payload }: PayloadAction<string>) => {
      state.store = payload;
    },
  },
});

export const { actions: checkoutActions } = checkoutSlice;
export const { reducer: checkoutReducer } = checkoutSlice;
