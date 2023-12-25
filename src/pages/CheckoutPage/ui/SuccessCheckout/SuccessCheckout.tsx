import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './SuccessCheckout.module.scss';
import { getRouteMain } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface SuccessCheckoutProps {
  className?: string;
}
export const SuccessCheckout = memo((props: SuccessCheckoutProps) => {
  const { className } = props;
  const navigate = useNavigate();
  return (
    <VStack max justify='center' align='center'>
      <VStack
        className={classNames(cls.SuccessCheckout, {}, [className])}
        gap={2}
        align='center'
      >
        <VStack
          max
          gap={1}
          justify='center'
          align='center'
          className={cls.infoWrapper}
        >
          <Htag tage='h3' className={cls.title}>
            Благодарим за заказ №059968
          </Htag>
          <VStack max gap={0.75}>
            <PTag tage='P2' className={cls.subTitle}>
              Заберите ваш заказ в магазине по адресу:г.Нижний Новгород, ул.
              Гагарина 222а
            </PTag>
            <PTag tage='P2' className={cls.subTitle}>
              Срок хранения заказа 3 дня с момента оформления. Необходимо
              продавцу назвать номер заказа и предъявить паспорт.
            </PTag>
          </VStack>
        </VStack>
        <VStack max gap={1} align='center'>
          <ButtonUi
            layOut='TextOnly'
            name='con'
            theme='primary'
            size='L'
            className={cls.btn}
          >
            продолжить покупки
          </ButtonUi>
          <ButtonUi
            layOut='TextOnly'
            name='con'
            theme='tertiary'
            size='M'
            className={cls.btn}
            onClick={() => navigate(getRouteMain())}
          >
            Вернуться на главную
          </ButtonUi>
        </VStack>
      </VStack>
    </VStack>
  );
});
