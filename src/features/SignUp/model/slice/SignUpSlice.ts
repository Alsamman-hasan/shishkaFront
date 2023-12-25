import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';
import { signUpReq } from '../service/SignUpReq/signUpReq';
import { SignUpSchema } from '../types/SignUpSchema';
import {
  ValidateName,
  ValidatePassword,
  validatorEmail,
} from '@/shared/lib/validation/validationForm';

const initialState: SignUpSchema = {
  birthday: null,
  city: '',
  dataProcessing: false,
  email: {
    email: '',
  },
  fullName: {
    fullName: '',
  },
  hasDispatch: false,
  isLoading: false,
  newsMailings: false,
  password: {
    password: '',
  },
  sex: '',
};

export const SignUpSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(signUpReq.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(signUpReq.fulfilled, state => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(signUpReq.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.hasDispatch = true;
      });
  },
  initialState,
  name: 'SignUp',
  reducers: {
    setBirthday: (state, { payload }: PayloadAction<Dayjs | null>) => {
      state.hasDispatch = false;
      state.birthday = payload;
    },
    setDataProcessing: (state, { payload }: PayloadAction<boolean>) => {
      state.dataProcessing = payload;
      state.hasDispatch = false;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      const err = validatorEmail(payload);
      state.email.hasError = !err;
      if (!err) state.email.errorMessage = 'Input valid Email';
      state.hasDispatch = false;
      state.email.email = payload;
    },
    setFullName: (state, { payload }: PayloadAction<string>) => {
      const validName = ValidateName(payload);
      state.fullName.hasError = !validName;
      if (!validName)
        state.fullName.errorMessage =
          'ФОИ не должны быть менее 5 символов и не содержать цифры';
      else state.fullName.errorMessage = undefined;

      state.hasDispatch = false;
      state.fullName.fullName = payload;
    },
    setLocality: (state, { payload }: PayloadAction<string>) => {
      state.hasDispatch = false;
      state.city = payload;
    },
    setNewsMailings: (state, { payload }: PayloadAction<boolean>) => {
      state.newsMailings = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      const valid = ValidatePassword(payload);
      state.hasDispatch = false;
      state.password.hasError = !valid;
      if (!valid)
        state.password.errorMessage =
          'Длина поля «пароль» должна быть больше или равна 8 символам.';
      state.password.password = payload;
    },
    setPhone: (state, { payload }: PayloadAction<string>) => {
      state.mobile = payload;
    },
    setSex: (state, { payload }: PayloadAction<string>) => {
      state.sex = payload;
      state.hasDispatch = false;
    },
  },
});

export const { actions: signUpActions } = SignUpSlice;
export const { reducer: signUpReducer } = SignUpSlice;
