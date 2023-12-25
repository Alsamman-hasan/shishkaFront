import { memo } from 'react';
import cls from './CheckoutTotal.module.scss';
import {
  getCountCarts,
  getTotal,
  getCartSavings,
  getIsLoading,
} from '@/entities/Cart';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface CheckoutTotalProps {
  className?: string;
}
export const CheckoutTotal = memo((props: CheckoutTotalProps) => {
  const { className } = props;
  const total = useAppSelector(getTotal);
  const count = useAppSelector(getCountCarts);
  const saving = useAppSelector(getCartSavings);
  const isLoading = useAppSelector(getIsLoading);

  // need refactoring
  if (isLoading)
    return (
      <div className={classNames(cls.CheckoutTotal, {}, [className])}>
        <HStack max justify='between'>
          <Htag tage='h3'> Итого:</Htag>
          <Skeleton width={100} height={17} />
        </HStack>
        <VStack max gap={0.5} className={cls.info}>
          <HStack max justify='between'>
            <PTag className={cls.grey} tage='P3'>
              Сумма
            </PTag>
            <Skeleton width={100} height={17} />
          </HStack>
          <HStack max justify='between'>
            <PTag className={cls.grey} tage='P3'>
              Скидка
            </PTag>
            <Skeleton width={100} height={17} />
          </HStack>
          <HStack max justify='between'>
            <PTag className={cls.grey} tage='P3'>
              Способ доставки
            </PTag>
            <Skeleton width={100} height={17} />
          </HStack>
        </VStack>
        <HStack max justify='between'>
          <PTag className={cls.darkGrey} tage='P3'>
            Общая стоимость
          </PTag>
          <Skeleton width={100} height={17} />
        </HStack>
      </div>
    );

  return (
    <div className={classNames(cls.CheckoutTotal, {}, [className])}>
      <HStack max justify='between'>
        <Htag tage='h3'> Итого:</Htag>
        <PTag className={cls.grey} tage='P2'>
          {count}
        </PTag>
      </HStack>
      <VStack max gap={0.5} className={cls.info}>
        <HStack max justify='between'>
          <PTag className={cls.grey} tage='P3'>
            Сумма
          </PTag>
          <Htag tage='h4'>{total}₽</Htag>
        </HStack>
        <HStack max justify='between'>
          <PTag className={cls.grey} tage='P3'>
            Скидка
          </PTag>
          <PTag tage='P3'>{saving}₽</PTag>
        </HStack>
        <HStack max justify='between'>
          <PTag className={cls.grey} tage='P3'>
            Способ доставки
          </PTag>
          <PTag tage='P3'>Самовывоз</PTag>
        </HStack>
      </VStack>
      <HStack max justify='between'>
        <PTag className={cls.darkGrey} tage='P3'>
          Общая стоимость
        </PTag>
        <Htag tage='h3'>{total}₽</Htag>
      </HStack>
    </div>
  );
});
