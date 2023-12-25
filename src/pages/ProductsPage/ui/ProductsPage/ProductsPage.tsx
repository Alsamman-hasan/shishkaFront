import { enqueueSnackbar } from 'notistack';
import { ChangeEvent, memo, useCallback, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import cls from './ProductsPage.module.scss';
import { useFetchCatalogsApi } from '../../api/fetchCatalogs';
import { cId } from '../../model/lib';
import {
  getPage,
  getPages,
  getView,
} from '../../model/selector/getProductsPageData/getProductsPageData';
import { fetchProducts } from '../../model/service/fetchProducts';
import {
  productsPageActions,
  productsPageReducer,
} from '../../model/slice/productsPageSlice';
import { ProductList } from '../ProductList/ProductList';
import { ProductsPageFilter } from '../ProductsPageFilter/ProductsPageFilter';
import { ProductsPageHead } from '../ProductsPageHead/ProductsPageHead';

import {
  getSelectCategoryName,
  getSelectGroup,
  productActions,
} from '@/entities/Products';
import { getRouteCatalog, getRouteSubCatalog } from '@/shared/consts/router';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { modificationCategory } from '@/shared/lib/modificationCategory/modificationCategory';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';
import { PaginationUi } from '@/shared/ui/PaginationUi/PaginationUi';
import { HStack, VStack } from '@/shared/ui/Stack';

const initialReducers: ReducersList = {
  productsPage: productsPageReducer,
};

const ProductsPage = memo(() => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const id = cId(pathname);
  const params = searchParams.get('groupId');
  const group = useAppSelector(getSelectGroup);
  const page = useAppSelector(getPage);
  const totalPage = useAppSelector(getPages);
  const category = useAppSelector(getSelectCategoryName);
  const view = useAppSelector(getView);

  const [fetchCatalogs, { data, isLoading, isError, isSuccess }] =
    useFetchCatalogsApi();

  const fetchingCatalogs = useCallback(async () => {
    await fetchCatalogs({
      method: 'getGroups',
    });
  }, [fetchCatalogs]);

  useEffect(() => {
    addQueryParams({
      group: group?.group,
      groupId: group?.groupId,
    });

    if (data?.result) {
      const selectedGroup = modificationCategory(data?.result, id);
      dispatch(productActions.setCategory(selectedGroup.category));
      const groupsItems = selectedGroup.groups?.filter(
        g => g.groupId === params,
      );
      if (groupsItems?.length)
        dispatch(productActions.setNameAndIdCategory(groupsItems[0]));
    } else if (isError || data?.error)
      enqueueSnackbar('Что то пошло не так', { variant: 'error' });
  }, [data, dispatch, group, id, isError, params]);

  const handleChange = useCallback(
    (event: ChangeEvent<unknown>, newPage: number) => {
      dispatch(productsPageActions.setPage(newPage));
      dispatch(fetchProducts({ replace: false }));
    },
    [dispatch],
  );

  useEffectOnce(() => {
    dispatch(productsPageActions.setClearFilter());
    fetchingCatalogs();
  });

  useEffect(() => {
    if (params) dispatch(productsPageActions.setGroupId(params));
  }, [dispatch, params]);

  useEffect(() => {
    if (group?.groupId && isSuccess) {
      const groupId = group?.groupId;
      dispatch(productsPageActions.setGroupId(groupId));
      dispatch(fetchProducts({ replace: true }));
    }
  }, [dispatch, group?.groupId, isSuccess, params]);

  const pathItems = useMemo(
    () => [
      { name: 'Каталог', to: getRouteCatalog() },
      { name: category as string, to: getRouteSubCatalog(id) },
      { name: group?.group as string, to: getRouteCatalog() },
    ],
    [category, group?.group, id],
  );

  if (isLoading)
    return (
      <PagesWrapper>
        <HStack
          max
          gap={2}
          align='center'
          justify='center'
          className={cls.isLoading}
        >
          <Loader />
        </HStack>
      </PagesWrapper>
    );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <PagesWrapper>
        <BreadcrumbsUi pathItems={pathItems} />
        <VStack max gap={1.5}>
          <Htag tage='h1'>{group?.group}</Htag>
          <ProductsPageHead />
          <HStack max className={cls.Wrapper} gap={1.25} align='start'>
            <div className={cls.test}>
              <ProductsPageFilter />
            </div>
            <ProductList view={view} />
          </HStack>
        </VStack>
        {totalPage > 1 && (
          <HStack justify='end'>
            <PaginationUi
              count={totalPage}
              page={page}
              handleChange={handleChange}
            />
          </HStack>
        )}
      </PagesWrapper>
    </DynamicModuleLoader>
  );
});
export default ProductsPage;
