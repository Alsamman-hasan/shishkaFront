import { memo } from 'react';
import cls from './PopularCategories.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';

export interface PopularCardProps {
  className?: string;
  img: string;
}
export const PopularCard = memo((props: PopularCardProps) => {
  const { className, img } = props;
  return (
    <div className={classNames(cls.PopularCard, {}, [className])}>
      <AppImage src={img} alt='test' />
    </div>
  );
});
