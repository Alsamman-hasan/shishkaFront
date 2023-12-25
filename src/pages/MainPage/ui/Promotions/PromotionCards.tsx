import cls from './Promotions.module.scss';
import { RecommendProd } from '@/features/productsRecommendationList';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface PromotionCardsProps {
  className?: string;
  data?: Product[];
  isLoading?: boolean;
}
export const PromotionCards = (props: PromotionCardsProps) => {
  const { className, data, isLoading } = props;
  return (
    <div className={classNames(cls.PromotionCards, {}, [className])}>
      <RecommendProd data={data} isLoading={isLoading} />
    </div>
  );
};
