import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const SignInPageAsync = lazyRetry(() => import('./SignInPage'));
