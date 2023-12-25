import { memo } from 'react';
import cls from './OrderItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

interface ODWrapper {
  name: string;
  price: string | number;
  count: string | number;
  total: string | number;
  isHeader?: boolean;
}

export const OrderDetailsWrapper = memo((props: ODWrapper) => {
  const { count, name, isHeader = false, price, total } = props;
  const matches = useMediaQuery('(max-width: 768px)');
  const tage = isHeader ? 'P3' : 'P2';
  const Mode = {
    [cls.isHeader]: isHeader,
  };

  return (
    <div className={cls.OrderDetailsWrapper}>
      <VStack align='start' className={cls.firstChild}>
        {!isHeader && !!matches && (
          <PTag className={cls.isHeader} tage={tage}>
            Товар
          </PTag>
        )}
        <PTag className={classNames('', Mode)} tage={tage}>
          {name}
        </PTag>
      </VStack>
      <div className={cls.subDetails}>
        <VStack align='start' className={cls.firstChild}>
          {!isHeader && !!matches && (
            <PTag className={cls.isHeader} tage={tage}>
              Цена
            </PTag>
          )}
          <PTag className={classNames('', Mode)} tage={tage}>
            {price}
          </PTag>
        </VStack>
        <VStack align='center'>
          {!isHeader && !!matches && (
            <PTag className={cls.isHeader} tage={tage}>
              Количество
            </PTag>
          )}
          <PTag className={classNames('', Mode)} tage={tage}>
            {count}
          </PTag>
        </VStack>
        <VStack align='end'>
          {!isHeader && !!matches && (
            <PTag className={cls.isHeader} tage={tage}>
              Сумма
            </PTag>
          )}
          <PTag className={classNames('', Mode)} tage={tage}>
            {total}
          </PTag>
        </VStack>
      </div>
    </div>
  );
});
