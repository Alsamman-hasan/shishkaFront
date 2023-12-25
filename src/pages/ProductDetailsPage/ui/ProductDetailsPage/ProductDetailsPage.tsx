import { memo, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Recommends } from '../Recommends/Recommends';
import { ProductDetails, getProductDetailsName } from '@/entities/Products';
import { getRoutePartnership } from '@/shared/consts/router';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

const ProductDetailsPage = memo(() => {
  const { id } = useParams<{ id: string }>();

  const productName = useAppSelector(getProductDetailsName);
  const pathItems = useMemo(
    () => [{ name: productName, to: getRoutePartnership() }],
    [productName],
  );

  if (!id) return null;

  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <ProductDetails id={id} />
      <Recommends />
    </PagesWrapper>
  );
});

export default ProductDetailsPage;
