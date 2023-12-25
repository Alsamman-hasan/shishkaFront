import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const ProductDetailsPageAsync = lazyRetry(
  () => import('./ProductDetailsPage'),
);
