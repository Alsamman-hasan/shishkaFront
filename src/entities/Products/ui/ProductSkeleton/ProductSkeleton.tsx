import { memo } from 'react';
import cls from './ProductSkeleton.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProductSkeletonProps {
  className?: string;
  view?: ProductView;
}
export const ProductSkeleton = memo((props: ProductSkeletonProps) => {
  const { className, view = 'Group' } = props;
  return (
    <div>
      <Skeleton
        className={cls.card}
        height={view === 'Group' ? '32.75rem' : '9.25rem'}
        width={view === 'Group' ? '17.8125rem' : '100%'}
      />
    </div>
  );
});
