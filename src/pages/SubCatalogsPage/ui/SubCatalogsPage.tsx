import { memo } from 'react';
import { SubCatalogs } from './SubCatalogs/SubCatalogs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';

export const SubCatalogsPage = memo(() => (
  <PagesWrapper>
    <SubCatalogs />
  </PagesWrapper>
));
export default SubCatalogsPage;
