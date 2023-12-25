import { memo } from 'react';
import cls from './NotfoundPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

export interface NotfoundPageProps {
  className?: string;
}
export const NotfoundPage = memo(({ className }: NotfoundPageProps) => (
  <PagesWrapper className={classNames(cls.NotfoundPage, {}, [className])}>
    Страница не найдена
  </PagesWrapper>
));
