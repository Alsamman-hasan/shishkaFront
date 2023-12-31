import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const BlogPageAsync = lazyRetry(() => import('./BlogPage'));
