import { memo, useCallback } from 'react';
// import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import cls from './ProductList.module.scss';
import {
  getIsEmpty,
  getIsLoadingProducts,
  getProductList,
} from '../../model/selector/getProductsPageData/getProductsPageData';
import { ProductCard, ProductSkeleton } from '@/entities/Products';
import { getRouteCatalog } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface ProductListProps {
  className?: string;
  view: ProductView;
}

const getSkeletons = (view: ProductView) =>
  new Array(view === 'Group' ? 8 : 8)
    .fill(0)
    .map((item, index) => <ProductSkeleton key={index} view={view} />);

export const ProductList = memo((props: ProductListProps) => {
  const { className, view } = props;
  const navigate = useNavigate();
  const productsList = useAppSelector(getProductList);
  const isLoading = useAppSelector(getIsLoadingProducts);
  const isEmpty = useAppSelector(getIsEmpty);

  const emptyContent = useCallback(() => {
    if (!!productsList && productsList?.length > 0 && !isLoading)
      return productsList.map(item => (
        <div key={item.id}>
          <ProductCard card={{ ...item, view }} />
        </div>
      ));
    if (isEmpty && !isLoading)
      return (
        <VStack
          max
          justify='center'
          align='center'
          gap={1}
          style={{ minHeight: '30vh' }}
        >
          <PTag tage='P1'>продукты не найдены</PTag>
          <ButtonUi
            layOut='TextOnly'
            name='return to catalog'
            theme='primary'
            onClick={() => navigate(getRouteCatalog())}
          >
            вернуться в каталог
          </ButtonUi>
        </VStack>
      );
    return getSkeletons(view);
  }, [isEmpty, isLoading, navigate, productsList, view]);
  return (
    <div
      className={classNames(
        cls.ProductsCards,
        { [cls.list]: view === 'List' },
        [className],
      )}
    >
      {emptyContent()}
    </div>
  );
});
