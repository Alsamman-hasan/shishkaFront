import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const CartPageAsync = lazyRetry(() => import('./CartPage'));
