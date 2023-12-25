import { memo, useCallback } from 'react';
import cls from './ProductsPageHead.module.scss';
import {
  getSortValue,
  getView,
} from '../../model/selector/getProductsPageData/getProductsPageData';
import { fetchProducts } from '../../model/service/fetchProducts';
import { productsPageActions } from '../../model/slice/productsPageSlice';
import { ProductCatalogView } from '@/features/ProductCatalogView';
import { ProductSort, SortTypes } from '@/features/ProductSort';
import ResetIcon from '@/shared/assets/icons/catalogProduct/resetFilter.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack } from '@/shared/ui/Stack';

export interface ProductsPageHeadProps {
  className?: string;
}
export const ProductsPageHead = memo((props: ProductsPageHeadProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useAppSelector(getView);
  const sortValue = useAppSelector(getSortValue);

  const onChangeView = useCallback(
    (views: ProductView) => {
      dispatch(productsPageActions.setView(views));
    },
    [dispatch],
  );

  const onSelectSort = useCallback(
    (value: string) => {
      dispatch(productsPageActions.setSort(value as SortTypes));
      dispatch(fetchProducts({}));
    },
    [dispatch],
  );

  return (
    <HStack
      max
      justify='between'
      className={classNames(cls.headerWrapper, {}, [className])}
    >
      <HStack gap={1.25} className={cls.header}>
        <HStack justify='start' align='center' className={cls.Filter}>
          <ButtonUi
            name='resetFilter'
            layOut='IconOnly'
            icon={<ResetIcon />}
            theme='Quaternary'
          />
          <PTag tage='P2'>Фильтры</PTag>
        </HStack>
        <ProductSort
          sortValue={sortValue}
          className={cls.sort}
          onSelectSort={onSelectSort}
        />
      </HStack>
      <ProductCatalogView
        view={view as ProductView}
        onChangeView={onChangeView}
      />
    </HStack>
  );
});
