import { CSSProperties, memo, ReactNode } from 'react';
import cls from './Layout.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface LayoutProps {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export const Layout = memo((props: LayoutProps) => {
  const { className, children, style } = props;
  return (
    <div style={style} className={classNames(cls.Layout, {}, [className])}>
      {children}
    </div>
  );
});
