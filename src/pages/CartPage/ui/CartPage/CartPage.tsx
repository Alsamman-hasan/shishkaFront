import { memo, useCallback, useMemo } from 'react';
// import { CartContent } from '../CartContent/CartContent';
import { CartContent } from '@/entities/Cart';
import {
  RecommendProd,
  useFetchRecommendProd,
} from '@/features/productsRecommendationList';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

const CartPage = memo(() => {
  const pathItems = useMemo(() => [{ name: 'Корзина', to: '' }], []);
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

  useEffectOnce(() => {
    fetchingRecommend(1);
  });
  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <CartContent />
      <RecommendProd
        seeAll
        title='МЫ РЕКОМЕНДУЕМ'
        data={data?.result}
        isLoading={isLoading}
        error={data?.error}
      />
    </PagesWrapper>
  );
});

export default CartPage;
