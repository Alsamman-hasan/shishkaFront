import { createAsyncThunk } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { Profile } from '../../types/Profile';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const fetchProfileData = createAsyncThunk<
  Iresponse<Profile>,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.post<Iresponse<Profile>>('', {
      method: 'getUser',
    });
    if (response.data.error) {
      if (response.data.error.code === 'UNAUTHENTICATED') {
        enqueueSnackbar('Не авторизованы', { variant: 'error' });
        return rejectWithValue('Не авторизованы');
      }
      return rejectWithValue('Не авторизованы');
    }
    return response.data;
  } catch (e) {
    enqueueSnackbar('Что-то пошло не так, попробуйте чуть позже', {
      variant: 'error',
    });
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
