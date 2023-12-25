import { memo, useMemo } from 'react';
import { PartnershipHeader } from './PartnershipHeader/PartnershipHeader';
import { PartnershipForm } from '@/features/Partnership';
import { getRoutePartnership } from '@/shared/consts/router';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

export const PartnershipPage = memo(() => {
  const pathItems = useMemo(
    () => [{ name: 'Сотрудничество', to: getRoutePartnership() }],
    [],
  );

  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <PartnershipHeader />
      <PartnershipForm />
    </PagesWrapper>
  );
});

export default PartnershipPage;
