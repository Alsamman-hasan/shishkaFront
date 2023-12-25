import { createAsyncThunk } from '@reduxjs/toolkit';
import { Partnerships } from '../types/partnership';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { ThunkConfig } from '@/app/providers/StorProvider';

export const fetchPartnershipsData = createAsyncThunk<
  Iresponse<Partnerships[]>,
  void,
  ThunkConfig<string>
>(
  'partnerships/fetchPartnershipsData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<Iresponse<Partnerships[]>>('', {
        // method: 'addForm',
      });
      if (response.data.error || !response.data)
        return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');

      return response.data;
    } catch (e) {
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
  },
);
