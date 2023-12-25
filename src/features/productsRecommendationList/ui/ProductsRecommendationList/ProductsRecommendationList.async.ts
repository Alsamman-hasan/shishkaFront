import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const RecommendProdAsync = lazyRetry(
  () => import('./ProductsRecommendationList'),
);
