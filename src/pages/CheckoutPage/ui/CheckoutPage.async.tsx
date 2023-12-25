import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const CheckoutPageAsync = lazyRetry(() => import('./CheckoutPage'));
