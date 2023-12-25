import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartsReq } from '../services/getCardItems/getCardItems';
import { removeCartReq } from '../services/removeCart/removeCart';
import { updateCartReq } from '../services/updateCart/updateCart';
import { CartSchema, CartUpdated } from '../types/cartSchema';

const initialState: CartSchema = {
  deletedCartID: '',
  isLoading: false,
  isRemoveLoading: false,
  isUpdateLoading: false,
  updateCart: {
    productId: '',
    qty: 1,
  },
};

export const cartSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(getCartsReq.pending, (state, action) => {
        state.error = undefined;
        if (action.meta.arg.replace) state.isLoading = false;
        else state.isLoading = true;
      })
      .addCase(getCartsReq.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = undefined;
        state.carts = payload.result?.items;
        state.savings = payload.result?.savings;
        state.sum = payload.result?.sum;
        state.totalCoast = payload.result?.totalCoast;
      })
      .addCase(getCartsReq.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeCartReq.pending, (state, action) => {
        state.removeError = undefined;
        state.isRemoveLoading = true;
      })
      .addCase(removeCartReq.fulfilled, (state, { payload }) => {
        state.isRemoveLoading = false;
        state.removeError = undefined;
      })
      .addCase(removeCartReq.rejected, (state, { payload }) => {
        state.isRemoveLoading = false;
        state.removeError = payload;
      })
      .addCase(updateCartReq.pending, state => {
        state.error = undefined;
        state.isUpdateLoading = true;
      })
      .addCase(updateCartReq.fulfilled, (state, { payload }) => {
        state.isUpdateLoading = false;
        state.error = undefined;
        if (payload.result?.length)
          state.carts = state.carts?.map(i => {
            if (payload?.result && i.id === payload?.result[0]?.productId) {
              const newItem = {
                ...i,
                qty: payload?.result[0].qty,
                sum: payload.result[0].qty * i.discountPrice,
              };
              return newItem;
            }
            return i;
          });
      })
      .addCase(updateCartReq.rejected, (state, { payload }) => {
        state.isUpdateLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'carts',
  reducers: {
    setAddCart: (state, { payload }: PayloadAction<CartUpdated>) => {
      state.updateCart.productId = payload.productId;
      state.updateCart.qty = payload.qty;
    },
    setDeleteCart: (state, { payload }: PayloadAction<string>) => {
      state.deletedCartID = payload;
      // state.carts = state.carts?.filter(i => i.id !== payload);
    },
    setRemoveCart: (state, { payload }: PayloadAction<CartUpdated>) => {
      state.updateCart.productId = payload.productId;
      state.updateCart.qty = payload.qty;
    },
  },
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
