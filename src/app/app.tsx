import { memo, Suspense } from 'react';
import AppRouter from './providers/router/ui/AppRouter.tsx';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import './styles/index.scss';

export const App = memo(() => (
  <div className={classNames('app', {}, ['app_light_theme'])}>
    <Header className='header' />
    <Suspense fallback=''>
      <AppRouter />
    </Suspense>
    <Footer className='footer' />
  </div>
));
