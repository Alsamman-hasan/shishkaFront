import { createSlice } from '@reduxjs/toolkit';
import { fetchProductDetails } from '../services/fetchProductDetails/fetchProductDetails';
import { ProductDetailsSchema } from '../types/productDetailsType';

const initialState: ProductDetailsSchema = {
  error: undefined,
  isLoading: true,
};

const productDetailsSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchProductDetails.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = undefined;
        state.details = payload.result;
      })
      .addCase(fetchProductDetails.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'productDetails',
  reducers: {},
});

export const { actions: productDetailsActions } = productDetailsSlice;
export const { reducer: productDetailsReducer } = productDetailsSlice;
