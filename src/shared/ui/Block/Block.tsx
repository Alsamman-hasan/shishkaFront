import { HTMLAttributes, memo } from 'react';
import cls from './Block.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export const Block = memo((props: BlockProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Block, {}, [className])}>
      <div />
    </div>
  );
});
