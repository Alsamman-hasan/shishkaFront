import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToCart } from '../services/addToBasket/addToBasket';
import { ProductSchema } from '../types/productType';

const initialState: ProductSchema = {
  error: undefined,
  isAddToCartLoading: false,
  isLoading: false,
};

const productSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(addToCart.pending, state => {
        state.isAddToCartError = undefined;
        state.isAddToCartLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.isAddToCartLoading = false;
        state.isAddToCartError = undefined;
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.isAddToCartLoading = false;
        state.isAddToCartError = payload;
      });
  },
  initialState,
  name: 'product',
  reducers: {
    setAddedToCartProductId: (state, { payload }: PayloadAction<string>) => {
      state.productId = payload;
    },

    setCategory: (state, { payload }: PayloadAction<string>) => {
      state.categoryName = payload;
    },
    setNameAndIdCategory: (state, { payload }: PayloadAction<Groups>) => {
      state.selectGroup = payload;
    },
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
