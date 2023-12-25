import { memo } from 'react';
import { Link } from 'react-router-dom';
import { PopularCard } from './PopularCard';
import cls from './PopularCategories.module.scss';
import { popularCategories } from '../../model/PopularCategories';
import Vector from '@/shared/assets/icons/Vector.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface PopularCategoriesProps {
  className?: string;
}
export const PopularCategories = memo((props: PopularCategoriesProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.PopularCategories, {}, [className])}>
      <Layout>
        <VStack gap={1.5}>
          <HStack max justify='between'>
            <Htag tage='h1'>ПОПУЛЯРНЫЕ КАТЕГОРИИ</Htag>
            <Link to='/promotions'>
              <PTag className={cls.P2} tage='P2'>
                Смотреть все
              </PTag>
            </Link>
          </HStack>
          <div className={cls.card}>
            {popularCategories.map((item, i) => (
              <div key={item.id + i} className={cls.PopWrapper}>
                <PopularCard img={item.img} />
                <HStack gap={0.75}>
                  <Htag className={cls.h3} tage='h3'>
                    {item.title}
                  </Htag>
                  <Vector className={cls.Vector} />
                </HStack>
              </div>
            ))}
          </div>
        </VStack>
      </Layout>
    </div>
  );
});
