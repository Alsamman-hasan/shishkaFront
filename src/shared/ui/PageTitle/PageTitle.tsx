import { memo } from 'react';
import cls from './PageTitle.module.scss';
import { Htag } from '../Htage/Htage';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface PageTitleProps {
  className?: string;
  title: string;
}
export const PageTitle = memo((props: PageTitleProps) => {
  const { className, title } = props;
  return (
    <Htag className={classNames(cls.PageTitle, {}, [className])} tage='h1'>
      {title}
    </Htag>
  );
});
