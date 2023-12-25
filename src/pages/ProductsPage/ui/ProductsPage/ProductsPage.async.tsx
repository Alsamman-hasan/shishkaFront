import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const ProductsPageAsync = lazyRetry(() => import('./ProductsPage'));
