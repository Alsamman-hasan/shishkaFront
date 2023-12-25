import { StateSchema } from '@/app/providers/StorProvider';

export const getProfileData = (state: StateSchema) => state?.profileData?.data;

export const getProfileReadonly = (state: StateSchema) =>
  state?.profileData?.readonly;

export const getProfileIsLoading = (state: StateSchema) =>
  state?.profileData?.isLoading;

export const getProfileIsUpdateLoading = (state: StateSchema) =>
  state?.profileData?.isUpdateLoading;
export const getProfileError = (state: StateSchema) =>
  state?.profileData?.error;
