import { memo, useCallback } from 'react';
import cls from './FavoritesHeader.module.scss';
import {
  favoritesActions,
  fetchFavorites,
  getSort,
} from '@/entities/Favorites';
import { ProductSort, SortTypes } from '@/features/ProductSort';
import Cross from '@/shared/assets/icons/close.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface FavoritesHeaderProps {
  className?: string;
  onRemoveAllLikes: () => void;
}
export const FavoritesHeader = memo((props: FavoritesHeaderProps) => {
  const { className, onRemoveAllLikes } = props;
  const dispatch = useAppDispatch();
  const sortValue = useAppSelector(getSort);

  const onSelectSort = useCallback(
    (value: string) => {
      dispatch(favoritesActions.setSort(value as SortTypes));
      dispatch(fetchFavorites({}));
    },
    [dispatch],
  );

  return (
    <VStack max gap={0.75}>
      <HStack
        max
        justify='between'
        className={classNames(cls.FavoritesHeader, {}, [className])}
      >
        <HStack className={cls.remove} gap={0.25} onClick={onRemoveAllLikes}>
          <Cross />
          <PTag tage='P2'>Удалить все товары</PTag>
        </HStack>
        <ProductSort
          sortValue={sortValue}
          className={cls.selector}
          onSelectSort={onSelectSort}
        />
      </HStack>
      <p className={cls.divider} />
    </VStack>
  );
});
