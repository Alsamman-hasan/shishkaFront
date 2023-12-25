import { memo, useCallback, useMemo } from 'react';
import Slider from 'react-slick';
import './ProductsOfWeek.scss';
import { NavLeftMemo, NavRightMemo } from './Arrows';
import { PromotionsSkeleton } from '../Promotions/PromotionsSkeleton';
import { ProductCard } from '@/entities/Products';
import { useFetchRecommendProd } from '@/features/productsRecommendationList';
import Logo from '@/shared/assets/icons/logoWhite.svg';
import Girl from '@/shared/assets/images/girl.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { AppImage } from '@/shared/ui/AppImage';
import { Card } from '@/shared/ui/Card/Card';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProductsOfWeekProps {
  className?: string;
}
export const ProductsOfWeek = memo((props: ProductsOfWeekProps) => {
  const { className } = props;
  const matches = useMediaQuery('(max-width: 1040px)');
  const matches768 = useMediaQuery('(max-width: 768px)');
  const matches425 = useMediaQuery('(max-width: 425px)');

  const [getRecommendProd, { data, isLoading, isError, isSuccess }] =
    useFetchRecommendProd();
  const fetchingRecommend = useCallback(
    async (id: number) => {
      await getRecommendProd({
        id,
        method: 'getRandomPromoProducts',
      });
    },
    [getRecommendProd],
  );

  useEffectOnce(() => {
    fetchingRecommend(1);
  });

  const slidesToShow = useMemo(() => {
    if (matches && !matches425) return 2;

    if (matches425) return 1;

    return 4;
  }, [matches, matches425]);

  const settings = useMemo(
    () => ({
      arrows: !matches768,
      autoplay: false,
      dots: false,
      infinite: true,
      nextArrow: <NavRightMemo />,
      pauseOnHover: true,
      prevArrow: <NavLeftMemo />,
      slidesToScroll: 3,
      slidesToShow,
    }),
    [matches768, slidesToShow],
  );
  return (
    <div className={classNames('ProductsOfWeek', {}, [className])}>
      <Layout>
        <VStack gap={1.5}>
          <HStack max justify='between'>
            <Htag tage='h1'>ТОВАРЫ НЕДЕЛИ</Htag>
          </HStack>
        </VStack>
        {isLoading ? (
          <PromotionsSkeleton />
        ) : (
          <Slider {...settings} className='ProductsOfWeek__MainSlider'>
            {!matches425 && (
              <Card className='ProductsOfWeek__card'>
                <Logo className='ProductsOfWeek__logo' />
                <AppImage src={Girl} alt='test' />
              </Card>
            )}
            {!!data?.result &&
              data.result.map((item, i) => (
                <div key={`${item.id}${i}`}>
                  <ProductCard card={item} />
                </div>
              ))}
          </Slider>
        )}
      </Layout>
    </div>
  );
});
