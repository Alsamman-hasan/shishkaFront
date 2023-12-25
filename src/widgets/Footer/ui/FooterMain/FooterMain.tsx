import { memo } from 'react';
import cls from './FooterMain.module.scss';
import { FirstFooter } from '../FirstFooter/FirstFooter';
import { SecoundFooter } from '../SecoundFooter/SecoundFooter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Layout } from '@/shared/ui/Layout/Layout';

export interface FooterProps {
  className?: string;
}

export const Footer = memo((props: FooterProps) => {
  const { className } = props;
  return (
    <footer className={classNames(cls.Footer, {}, [className])}>
      <Layout>
        <FirstFooter />
        <SecoundFooter />
      </Layout>
    </footer>
  );
});
