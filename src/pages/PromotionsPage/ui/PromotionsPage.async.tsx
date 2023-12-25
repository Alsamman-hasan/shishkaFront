import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const PromotionsPageAsync = lazyRetry(() => import('./PromotionsPage'));
