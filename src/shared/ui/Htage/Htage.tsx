import { CSSProperties, memo, ReactNode } from 'react';
import cls from './Htage.module.scss';
import { classNames } from '../../lib/classNames/classNames';

export type hTypes = 'h1' | 'h2' | 'h3' | 'h4';

const HClass: Record<hTypes, string> = {
  h1: cls.h1,
  h2: cls.h2,
  h3: cls.h3,
  h4: cls.h4,
};

export interface HtageProps {
  className?: string;
  tage: hTypes;
  children: ReactNode;
  style?: CSSProperties;
}

export const Htag = memo((props: HtageProps): JSX.Element => {
  const { children, tage = 'h1', className, style, ...othreProps } = props;
  const classess = [className, HClass[tage]];
  return (
    <span
      style={style}
      {...othreProps}
      className={classNames('', {}, classess)}
    >
      {children}
    </span>
  );
});
