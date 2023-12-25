/* eslint-disable ulbi-tv-plugin/layer-imports */
import { StateSchema } from '@/app/providers/StorProvider';

export const getPartnershipEmail = (state: StateSchema) =>
  state?.Partnership?.email.email || '';

export const getPartnershipEmailError = (state: StateSchema) =>
  state?.Partnership?.email.errorMessage || '';

export const getPartnershipPhone = (state: StateSchema) =>
  state?.Partnership?.mobile || '';

export const getPartnershipLocality = (state: StateSchema) =>
  state?.Partnership?.city || '';

export const getPartnershipIsLoading = (state: StateSchema) =>
  state?.Partnership?.isLoading || false;

export const getPartnershipError = (state: StateSchema) =>
  state?.Partnership?.error;

export const getPartnershipNewsMailings = (state: StateSchema) =>
  state?.Partnership?.newsMailings || false;

export const getPartnershipTitleOrganization = (state: StateSchema) =>
  state?.Partnership?.titleOrganization || '';

export const getPartnershipAboutMe = (state: StateSchema) =>
  state?.Partnership?.aboutMe || '';

export const getPartnershipData = (state: StateSchema) => ({
  aboutMe: state.Partnership?.aboutMe,
  city: state.Partnership?.city,
  email: state.Partnership?.email.email,
  mobile: state.Partnership?.mobile,
  titleOrganization: state.Partnership?.titleOrganization,
});

export const getInfo = (state: StateSchema) => {
  const err: string[] = [];
  let isDisplay = false;
  if (state.Partnership) {
    const { email, mobile, city } = state.Partnership;
    if (!email.email || email.hasError) isDisplay = true;

    if (state.Partnership.hasDispatch) {
      if (!mobile) err.push('Телефон');

      if (!city) err.push('Город');
    }
  }
  return { err, isDisplay };
};
