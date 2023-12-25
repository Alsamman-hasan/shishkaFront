import { createAsyncThunk } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import {
  getSignInEmail,
  getSignInPassword,
} from '../../selectors/getSignInData';
import { ThunkConfig } from '@/app/providers/StorProvider';
import { authDataActions } from '@/entities/authData';

export const signInReq = createAsyncThunk<
  Iresponse<string>, //  возврашает,
  void, //  аргументы в запрос или  body
  ThunkConfig<string> // config request
>('signIn', async (_, { extra, rejectWithValue, getState, dispatch }) => {
  try {
    const email = getSignInEmail(getState());
    const password = getSignInPassword(getState());
    const response = await extra.api.post<Iresponse<string>>('', {
      method: 'signIn',
      params: {
        email,
        password,
      },
    });
    if (response.data.error) {
      if (response.data.error.code === 'UNAUTHENTICATED') {
        enqueueSnackbar('Email или пароль не верны', { variant: 'error' });
        return rejectWithValue('Email или пароль не верны');
      }
      return rejectWithValue(response.data.error.message);
    }
    dispatch(authDataActions.setAuthData(response?.data?.result as string));
    dispatch(authDataActions.setIsAuth(true));
    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
