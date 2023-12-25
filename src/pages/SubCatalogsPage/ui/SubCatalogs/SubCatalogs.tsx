import { memo, useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import cls from './SubCatalogs.module.scss';
import { useFetchCatalogsApi } from '../../api/fetchCatalogs';
import { getCatalogsItems } from '../../model/selectors/getSubCatalogs/getSubCatalogs';
import {
  getCatalogName,
  getCatalogId,
} from '../../model/selectors/getSubcatalogName/getSubcatalogName';
import { subCatalogsActions } from '../../model/slice/subCatalogSlice';
import { productActions } from '@/entities/Products';
import {
  getRouteCatalog,
  getRouteProductsCatalog,
} from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { modificationCategory } from '@/shared/lib/modificationCategory/modificationCategory';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { VStack } from '@/shared/ui/Stack';

export interface SubCatalogsProps {
  className?: string;
}
export const SubCatalogs = memo((props: SubCatalogsProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = searchParams.get('categoryId');

  const name = useAppSelector(getCatalogName);
  const id = useAppSelector(getCatalogId);
  const subCatalogs = useAppSelector(getCatalogsItems);

  const [fetchCatalogs, { data, isLoading }] = useFetchCatalogsApi();

  useEffect(() => {
    addQueryParams({
      categoryId: id?.toString(),
    });
    if (data?.result && params)
      dispatch(
        subCatalogsActions.setSubCategory(
          modificationCategory(data?.result, params),
        ),
      );
  }, [data, dispatch, id, params]);

  const fetchingCatalogs = useCallback(async () => {
    await fetchCatalogs({
      method: 'getGroups',
    });
  }, [fetchCatalogs]);

  useEffectOnce(() => {
    fetchingCatalogs();
  });

  const pathItems = useMemo(
    () => [
      { name: 'Каталог', to: getRouteCatalog() },
      { name, to: getRouteCatalog() },
    ],
    [name],
  );

  const onChoseProducts = useCallback(
    (item: Groups) => {
      dispatch(productActions.setNameAndIdCategory(item));
      if (id) navigate(getRouteProductsCatalog(id?.toString()));
    },
    [dispatch, id, navigate],
  );

  if (isLoading)
    return (
      <VStack
        max
        gap={2}
        align='center'
        justify='center'
        className={cls.isLoading}
      >
        <Loader />
      </VStack>
    );

  return (
    <div className={classNames(cls.SubCatalogs, {}, [className])}>
      <BreadcrumbsUi pathItems={pathItems} />
      <VStack
        max
        gap={2}
        align='start'
        justify='start'
        className={cls.MainCatalogsWrapper}
      >
        <Htag tage='h1'>{name}</Htag>
        <div className={cls.MainCatalogsPage}>
          {!!subCatalogs &&
            subCatalogs.map(item => (
              <VStack
                key={item.groupId}
                gap={1.25}
                align='center'
                className={cls.catalog}
                onClick={() => onChoseProducts(item)}
              >
                {!!item.icon && <item.icon />}
                <Htag tage='h3' className={cls.H3}>
                  {item.group || ''}
                </Htag>
              </VStack>
            ))}
        </div>
      </VStack>
    </div>
  );
});
