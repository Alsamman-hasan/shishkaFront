import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const MainCatalogsPageAsync = lazyRetry(
  () => import('./MainCatalogsPage'),
);
