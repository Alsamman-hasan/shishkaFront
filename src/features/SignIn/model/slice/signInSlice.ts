import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInReq } from '../service/SignInReq/signInReq';
import { SignInSchema } from '../types/SignInScheme';

const initialState: SignInSchema = {
  dataProcessing: false,
  email: '',
  isLoading: false,
  newsMailings: false,
  password: '',
  phone: '',
};

export const SignInSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(signInReq.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(signInReq.fulfilled, state => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(signInReq.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'SignIn',
  reducers: {
    setDataProcessing: (state, { payload }: PayloadAction<boolean>) => {
      state.dataProcessing = payload;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    setNewsMailings: (state, { payload }: PayloadAction<boolean>) => {
      state.newsMailings = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
    setPhone: (state, { payload }: PayloadAction<string>) => {
      state.phone = payload;
    },
  },
});

export const { actions: signInActions } = SignInSlice;
export const { reducer: signInReducer } = SignInSlice;
