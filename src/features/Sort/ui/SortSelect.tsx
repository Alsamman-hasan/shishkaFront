import { memo, useCallback } from 'react';
import cls from './SortSelect.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectUi } from '@/shared/ui/Inputs';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface OrderSortProps {
  className?: string;
  value: string;
  sortItems: SelectItems<string>[];
  onSelectSort: (value: Sorts) => void;
}

export const SortSelect = memo((props: OrderSortProps) => {
  const { className, sortItems, value, onSelectSort } = props;
  const onSelectSex = useCallback(
    (selectSort: string) => {
      onSelectSort(selectSort as Sorts);
    },
    [onSelectSort],
  );
  return (
    <VStack className={classNames(cls.OrderSort, {}, [className])}>
      <HStack
        max
        className={cls.sortWrapper}
        align='center'
        justify='start'
        gap={0.75}
      >
        <PTag tage='P3' className={cls.sortTitle}>
          Сортировать:
        </PTag>
        <SelectUi items={sortItems} value={value} onSelect={onSelectSex} />
      </HStack>
    </VStack>
  );
});
