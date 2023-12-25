import { rtkApi } from '@/shared/api/rtkApi';

interface Body {
  method: string;
}
const refreshSessionApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    refreshSession: build.mutation<Iresponse<string>, Partial<Body>>({
      query: payload => ({
        body: payload,
        method: 'POST',
        url: 'refreshSession',
      }),
    }),
  }),
});

export const useRefreshSessionApi = refreshSessionApi.useRefreshSessionMutation;
