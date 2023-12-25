import { memo, useMemo } from 'react';
import { UserProfile } from './UserProfile/UserProfile';
import { getRouteProfile } from '@/shared/consts/router';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

export const ProfilePage = memo(() => {
  const pathItems = useMemo(
    () => [{ name: 'Личный кабинет', to: getRouteProfile() }],
    [],
  );

  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <UserProfile />
    </PagesWrapper>
  );
});
export default ProfilePage;
