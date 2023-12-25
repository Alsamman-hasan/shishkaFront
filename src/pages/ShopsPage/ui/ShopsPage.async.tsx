import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const ShopsPageAsync = lazyRetry(() => import('./ShopsPage'));
