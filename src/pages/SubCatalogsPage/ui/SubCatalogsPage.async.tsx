import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const SubCatalogsPageAsync = lazyRetry(
  () => import('./SubCatalogsPage'),
);
