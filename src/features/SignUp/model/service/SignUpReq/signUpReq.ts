/* eslint-disable ulbi-tv-plugin/layer-imports */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
import {
  getInfo,
  getSignUpData,
} from '../../selectors/getSignUpData/getSignUpData';
import { SignUpRespose } from '../../types/SignUpSchema';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const signUpReq = createAsyncThunk<
  Iresponse<SignUpRespose>, //  возврашает,
  void, //  аргументы в запрос или  body
  ThunkConfig<string> // config request
>('singUp', async (_, { extra, rejectWithValue, getState }) => {
  try {
    const data = getSignUpData(getState());
    const valid = getInfo(getState());
    if (valid.isDisplay)
      return rejectWithValue('Пожалуйста заполните все обязательные поля');

    const response = await extra.api.post<Iresponse<SignUpRespose>>('', {
      method: 'signUp',
      params: data,
    });

    if (response.data.error) {
      if (response.data.error.code === 'ALREADY_EXISTS') {
        enqueueSnackbar('Пользователь с такой Email или имя уже существует', {
          variant: 'error',
        });
        return rejectWithValue(
          'Пользователь с такой Email или имя уже существует',
        );
      }
      return rejectWithValue(response.data.error.message);
    }
    enqueueSnackbar(
      'Вы успешно зарегистрировались, можете войти в ваш аккаунт',
      {
        variant: 'success',
      },
    );
    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
