import { rtkApi } from '@/shared/api/rtkApi';

interface Body {
  method: string;
  id: number;
}
const fetchRecommendProd = rtkApi.injectEndpoints({
  endpoints: build => ({
    getRecommendProd: build.mutation<Iresponse<Product[]>, Partial<Body>>({
      query: payload => ({
        body: payload,
        method: 'POST',
        url: '',
      }),
    }),
  }),
});

export const useFetchRecommendProd =
  fetchRecommendProd.useGetRecommendProdMutation;
