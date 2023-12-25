import { memo, ReactNode } from 'react';
import Collapse from './Collapse';
import { classNames } from '@/shared/lib/classNames/classNames';
import './CollapseUi.scss';

export interface CollapseUiProps {
  className?: string;
  children: ReactNode;
  open: boolean;
}
export const CollapseUi = memo((props: CollapseUiProps) => {
  const { className, children, open } = props;
  return (
    <div className={classNames('collapse', {}, [className])}>
      <Collapse lazy open={open}>
        {children}
      </Collapse>
    </div>
  );
});
