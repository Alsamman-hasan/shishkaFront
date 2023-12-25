import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { ThunkConfig } from '@/app/providers/StorProvider';

export const getGroups = createAsyncThunk<
  Iresponse<Catalogs[]>,
  void,
  ThunkConfig<string>
>('catalogs/fetchCatalogsData', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.post<Iresponse<Catalogs[]>>('', {
      method: 'getGroups',
    });
    if (response.data.error || !response.data)
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');

    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
