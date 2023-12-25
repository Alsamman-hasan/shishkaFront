import { lazyRetry } from '@/shared/lib/lazyRetry/lazyWithRetry';

// export const MainPageAsync = lazyRetry(
//   () =>
//     new Promise((resolve) => {
//       // @ts-ignore
//       setTimeout(() => resolve(import("./MainPage")), 500);
//     })
// );

export const MainPageAsync = lazyRetry(() => import('./MainPage'));
