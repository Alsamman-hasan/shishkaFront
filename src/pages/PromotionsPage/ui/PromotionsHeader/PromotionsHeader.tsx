import { memo } from 'react';
import cls from './PromotionsHeader.module.scss';
import { promotions } from '../../model/selector/PromotionsData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface PromotionsHeaderProps {
  className?: string;
}
export const PromotionsHeader = memo((props: PromotionsHeaderProps) => {
  const { className } = props;
  return (
    <VStack
      className={classNames(cls.PromotionsHeader, {}, [className])}
      gap={1.5}
    >
      <Htag className={cls.H1} tage='h1'>
        АКЦИИ И НОВОСТИ
      </Htag>
      <VStack className={cls.containerPromotions}>
        <VStack gap={1.25} className={cls.promotionsCard}>
          {promotions.map(
            ({ id, bg, img, title, subTitle, hasBtn, card, titleType }) => (
              <HStack
                key={id}
                gap={1}
                className={cls.card}
                align='center'
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundPosition: '-33px',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                }}
              >
                {!!img && (
                  <div className={cls.img}>
                    <AppImage src={img} alt='card' className={cls.img} />
                  </div>
                )}
                <VStack
                  gap={0.5}
                  className={classNames(cls.description, {
                    [cls.cardWidth]: card,
                  })}
                >
                  <Htag className={cls.title} tage={titleType}>
                    {title}
                  </Htag>
                  <PTag className={cls.subTitle} tage='P2'>
                    {subTitle}
                  </PTag>
                  {!!hasBtn && (
                    <ButtonUi
                      className={cls.btn}
                      layOut='TextOnly'
                      name='promotionsBtn'
                    >
                      <Htag className={cls.H4} tage='h4'>
                        Скоро в продаже
                      </Htag>
                    </ButtonUi>
                  )}
                </VStack>
              </HStack>
            ),
          )}
        </VStack>
      </VStack>
    </VStack>
  );
});
