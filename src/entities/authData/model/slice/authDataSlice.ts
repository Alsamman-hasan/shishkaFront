import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthDataSchema } from '../types/authData';

const initialState: AuthDataSchema = {
  isAuth: false,
  seseionTime: undefined,
};

export const authDataSlice = createSlice({
  initialState,
  name: 'authData',
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<string>) => {
      state.seseionTime = payload;
      localStorage.setItem('seseionTime', payload);
    },
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
      localStorage.setItem('isAuth', payload.toString());
    },
  },
});

export const { actions: authDataActions } = authDataSlice;
export const { reducer: authDataReducer } = authDataSlice;
