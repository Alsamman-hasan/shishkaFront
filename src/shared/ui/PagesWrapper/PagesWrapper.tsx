import { memo, ReactNode } from 'react';
import cls from './PagesWrapper.module.scss';
import { Layout } from '../Layout/Layout';
import { Wrapper } from '../Wrapper/Wrapper';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface PagesWrapperProps {
  className?: string;
  children: ReactNode;
}
export const PagesWrapper = memo((props: PagesWrapperProps) => {
  const { className, children } = props;
  return (
    <Wrapper className={classNames(cls.Wrapper, {}, [className])}>
      <Layout className={cls.layout}>{children}</Layout>
    </Wrapper>
  );
});
