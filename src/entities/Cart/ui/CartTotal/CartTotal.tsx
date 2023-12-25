import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './CartTotal.module.scss';
import {
  getCountCarts,
  getCartSavings,
  getTotal,
} from '../../model/selectors/getCartData/getCartData';
import { getRouteCheckoutCarts } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface CartTotalProps {
  className?: string;
}
export const CartTotal = memo((props: CartTotalProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const total = useAppSelector(getTotal);
  const count = useAppSelector(getCountCarts);
  const saving = useAppSelector(getCartSavings);
  const onCheckout = useCallback(() => {
    navigate(getRouteCheckoutCarts());
  }, [navigate]);
  return (
    <div className={classNames(cls.CartTotal, {}, [className])}>
      <HStack max justify='between'>
        <Htag tage='h3'> Ваша корзина</Htag>
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
          <PTag tage='P3'>{saving} ₽</PTag>
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
      <ButtonUi
        layOut='TextOnly'
        theme='primary'
        name='checkout'
        size='L'
        onClick={onCheckout}
      >
        оформить заказ
      </ButtonUi>
    </div>
  );
});
