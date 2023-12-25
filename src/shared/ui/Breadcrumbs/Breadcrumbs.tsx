import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import { memo } from 'react';
import { AppLink } from '../AppLinks/AppLinks';
import { PTag } from '../Paragraph/P';
import { classNames } from '@/shared/lib/classNames/classNames';
import './Breadcrumbs.scss';

interface Paths {
  to: string;
  name: string;
}
interface BreadcrumbsProps {
  pathItems: Paths[];
}
export const BreadcrumbsUi = memo((props: BreadcrumbsProps) => {
  const { pathItems } = props;
  return (
    <MUIBreadcrumbs
      aria-label='breadcrumb'
      separator='›'
      className={classNames('breadcrumb')}
    >
      <AppLink className='breadcrumb__Links' to='/'>
        <PTag tage='P3'>Главная</PTag>
      </AppLink>
      {pathItems.map((value, index) => {
        const last = index === pathItems.length - 1;
        return last ? (
          <PTag key={value.to} className='breadcrumb__lastLink' tage='P3'>
            {value.name}
          </PTag>
        ) : (
          <AppLink key={value.to} className='breadcrumb__Links' to={value.to}>
            <PTag tage='P3'>{value.name}</PTag>
          </AppLink>
        );
      })}
    </MUIBreadcrumbs>
  );
});
