/* eslint-disable ulbi-tv-plugin/layer-imports */
import { StateSchema } from '@/app/providers/StorProvider';

export const getProfilePasswords = (state: StateSchema) =>
  state?.profileData?.passwords;

export const getProfilePasswordsError = (state: StateSchema) =>
  state?.profileData?.passwordError;

export const getPasswordChanged = (state: StateSchema) =>
  state?.profileData?.isPasswordChanged;

export const getPasswordIsLoading = (state: StateSchema) =>
  state?.profileData?.isLoadingPassword;
