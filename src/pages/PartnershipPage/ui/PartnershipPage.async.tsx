import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const PartnershipPageAsync = lazyRetry(
  () => import('./PartnershipPage'),
);
