import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getGroups } from '../services/getGroups';
import { MainPageSchema } from '../types/MainComponents';

const initialState: MainPageSchema = {
  catalogs: [],
  error: undefined,
  isLoading: false,
};

const mainPageSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(getGroups.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        getGroups.fulfilled,
        (state, { payload }: PayloadAction<Iresponse<Catalogs[]>>) => {
          state.isLoading = false;
          state.catalogs = payload.result as Catalogs[];
        },
      )
      .addCase(getGroups.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'mainPage',
  reducers: {},
});

export const { actions: mainActions } = mainPageSlice;
export const { reducer: mainReducer } = mainPageSlice;
