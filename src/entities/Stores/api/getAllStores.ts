import { Stores } from '../model/types/stores';
import { rtkApi } from '@/shared/api/rtkApi';

interface Body {
  method: string;
}
const fetchAllStoresApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getStores: build.mutation<Iresponse<Stores[]>, Partial<Body>>({
      query: payload => ({
        body: payload,
        method: 'POST',
        url: '',
      }),
    }),
  }),
});

export const useFetchStoresApi = fetchAllStoresApi.useGetStoresMutation;
