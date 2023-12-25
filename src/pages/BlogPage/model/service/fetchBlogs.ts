import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { Blogs } from '../types/blog';
import { ThunkConfig } from '@/app/providers/StorProvider';

export const fetchBlogsData = createAsyncThunk<
  Iresponse<Blogs[]>,
  void,
  ThunkConfig<string>
>('blogs/fetchBlogsData', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.post<Iresponse<Blogs[]>>('', {
      method: 'getGroups',
    });
    if (response.data.error || !response.data)
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');

    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
