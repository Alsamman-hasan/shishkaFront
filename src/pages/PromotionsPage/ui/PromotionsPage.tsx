import { memo, useMemo } from 'react';
import { Promotions } from './Promotions/Promotions';
import { PromotionsHeader } from './PromotionsHeader/PromotionsHeader';
import { getRoutePartnership } from '@/shared/consts/router';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

export const PromotionsPage = memo(() => {
  const pathItems = useMemo(
    () => [{ name: 'Акции', to: getRoutePartnership() }],
    [],
  );

  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <PromotionsHeader />
      <Promotions />
    </PagesWrapper>
  );
});
export default PromotionsPage;
