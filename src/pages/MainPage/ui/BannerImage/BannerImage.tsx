import { memo } from 'react';
import cls from './BannerImage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Layout } from '@/shared/ui/Layout/Layout';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';
// import useMediaQuery from "@/shared/lib/hooks/useMediaQuery/useMediaQuery";

export interface BannerImageProps {
  className?: string;
}
export const BannerImage = memo((props: BannerImageProps) => {
  const { className } = props;
  // const matches = useMediaQuery("(max-width: 1040px)");
  return (
    <div className={classNames(cls.BannerImage, {}, [className])}>
      <Layout className={cls.layout}>
        <div />
        <VStack align='start' justify='center' gap={0.5}>
          <span className={cls.title}>
            ВСЕ САМЫЕ СВЕЖИЕ НОВОСТИ И ГОРЯЧИЕ АКЦИИ ШИШКИ
          </span>
          <HStack align='end' justify='end'>
            <PTag tage='P1' className={cls.subTitle}>
              Будь в курсе всех акций и спец предложений, обсуждай новинки,
              задавай вопросы и получай консультации от наших сотрудников
            </PTag>
          </HStack>
        </VStack>
      </Layout>
    </div>
  );
});
