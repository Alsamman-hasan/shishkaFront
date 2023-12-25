import { memo } from 'react';
import cls from './ProductSort.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectUi } from '@/shared/ui/Inputs';

const items = [
  { id: 1, name: 'Высокий рейтинг' },
  { id: 2, name: 'Сначала дешевые' },
  { id: 3, name: 'Сначала дорогие' },
];

export interface ProductSortProps {
  className?: string;
  onSelectSort: (sort: string) => void;
  sortValue: string;
}

export const ProductSort = memo((props: ProductSortProps) => {
  const { className, onSelectSort, sortValue } = props;
  return (
    <div className={classNames(cls.CatalogProductSort, {}, [className])}>
      <SelectUi items={items} value={sortValue} onSelect={onSelectSort} />
    </div>
  );
});
