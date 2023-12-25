import { memo } from 'react';
import cls from './ProductFilterAction.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { VStack } from '@/shared/ui/Stack';

export interface ProductFilterActionProps {
  className?: string;
  onClearFilter: () => void;
  onAddFilter: () => void;
  isLoading: boolean;
}
export const ProductFilterAction = memo((props: ProductFilterActionProps) => {
  const { className, onClearFilter, onAddFilter, isLoading } = props;
  return (
    <VStack
      max
      gap={0.75}
      className={classNames(cls.btnWrapper, {}, [className])}
    >
      <ButtonUi
        name='exept'
        layOut='TextOnly'
        theme='primary'
        className={cls.btn}
        isLoading={isLoading}
        onClick={onAddFilter}
      >
        Применить
      </ButtonUi>
      <ButtonUi
        name='clear'
        layOut='TextOnly'
        theme='secondary'
        className={cls.btn}
        onClick={onClearFilter}
      >
        сбросить
      </ButtonUi>
    </VStack>
  );
});
