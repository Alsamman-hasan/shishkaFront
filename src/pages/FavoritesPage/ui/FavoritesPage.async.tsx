import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const FavoritesPageAsync = lazyRetry(() => import('./FavoritesPage'));
