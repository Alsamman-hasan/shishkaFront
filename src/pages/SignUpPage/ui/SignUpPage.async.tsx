import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

export const SignUpPageAsync = lazyRetry(() => import('./SignUpPage'));
