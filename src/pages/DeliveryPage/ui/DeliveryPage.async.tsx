import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const DeliveryPageAsync = lazyRetry(() => import('./DeliveryPage'));
