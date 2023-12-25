import { memo, ReactNode } from 'react';
import cls from './Tags.module.scss';
import { classNames } from '../../lib/classNames/classNames';
import { PTag } from '../Paragraph/P';

// export enum TagsColor {
//   NEW = 'new',
//   PROMOTION = 'promotion',
//   DELIVERY = 'delivery',
//   SUCCESS = 'success',
// }

export type TagsType = 'Новинка' | 'Акция' | 'Бестселлер';

const TagsClass: Record<TagsType, string> = {
  Акция: cls.promotion,
  Бестселлер: cls.Bestseller,
  Новинка: cls.new,
};

export interface TagsProps {
  className?: string;
  children: ReactNode;
  color: TagsType;
}

export const Tags = memo((props: TagsProps) => {
  const { className, children, color } = props;
  const classes = [className, TagsClass[color]];
  return (
    <div className={classNames(cls.Tags, {}, classes)}>
      <PTag tage='desc'>{children}</PTag>
    </div>
  );
});
