import { memo, useCallback } from 'react';
import cls from './ProductsPageFilter.module.scss';
import {
  getBrands,
  getColors,
  getFilterData,
  getIsLoadingProducts,
  getSizes,
  getStrength,
} from '../../model/selector/getProductsPageData/getProductsPageData';
import { fetchProducts } from '../../model/service/fetchProducts';
import { productsPageActions } from '../../model/slice/productsPageSlice';
import {
  CheckBoxesType,
  ProductFilterAction,
  ProductFilterBrand,
  ProductFilterPrice,
  ProductFilterSize,
} from '@/features/ProductFilters';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { VStack } from '@/shared/ui/Stack';

export interface ProductsPageFilterProps {
  className?: string;
}
export const ProductsPageFilter = memo((props: ProductsPageFilterProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingProducts);
  const brands = useAppSelector(getBrands);
  const sizeList = useAppSelector(getSizes);
  const colors = useAppSelector(getColors);
  const strength = useAppSelector(getStrength);
  const filterData = useAppSelector(getFilterData);

  const fetchData = useCallback(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeFromPrice = useCallback(
    (value: string) => {
      if (value.length)
        dispatch(
          productsPageActions.setFilterValues({ priceMin: Number(value) }),
        );
      else
        dispatch(productsPageActions.setFilterValues({ priceMin: undefined }));
    },
    [dispatch],
  );
  const onChangeToPrice = useCallback(
    (value: string) => {
      if (value.length)
        dispatch(
          productsPageActions.setFilterValues({ priceMax: Number(value) }),
        );
      else
        dispatch(productsPageActions.setFilterValues({ priceMax: undefined }));
    },
    [dispatch],
  );

  const onAddFilter = useCallback(() => {
    if (!filterData) return;
    debouncedFetchData();
  }, [debouncedFetchData, filterData]);

  const onChooseSize = useCallback(
    (size: CheckBoxesType, typeFilter: 'color' | 'size' | 'strength') => {
      switch (typeFilter) {
        case 'color':
          dispatch(productsPageActions.setChooseColor(size));
          break;
        case 'size':
          dispatch(productsPageActions.setChooseSize(size));
          break;
        case 'strength':
          dispatch(productsPageActions.setChooseStrength(size));
          break;
        default:
          null;
      }
    },
    [dispatch],
  );

  const onClearFilter = useCallback(() => {
    if (!filterData) return;
    dispatch(productsPageActions.setClearFilter());
    dispatch(fetchProducts({ replace: true }));
  }, [dispatch, filterData]);

  const chooseHandler = useCallback(
    (brand: CheckBoxesType) => {
      dispatch(productsPageActions.setChooseBrand(brand));
    },
    [dispatch],
  );

  return (
    <VStack
      gap={1}
      className={classNames(cls.CatalogProdPageFilter, {}, [className])}
    >
      <ProductFilterPrice
        fromValue={filterData?.priceMin?.toString() || ''}
        toValue={filterData?.priceMax?.toString() || ''}
        onChangeFromPrice={onChangeFromPrice}
        onChangeToPrice={onChangeToPrice}
      />
      <VStack max className={cls.brandsSize} gap={1}>
        <ProductFilterBrand
          brands={brands}
          chooseHandler={chooseHandler}
          className={cls.brands}
        />
        {!!sizeList?.length && (
          <ProductFilterSize
            title='Объем, г'
            sizeList={sizeList}
            className={cls.hasBorder}
            onChooseSize={size => onChooseSize(size, 'size')}
          />
        )}
        {!!colors?.length && (
          <ProductFilterSize
            title='Цвет'
            sizeList={colors}
            className={cls.hasBorder}
            onChooseSize={size => onChooseSize(size, 'color')}
          />
        )}
        {!!strength?.length && (
          <ProductFilterSize
            title='Крепость'
            sizeList={strength}
            onChooseSize={size => onChooseSize(size, 'strength')}
          />
        )}
      </VStack>
      <ProductFilterAction
        isLoading={!!isLoading}
        onClearFilter={onClearFilter}
        onAddFilter={onAddFilter}
      />
    </VStack>
  );
});
