/* eslint-disable ulbi-tv-plugin/layer-imports */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/Profile';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const updateProfileData = createAsyncThunk<
  Iresponse<Profile>,
  void,
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());
    if (!formData) return rejectWithValue('noData');

    try {
      const sex = formData.sex === 'муж' ? 'male' : 'female';
      const data = {
        birthday: formData.birthday,
        card_code: formData.card_code,
        city: formData.city,
        email: formData.email,
        mobile: formData.mobile,
        name: formData.name,
        sex,
      };
      const response = await extra.api.post<Iresponse<Profile>>('', {
        method: 'updateUser',
        params: data,
      });
      if (response.data.error?.message || !response.data)
        return rejectWithValue(response.data.error?.message || '');

      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);
