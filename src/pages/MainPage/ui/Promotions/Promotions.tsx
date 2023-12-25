import { memo, useCallback, useMemo } from 'react';
import { PromotionCards } from './PromotionCards';
import cls from './Promotions.module.scss';
import { PromotionsSkeleton } from './PromotionsSkeleton';
import {
  getCatalogs,
  getIsLoading,
} from '../../model/selectors/getPromotionsData';
import { getGroups } from '../../model/services/getGroups';
import { useFetchRecommendProd } from '@/features/productsRecommendationList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { Tabs } from '@/shared/ui/Tabs';

export interface PromotionsProps {
  className?: string;
}

export const Promotions = memo((props: PromotionsProps) => {
  const { className } = props;
  const matches = useMediaQuery('(max-width: 1040px)');
  const dispatch = useAppDispatch();
  const catalogs = useAppSelector(getCatalogs);
  const isLoading = useAppSelector(getIsLoading);

  const [
    getRecommendProd,
    { data, isLoading: cardLoading, isError, isSuccess },
  ] = useFetchRecommendProd();
  const fetchingRecommend = useCallback(
    async (id: number) => {
      await getRecommendProd({
        id,
        method: 'getRandomPromoProducts',
      });
    },
    [getRecommendProd],
  );

  useEffectOnce(() => {
    fetchingRecommend(1);
    dispatch(getGroups());
  });

  const tabs = useMemo(
    () =>
      catalogs.map(item => ({
        element: <PromotionCards data={data?.result} isLoading={cardLoading} />,
        id: item.categoryId,
        tab: item.category,
      })),
    [catalogs, data?.result, cardLoading],
  );

  const onSelectId = useCallback(
    (id?: string) => {
      fetchingRecommend(Number(id) || 1);
    },
    [fetchingRecommend],
  );

  return (
    <Layout className={classNames(cls.Promotions, {}, [className])}>
      <div>
        <Htag tage='h1' className={cls.header}>
          АКЦИОННЫЕ ТОВАРЫ
        </Htag>
        {isLoading ? (
          <PromotionsSkeleton />
        ) : (
          <Tabs
            className={cls.tab}
            tabs={tabs}
            variant={!matches ? 'standard' : 'scrollable'}
            onChooseTab={onSelectId}
          />
        )}
      </div>
    </Layout>
  );
});
