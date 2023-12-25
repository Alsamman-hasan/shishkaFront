import { rtkApi } from '@/shared/api/rtkApi';

interface Body {
  method: string;
}
const logoutApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    logout: build.mutation<Iresponse<string>, Partial<Body>>({
      query: payload => ({
        body: payload,
        method: 'POST',
        url: '',
      }),
    }),
  }),
});

export const useLogoutApi = logoutApi.useLogoutMutation;
