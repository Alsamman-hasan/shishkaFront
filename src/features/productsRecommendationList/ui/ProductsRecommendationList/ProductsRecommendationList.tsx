import { memo } from 'react';
import cls from './ProductsRecommendationList.module.scss';
import { ProductCard, ProductSkeleton } from '@/entities/Products';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { Htag } from '@/shared/ui/Htage/Htage';
import { ErrorMessage } from '@/shared/ui/Messages';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProductsRecommendationListProps {
  className?: string;
  title?: string;
  seeAll?: boolean;
  data?: Product[];
  isLoading?: boolean;
  error?: string | string[];
  isNotScroll?: boolean;
}

const getSkeletons = (view: ProductView) =>
  new Array(view === 'Group' ? 4 : 6)
    .fill(0)
    .map((item, index) => <ProductSkeleton key={index} view={view} />);

const ProductsRecommendationList = memo(
  (props: ProductsRecommendationListProps) => {
    const { className, title, seeAll, data, isLoading, error, isNotScroll } =
      props;
    if (error)
      return (
        <VStack className={cls.wrapper} gap={1.5}>
          <ErrorMessage
            text=' что то пошло не так...'
            type='P3'
            textAlign='center'
          />
        </VStack>
      );

    return (
      <VStack className={cls.wrapper} gap={1.5}>
        {!!seeAll && (
          <HStack max justify='between'>
            <Htag tage='h1'>{title}</Htag>
            <AppLink to='/'>
              <PTag tage='P2'>Смотреть все</PTag>
            </AppLink>
          </HStack>
        )}
        <div
          className={classNames(
            cls.ProductsRecommendationList,
            { [cls.isNotScroll]: isNotScroll },
            [className],
          )}
        >
          {isLoading
            ? getSkeletons('Group')
            : !!data &&
              data.map((item, i) => (
                <div key={`${item.id}-${i}`}>
                  <ProductCard card={item} />
                </div>
              ))}
        </div>
      </VStack>
    );
  },
);

export default ProductsRecommendationList;
