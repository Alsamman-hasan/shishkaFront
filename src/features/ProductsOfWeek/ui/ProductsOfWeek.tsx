import { memo, useMemo } from 'react';
import Slider from 'react-slick';
import './ProductsOfWeek.scss';
import { NavLeftMemo, NavRightMemo } from './Arrows';
import { data } from '../model/selector/promotionsDataTest';
import { ProductCard } from '@/entities/Products';
import Logo from '@/shared/assets/icons/logoWhite.svg';
import Girl from '@/shared/assets/images/girl.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { AppImage } from '@/shared/ui/AppImage';
import { Card } from '@/shared/ui/Card/Card';
import { Htag } from '@/shared/ui/Htage/Htage';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProductsOfWeekProps {
  className?: string;
  title: string;
}
export const ProductsOfWeek = memo((props: ProductsOfWeekProps) => {
  const { className, title } = props;
  const matches = useMediaQuery('(max-width: 1040px)');
  const matches768 = useMediaQuery('(max-width: 768px)');
  const matches425 = useMediaQuery('(max-width: 425px)');

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
      {/* <Layout> */}
      <VStack gap={1.5}>
        <HStack max justify='between'>
          <Htag tage='h1'>{title}</Htag>
        </HStack>
      </VStack>
      <Slider {...settings} className='ProductsOfWeek__MainSlider'>
        {!matches425 && (
          <Card className='ProductsOfWeek__card'>
            <Logo className='ProductsOfWeek__logo' />
            <AppImage src={Girl} alt='test' />
          </Card>
        )}
        {data.map((item, i) => (
          <div key={`${item.id}${i}`}>
            <ProductCard card={item} />
          </div>
        ))}
      </Slider>
      {/* </Layout> */}
    </div>
  );
});
