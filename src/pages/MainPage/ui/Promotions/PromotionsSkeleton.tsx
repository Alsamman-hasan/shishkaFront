import { memo } from 'react';
import cls from './Promotions.module.scss';
import { ProductSkeleton } from '@/entities/Products';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface PromotionsSkeletonProps {
  className?: string;
}
export const PromotionsSkeleton = memo((props: PromotionsSkeletonProps) => {
  const { className } = props;
  const getSkeletons = () =>
    new Array(4).fill(0).map((item, index) => <ProductSkeleton key={index} />);
  const getSkeletonTab = () =>
    new Array(6)
      .fill(0)
      .map((item, index) => <Skeleton key={index} height={44} width={150} />);
  return (
    <VStack gap={1} className={cls.tab}>
      <HStack>{getSkeletonTab()}</HStack>
      <div className={classNames(cls.PromotionCards, {}, [className])}>
        {getSkeletons()}
      </div>
    </VStack>
  );
});
