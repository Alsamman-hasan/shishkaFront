import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './MainCatalogsPage.module.scss';
import {
  getCatalogsItems,
  getIsLoading,
} from '../model/selector/getCatalogItems/getCatalogItems';
import { fetchCatalogsData } from '../model/service/fetchCatalogs';
import { getRouteCatalog, getRouteSubCatalog } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';
import { VStack } from '@/shared/ui/Stack';

export const MainCatalogsPage = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const catalogItems = useAppSelector(getCatalogsItems);
  const isLoading = useAppSelector(getIsLoading);

  useEffectOnce(() => {
    dispatch(fetchCatalogsData());
  });

  const onChoseCategory = useCallback(
    (item: Catalogs) => {
      if (item) navigate(getRouteSubCatalog(item.categoryId));
    },
    [navigate],
  );

  const pathItems = useMemo(
    () => [{ name: 'Каталог', to: getRouteCatalog() }],
    [],
  );

  if (isLoading)
    return (
      <PagesWrapper>
        <BreadcrumbsUi pathItems={pathItems} />
        <VStack
          max
          gap={2}
          align='center'
          justify='center'
          className={cls.isLoading}
        >
          <Loader />
        </VStack>
      </PagesWrapper>
    );

  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <VStack
        max
        gap={2}
        align='start'
        justify='start'
        className={cls.MainCatalogsWrapper}
      >
        <Htag tage='h1'>КАТАЛОГ</Htag>
        <div className={cls.MainCatalogsPage}>
          {!!catalogItems &&
            catalogItems.map(item => (
              <VStack
                key={item.categoryId}
                gap={1.25}
                align='center'
                className={cls.catalog}
                onClick={() => onChoseCategory(item)}
              >
                {!!item.icon && <item.icon />}
                <Htag tage='h3' className={cls.H3}>
                  {item.category || ''}
                </Htag>
              </VStack>
            ))}
          <VStack gap={1.25} align='center' className={cls.catalog}>
            <Htag tage='h3' className={cls.H3}>
              {' '}
            </Htag>
          </VStack>
        </div>
      </VStack>
    </PagesWrapper>
  );
});
export default MainCatalogsPage;
