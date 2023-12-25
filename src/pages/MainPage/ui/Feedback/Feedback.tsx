import { memo, useCallback, useMemo } from 'react';
import Slider from 'react-slick';
import './Feedback.scss';
import { NavLeftMemo, NavRightMemo } from './Arrows';
import { feedbacks } from '../../model/Feedback';
import { FeedbackType } from '../../model/types/feedback';
import { classNames } from '@/shared/lib/classNames/classNames';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { AppImage } from '@/shared/ui/AppImage';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface FeedbackProps {
  className?: string;
}
export const Feedback = memo((props: FeedbackProps) => {
  const { className } = props;
  const matches = useMediaQuery('(max-width: 1040px)');
  const matches425 = useMediaQuery('(max-width: 425px)');
  const customDoto = useCallback(
    (i: number) => <div key={i} className='Feedback__Indicator' />,
    [],
  );

  const renderSlide = useCallback(
    ({ avatar: avator, description, name, time }: FeedbackType) => (
      <div key={name}>
        <VStack gap={0.75} className='Feedback__info'>
          <HStack gap={1.25}>
            <AppImage src={avator} />
            <VStack gap={0.25}>
              <Htag tage='h3' className='Feedback__name'>
                {name}
              </Htag>
              <PTag tage='desc' className='Feedback__time'>
                {time}
              </PTag>
            </VStack>
          </HStack>
          <PTag tage='P2' className='Feedback__desc'>
            {description}
          </PTag>
        </VStack>
      </div>
    ),
    [],
  );

  const slidesToShow = useMemo(() => {
    if (matches && !matches425) return 2;

    if (matches425) return 1.5;

    return 3;
  }, [matches, matches425]);

  const settings = useMemo(
    () => ({
      arrows: true,
      autoplay: false,
      customPaging: (i: number) => customDoto(i),
      dots: true,
      dotsClass: 'Feedback__dotsClass',
      infinite: true,
      nextArrow: <NavRightMemo />,
      pauseOnHover: true,
      prevArrow: <NavLeftMemo />,
      slidesToScroll: 1,
      slidesToShow,
    }),
    [customDoto, slidesToShow],
  );

  return (
    <div className={classNames('Feedback', {}, [className])}>
      <Layout>
        <VStack gap={1.5}>
          <HStack max justify='between'>
            <Htag tage='h1'>ОТЗЫВЫ</Htag>
          </HStack>
        </VStack>
        <Slider {...settings} className='Feedback__MainSlider'>
          {feedbacks.map(feed => renderSlide(feed))}
        </Slider>
        <HStack max justify='center' style={{ marginTop: '4rem' }}>
          <ButtonUi name='feed' layOut='TextOnly' theme='primary'>
            оставить отзыв
          </ButtonUi>
        </HStack>
      </Layout>
    </div>
  );
});
