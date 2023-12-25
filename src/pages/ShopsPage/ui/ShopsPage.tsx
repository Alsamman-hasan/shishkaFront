import { memo, useCallback, useMemo } from 'react';
import cls from './ShopsPage.module.scss';
import { StoreItem } from './StoreItem/StoreItem';
import {
  getAllStores,
  getSelectShop,
  getCites,
  getSelectorItems,
} from '../model/selector/getStores';
import { shopPageActions, shopPageReducer } from '../model/slice/ShopsSlice';
import { ShopeCity } from '../model/types/types';
import { getRouteShops } from '@/shared/consts/router';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { CustomTabs } from '@/shared/ui/CustomTabs/CustomTabs';
import { Htag } from '@/shared/ui/Htage/Htage';
import { AutocompleteUi } from '@/shared/ui/Inputs/ui/Autocomplete/AutocompleteInput';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';
import { VStack } from '@/shared/ui/Stack';

const initialReducers: ReducersList = {
  shops: shopPageReducer,
};

export const ShopsPage = memo(() => {
  const dispatch = useAppDispatch();
  const shops = useAppSelector(getAllStores);
  const selectedShops = useAppSelector(getSelectShop);
  const items = useAppSelector(getSelectorItems);
  const tapsItem = useAppSelector(getCites);
  const isMobile = useMediaQuery('(max-width: 480px)');

  const pathItems = useMemo(
    () => [{ name: 'Магазины', to: getRouteShops() }],
    [],
  );

  const onChangeTab = useCallback(
    (t: ShopeCity) => {
      dispatch(shopPageActions.setChooseCity(t));
    },
    [dispatch],
  );

  const onSelectCity = useCallback(
    (t: AutocompleteUiItem<string> | null) => {
      if (!t) return;
      dispatch(shopPageActions.setChooseCity(t as ShopeCity));
    },
    [dispatch],
  );
  // const items = useMemo(() => {
  //   if (!cities) return [];
  //   return cities.map((item, i) => ({
  //     id: `${item.city}-${item.id}-${i}`,
  //     title: item.city,
  //   }));
  // }, [cities]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <PagesWrapper>
        <BreadcrumbsUi pathItems={pathItems} />
        <VStack
          max
          gap={2}
          align='start'
          justify='start'
          className={cls.ShopsPage}
        >
          <Htag className={cls.H1} tage='h1'>
            МАГАЗИНЫ
          </Htag>
          <div className={cls.containerShops}>
            {isMobile ? (
              <AutocompleteUi
                name='locationsShops'
                items={items}
                label='Выберите город'
                value={selectedShops || null}
                placeholder='Выберите город'
                onChange={onSelectCity}
              />
            ) : (
              <CustomTabs
                className={cls.tabs}
                defaultTab={{ id: 0, title: 'Все' }}
                selectedTab={selectedShops}
                tabs={tapsItem}
                onChooseTab={onChangeTab}
              />
            )}
            {shops?.map(item => <StoreItem Item={item} />)}
          </div>
        </VStack>
      </PagesWrapper>
    </DynamicModuleLoader>
  );
});
export default ShopsPage;
