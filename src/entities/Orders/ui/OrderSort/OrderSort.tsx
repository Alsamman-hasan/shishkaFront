import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import cls from './OrderSort.module.scss';
import { getProfileOrderSort } from '../../model/selector/getOrderData/getOrderData';
import { orderActions } from '../../model/slice/ordersSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { SelectUi } from '@/shared/ui/Inputs';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface OrderSortProps {
  className?: string;
}
const sortItems = [
  { id: 1, name: 'Сначала новые' },
  { id: 2, name: 'Сначала старые' },
  { id: 3, name: 'Сначала с большей суммой' },
  { id: 4, name: 'Сначала с меньшей суммой' },
];

export const OrderSort = memo((props: OrderSortProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const sort = useSelector(getProfileOrderSort);

  const onSelectSex = useCallback(
    (value: string) => {
      dispatch(orderActions.setSort(value as Sorts));
    },
    [dispatch],
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
        <SelectUi items={sortItems} value={sort} onSelect={onSelectSex} />
      </HStack>
    </VStack>
  );
});
