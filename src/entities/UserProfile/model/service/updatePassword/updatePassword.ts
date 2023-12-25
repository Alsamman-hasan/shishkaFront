import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { getProfilePasswords } from '../../selectors/getPasswords/getPasswords';
import { Passwords } from '../../types/Profile';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const updatePasswordReq = createAsyncThunk<
  Iresponse<Passwords>,
  void,
  ThunkConfig<string>
>('profile/updatePassword', async (_, { extra, rejectWithValue, getState }) => {
  const passwords = getProfilePasswords(getState());
  if (!passwords) return rejectWithValue('noData');

  try {
    const response = await extra.api.post<Iresponse<Passwords>>('', {
      method: 'updatePassword',
      params: {
        current: passwords.oldPassword,
        next: passwords.newPassword,
      },
    });
    if (response.data.error || !response.data)
      return rejectWithValue('пожалуйста введете правильный пароль');

    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
