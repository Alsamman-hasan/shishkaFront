import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBlogsData } from '../service/fetchBlogs';
import { BlogsSchema } from '../types/blog';

const initialState: BlogsSchema = {
  catalogs: [],
  error: undefined,
  isLoading: false,
};

const BlogsSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(fetchBlogsData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchBlogsData.fulfilled,
        (state, { payload }: PayloadAction<Iresponse<Catalogs[]>>) => {
          state.isLoading = false;
          state.catalogs = payload.result as Catalogs[];
        },
      )
      .addCase(fetchBlogsData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  initialState,
  name: 'catalogs',
  reducers: {},
});

export const { actions: blogsActions } = BlogsSlice;
export const { reducer: blogsReducer } = BlogsSlice;
