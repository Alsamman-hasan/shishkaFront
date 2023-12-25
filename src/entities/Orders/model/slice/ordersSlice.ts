import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllOrdersReq } from '../service/fetchAllOrders';
import { fetchCountOrdersReq } from '../service/fetchCountOrders';
import { fetchOrderDetailsReq } from '../service/fetchOrderDetails';
import { OrdersSchema, Statuses } from '../types/orderSchema';

const initialState: OrdersSchema = {
  isLoading: true,
  isLoadingDetails: false,
  selectOrderId: '',
  sort: 'new',
  status: 'all',
  step: 5,
};

const orderSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchAllOrdersReq.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchAllOrdersReq.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const orders = payload.result?.map(o => ({
          ...o,
          name: o.id,
        }));
        state.orders = orders;
      })
      .addCase(fetchAllOrdersReq.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(fetchCountOrdersReq.pending, state => {
        // state.errorDetails = undefined;
        // state.isLoadingDetails = true;
      })
      .addCase(fetchCountOrdersReq.fulfilled, (state, { payload }) => {
        // state.isLoadingDetails = false;
        // const count = Number(payload.result) / state.step;
        state.pages = payload.result;
      })
      .addCase(fetchCountOrdersReq.rejected, (state, { payload }) => {
        // state.isLoadingDetails = false;
        // state.errorDetails = payload;
      })

      .addCase(fetchOrderDetailsReq.pending, state => {
        state.errorDetails = undefined;
        state.isLoadingDetails = true;
      })
      .addCase(fetchOrderDetailsReq.fulfilled, (state, { payload }) => {
        state.isLoadingDetails = false;
        state.orderDetails = payload.result;
      })
      .addCase(fetchOrderDetailsReq.rejected, (state, { payload }) => {
        state.isLoadingDetails = false;
        state.errorDetails = payload;
      });
  },
  initialState,
  name: 'orders',
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setSelectId: (state, { payload }: PayloadAction<string>) => {
      state.selectOrderId = payload;
    },
    setSort: (state, { payload }: PayloadAction<Sorts>) => {
      state.sort = payload;
    },
    setStatus: (state, { payload }: PayloadAction<Statuses>) => {
      state.status = payload;
    },
  },
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
