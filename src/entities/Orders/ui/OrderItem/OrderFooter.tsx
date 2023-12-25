import { Skeleton } from '@mui/material';
import { memo } from 'react';
import cls from './OrderItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface OrderFooterProps {
  className?: string;
  address: string;
  total: number;
  itemsCount: number;
  isLoading: boolean;
  onReorder: () => void;
}
export const OrderFooter = memo((props: OrderFooterProps) => {
  const { className, address, itemsCount, total, isLoading, onReorder } = props;
  return (
    <VStack
      max
      gap={1.25}
      className={classNames(cls.OrderFooter, {}, [className])}
    >
      <div className={cls.placeReceipt}>
        <PTag className={cls.isHeader} tage='P3'>
          Получен:
        </PTag>
        <PTag tage='P3'>{address}</PTag>
      </div>
      <HStack
        max
        gap={1.5}
        className={cls.actions}
        justify='between'
        align='center'
      >
        <ButtonUi
          layOut='TextOnly'
          theme='primary'
          className={cls.btn}
          size='L'
          name='reorder'
          onClick={onReorder}
        >
          ПОВТОРИТЬ ЗАКАЗ
        </ButtonUi>
        {isLoading ? (
          <Skeleton width={336} height={50} />
        ) : (
          <HStack className={cls.orderTotalInfo}>
            <PTag className={cls.isHeader} tage='P2'>
              Итого:
            </PTag>
            <PTag tage='P2'>{itemsCount} шт.</PTag>
            <Htag tage='h4'>{total} ₽</Htag>
          </HStack>
        )}
      </HStack>
    </VStack>
  );
});
