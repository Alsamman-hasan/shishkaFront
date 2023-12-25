import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';
import { updatePasswordReq } from '../service/updatePassword/updatePassword';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { Profile, ProfileSchema, Passwords } from '../types/Profile';

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  isLoadingPassword: false,
  isPasswordChanged: false,
  isUpdateLoading: false,
  passwordError: undefined,
  readonly: false,
};

const profileSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, { payload }: PayloadAction<Iresponse<Profile>>) => {
          state.isLoading = false;
          state.data = payload.result;
          state.form = payload.result;
        },
      )
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateProfileData.pending, state => {
        state.error = undefined;
        state.isUpdateLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, { payload }: PayloadAction<Iresponse<Profile>>) => {
          state.data = payload.result;
          state.form = payload.result;
          state.isUpdateLoading = false;
          state.readonly = false;
        },
      )
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.error = payload;
        state.isUpdateLoading = false;
      })
      .addCase(updatePasswordReq.pending, state => {
        state.passwordError = undefined;
        state.isLoadingPassword = true;
      })
      .addCase(updatePasswordReq.fulfilled, state => {
        state.isLoadingPassword = false;
        state.isPasswordChanged = false;
        // state.passwords = undefined;
      })
      .addCase(updatePasswordReq.rejected, (state, { payload }) => {
        state.isLoadingPassword = false;
        state.passwordError = payload;
      });
  },
  initialState,
  name: 'profile',
  reducers: {
    setClearUpdate: state => {
      state.readonly = false;
      state.isUpdateLoading = false;
      state.form = state.data;
    },
    setClearUpdatePassword: state => {
      state.isPasswordChanged = false;
      state.passwords = undefined;
    },
    updatePassword: (state, { payload }: PayloadAction<Passwords>) => {
      state.isPasswordChanged = true;
      state.passwordError = undefined;
      state.passwords = {
        ...state.passwords,
        ...payload,
      };
    },
    updateProfile: (state, { payload }: PayloadAction<Profile>) => {
      state.readonly = true;
      state.form = {
        ...state.form,
        ...payload,
      };
    },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
