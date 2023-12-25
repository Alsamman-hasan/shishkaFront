/* eslint-disable ulbi-tv-plugin/layer-imports */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
import { getInfo } from '../../selectors/getPartnershipData/getPartnershipData';
import { PartnershipRespose } from '../../types/PartnershipSchema';
import { StateSchema, ThunkConfig } from '@/app/providers/StorProvider';

export const partnershipReq = createAsyncThunk<
  Iresponse<PartnershipRespose>, //  возврашает,
  void, //  аргументы в запрос или  body
  ThunkConfig<string> // config request
>('partnership', async (_, { extra, rejectWithValue, getState }) => {
  try {
    // eslint-disable-next-line no-use-before-define
    const data = getPartnershipData(getState());
    const valid = getInfo(getState());
    if (valid.isDisplay)
      return rejectWithValue('Пожалуйста заполните все обязательные поля');

    const response = await extra.api.post<Iresponse<PartnershipRespose>>('', {
      method: 'partnership',
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
function getPartnershipData(arg0: StateSchema) {
  throw new Error('Function not implemented.');
}
