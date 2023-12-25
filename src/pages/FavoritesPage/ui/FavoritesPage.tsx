import { memo, useCallback, useEffect, useMemo } from 'react';
import { Favorites } from './Favorites/Favorites';
import {
  getFavoriteData,
  getFavoriteError,
  getFavoriteIsLoading,
} from '@/entities/Favorites';
import {
  RecommendProd,
  useFetchRecommendProd,
} from '@/features/productsRecommendationList';
import { getRouteFavorites } from '@/shared/consts/router';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

const FavoritesPage = memo(() => {
  const pathItems = useMemo(
    () => [{ name: 'Избранные товары', to: getRouteFavorites() }],
    [],
  );
  const favoriteData = useAppSelector(getFavoriteData);
  const isLoadingFavorite = useAppSelector(getFavoriteIsLoading);
  const error = useAppSelector(getFavoriteError);
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
    if (!favoriteData.length && !isLoadingFavorite) fetchingRecommend(1);
  }, [favoriteData.length, fetchingRecommend, isLoadingFavorite]);

  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <Favorites
        data={favoriteData}
        isLoading={isLoadingFavorite}
        error={error}
      />
      {!favoriteData.length && !isLoadingFavorite && (
        <RecommendProd
          seeAll
          title='МЫ РЕКОМЕНДУЕМ'
          data={data?.result}
          isLoading={isLoading}
          error={data?.error}
        />
      )}
    </PagesWrapper>
  );
});

export default FavoritesPage;
