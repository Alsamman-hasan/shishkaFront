import { memo } from 'react';
import cls from './ProductDetailsAvailability.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface OrderTabProps {
  className?: string;
}
export const OrderTab = memo((props: OrderTabProps) => {
  const { className } = props;
  return (
    <VStack className={classNames(cls.OrderTab, {}, [className])} gap={1}>
      <PTag className={cls.pTag} tage='P2'>
        Доступен только самовывоз товара из магазина.
      </PTag>
      <PTag className={cls.pTag} tage='P2'>
        Дистанционная продажа товаров, попадающих под запрет Федерального закона
        Российской Федерации от 23 февраля 2013 г. № 15-ФЗ «ОБ ОХРАНЕ ЗДОРОВЬЯ
        ГРАЖДАН ОТ ВОЗДЕЙСТВИЯ ОКРУЖАЮЩЕГО ТАБАЧНОГО ДЫМА, ПОСЛЕДСТВИЙ
        ПОТРЕБЛЕНИЯ ТАБАКА ИЛИ ПОТРЕБЛЕНИЯ НИКОТИНСОДЕРЖАЩЕЙ ПРОДУКЦИИ», не
        осуществляется.
      </PTag>
      <PTag className={cls.pTag} tage='P2'>
        Резерв товара, оформленного через сайт, не является заключенным
        договором о намерениях приобрести товар.Сделка по приобретению товара
        осуществляется только в магазине при предъявлении паспорта,
        подтверждающего совершеннолетие.
      </PTag>
    </VStack>
  );
});
