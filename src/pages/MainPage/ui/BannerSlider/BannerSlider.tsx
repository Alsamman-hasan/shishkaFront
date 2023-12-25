import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './BannerSlider.scss';
import { items } from '../../model/sliderItems';
import { NavLeftMemo, NavRightMemo } from '../Arrows/Arrows';
import { getRoutePromotions } from '@/shared/consts/router';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { AppImage } from '@/shared/ui/AppImage';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { VStack } from '@/shared/ui/Stack';

export const BannerSlider = memo(() => {
  const images = useMemo(() => items, []);
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width: 768px)');
  const onNavigate = useCallback(() => {
    navigate(getRoutePromotions());
  }, [navigate]);
  const customDoto = useCallback(
    (i: number) => <div key={i} className='SliderWrapper__Indicator' />,
    [],
  );

  const dataRender = useCallback(
    (title: string, subTitle: string) => (
      <VStack className='SliderWrapper__info' gap={0.5}>
        <span className='SliderWrapper__title'>{title}</span>
        <Htag className='SliderWrapper__subTitle' tage='h3'>
          {subTitle}
        </Htag>
        {!matches && (
          <ButtonUi
            name='more'
            layOut='TextOnly'
            theme='Quaternary'
            className='SliderWrapper__btn'
            onClick={onNavigate}
          >
            Подробнее
          </ButtonUi>
        )}
      </VStack>
    ),
    [matches, onNavigate],
  );
  const settings = useMemo(
    () => ({
      arrows: !matches,
      autoplay: true,
      customPaging: (i: number) => customDoto(i),
      dots: true,
      dotsClass: 'SliderWrapper__dotsClass',
      infinite: false,
      nextArrow: <NavRightMemo />,
      pauseOnHover: true,
      prevArrow: <NavLeftMemo />,
      slidesToScroll: 1,
      slidesToShow: 1,
    }),
    [customDoto, matches],
  );

  return (
    <div className='SliderWrapper'>
      <Slider {...settings} className='SliderWrapper__MainSlider'>
        {images.map((i, index) => (
          <div
            key={i.id + index}
            className='SliderWrapper__content'
            style={{ width: '100%' }}
          >
            {dataRender(i.title, i.description)}
            <AppImage
              src={i.Img}
              className='SliderWrapper__images'
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});
