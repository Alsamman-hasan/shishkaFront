/* eslint-disable ulbi-tv-plugin/layer-imports */
import { StateSchema } from '@/app/providers/StorProvider';

export const getSignInEmail = (state: StateSchema) =>
  state?.SignIn?.email || '';

export const getSignInPhone = (state: StateSchema) =>
  state?.SignIn?.phone || '';

export const getSignInPassword = (state: StateSchema) =>
  state?.SignIn?.password || '';

export const getSignInIsLoading = (state: StateSchema) =>
  state?.SignIn?.isLoading || false;

export const getSignInError = (state: StateSchema) => state?.SignIn?.error;

export const getSignInNewsMailings = (state: StateSchema) =>
  state?.SignIn?.newsMailings || false;

export const getSignInDataProcessing = (state: StateSchema) =>
  state?.SignIn?.dataProcessing || false;

export const getAuthData = (state: StateSchema) => state?.SignIn;
