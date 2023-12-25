import { memo, useCallback, useEffect } from 'react';
import {
  getProductDetailsCategory,
  getProductDetailsIsLoading,
} from '@/entities/Products';
import {
  RecommendProd,
  useFetchRecommendProd,
} from '@/features/productsRecommendationList';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

export interface RecommendsProps {
  className?: string;
}
export const Recommends = memo((props: RecommendsProps) => {
  const { className } = props;
  const catalogId = useAppSelector(getProductDetailsCategory);
  const isLoadingProd = useAppSelector(getProductDetailsIsLoading);
  const [getRecommendProd, { data, isLoading }] = useFetchRecommendProd();
  const fetchingRecommend = useCallback(
    async (id: number) => {
      await getRecommendProd({
        id,
        method: 'getRandomPromoProducts',
      });
    },
    [getRecommendProd],
  );

  useEffect(() => {
    if (catalogId) fetchingRecommend(catalogId || 1);
  }, [catalogId, fetchingRecommend]);
  return (
    <RecommendProd
      seeAll
      className={className}
      title='МЫ РЕКОМЕНДУЕМ'
      data={data?.result}
      isLoading={isLoading || isLoadingProd}
      error={data?.error}
    />
  );
});
