import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './Favorites.module.scss';
import { FavoritesHeader } from '../FavoritesHeader/FavoritesHeader';

import { removeAllLikesReq } from '@/entities/Favorites';
import { ProductCard } from '@/entities/Products';
import { getRouteCatalog } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { ErrorMessage } from '@/shared/ui/Messages';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface FavoritesProps {
  className?: string;
  data: Product[];
  error?: string;
  isLoading: boolean;
}

const getSkeletons = () => (
  <VStack max justify='center' align='center'>
    <Loader />
  </VStack>
);
export const Favorites = memo((props: FavoritesProps) => {
  const { className, isLoading, data, error } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onNavigateToCatalog = useCallback(() => {
    navigate(getRouteCatalog());
  }, [navigate]);

  const onRemoveAllLikes = useCallback(() => {
    const ids = data.map(i => i.id);
    dispatch(removeAllLikesReq(ids));
  }, [data, dispatch]);

  const content = useCallback(() => {
    if (data.length > 0)
      return (
        <>
          <FavoritesHeader onRemoveAllLikes={onRemoveAllLikes} />
          <p className={cls.divider} />
          <div className={cls.cardsWrapper}>
            {data.map(prod => (
              <ProductCard key={prod.id} card={prod} />
            ))}
          </div>
        </>
      );
    return (
      <VStack justify='start' align='start' className={cls.noData} gap={2.5}>
        <VStack gap={0.75}>
          <Htag tage='h3' className={cls.emptyTitle}>
            Вы еще не добавили товары в избранное
          </Htag>
          <PTag tage='P2' className={cls.emptySubTitle}>
            Перейдите в каталог, чтобы добавить товары
          </PTag>
        </VStack>
        <ButtonUi
          className={cls.btn}
          layOut='TextOnly'
          name='go-to-catalog'
          size='L'
          theme='primary'
          onClick={onNavigateToCatalog}
        >
          перейти в каталог
        </ButtonUi>
      </VStack>
    );
  }, [data, onNavigateToCatalog, onRemoveAllLikes]);

  if (error)
    return (
      <VStack
        max
        className={classNames(cls.Favorites, {}, [className])}
        gap={1.5}
      >
        <ErrorMessage text={error} type='P3' textAlign='center' />
      </VStack>
    );

  return (
    <VStack
      max
      className={classNames(cls.Favorites, {}, [className])}
      gap={1.5}
    >
      <PageTitle title='ИЗБРАННЫЕ ТОВАРЫ' />
      {isLoading ? getSkeletons() : content()}
    </VStack>
  );
});
