import { memo, useMemo } from 'react';
import { Checkout } from './Checkout/Checkout';
import { getRouteCarts } from '@/shared/consts/router';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

const CheckoutPage = memo(() => {
  const pathItems = useMemo(
    () => [
      { name: 'Корзина', to: getRouteCarts() },
      { name: 'Оформление заказа', to: getRouteCarts() },
    ],
    [],
  );
  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <Checkout />
    </PagesWrapper>
  );
});

export default CheckoutPage;
