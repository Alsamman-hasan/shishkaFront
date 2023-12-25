import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const ProfilePageAsync = lazyRetry(() => import('./ProfilePage'));
