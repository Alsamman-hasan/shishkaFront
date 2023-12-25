import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const BlogDetailsPageAsync = lazyRetry(
  () => import('./BlogDetailsPage'),
);
