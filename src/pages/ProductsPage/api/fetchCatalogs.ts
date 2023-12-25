import { rtkApi } from '@/shared/api/rtkApi';

interface Body {
  method: string;
}
const fetchCatalogsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    fetchCatalogs: build.mutation<Iresponse<Catalogs[]>, Partial<Body>>({
      query: payload => ({
        body: payload,
        method: 'POST',
        url: '',
      }),
    }),
  }),
});

export const useFetchCatalogsApi = fetchCatalogsApi.useFetchCatalogsMutation;
