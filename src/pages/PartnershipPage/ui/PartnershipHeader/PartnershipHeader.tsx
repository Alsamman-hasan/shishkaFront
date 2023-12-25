import { memo } from 'react';
import cls from './PartnershipHeader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface PartnershipHeaderProps {
  className?: string;
}
export const PartnershipHeader = memo((props: PartnershipHeaderProps) => {
  const { className } = props;
  return (
    <VStack
      className={classNames(cls.PartnershipHeader, {}, [className])}
      gap={1.5}
    >
      <Htag className={cls.H1} tage='h1'>
        СОТРУДНИЧЕСТВО
      </Htag>
      <VStack className={cls.description} justify='start'>
        <PTag tage='P1' className={cls.P1}>
          В сети магазинах &quot;Шишка&quot; действует оптовый отдел, для
          получения оптового прайса заполните заявку
        </PTag>
        <PTag tage='P1' className={cls.P1}>
          Для связи: +7(999)1395252 <br /> почта: shishka.commerce@gmail.com
        </PTag>
      </VStack>
    </VStack>
  );
});
