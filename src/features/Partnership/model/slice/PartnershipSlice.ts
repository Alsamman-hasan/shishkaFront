import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { partnershipReq } from '../service/PartnershipReq/partnershipReq';
import { PartnershipSchema } from '../types/PartnershipSchema';
import { validatorEmail } from '@/shared/lib/validation/validationForm';

const initialState: PartnershipSchema = {
  aboutMe: '',
  city: '',
  email: {
    email: '',
  },
  hasDispatch: false,
  isLoading: false,
  newsMailings: false,
  titleOrganization: '',
};

export const PartnershipSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(partnershipReq.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(partnershipReq.fulfilled, state => {
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(partnershipReq.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.hasDispatch = true;
      });
  },
  initialState,
  name: 'Partnership',
  reducers: {
    setAboutMe: (state, { payload }: PayloadAction<string>) => {
      state.aboutMe = payload;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      const err = validatorEmail(payload);
      state.email.hasError = !err;
      if (!err) state.email.errorMessage = 'Input valid Email';
      state.hasDispatch = false;
      state.email.email = payload;
    },
    setLocality: (state, { payload }: PayloadAction<string>) => {
      state.hasDispatch = false;
      state.city = payload;
    },
    setNewsMailings: (state, { payload }: PayloadAction<boolean>) => {
      state.newsMailings = payload;
    },
    setPhone: (state, { payload }: PayloadAction<string>) => {
      state.mobile = payload;
    },
    setTitleOrganization: (state, { payload }: PayloadAction<string>) => {
      state.titleOrganization = payload;
    },
  },
});

export const { actions: partnershipActions } = PartnershipSlice;
export const { reducer: partnershipReducer } = PartnershipSlice;
