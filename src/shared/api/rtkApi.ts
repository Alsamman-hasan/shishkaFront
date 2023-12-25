import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { enqueueSnackbar } from 'notistack';

const baseQuery = fetchBaseQuery({
  baseUrl: __API__,
  credentials: 'include',
  prepareHeaders: headers => {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json, text/plain, */*');
    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    enqueueSnackbar('Что-то пошло не так', {
      variant: 'error',
    });
    localStorage.clear();
  }

  return result;
};

export const rtkApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
  reducerPath: 'rtkApi',
});
