import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './CartContent.module.scss';
import {
  getCartItems,
  getIsLoading,
} from '../../model/selectors/getCartData/getCartData';
import { CartTable } from '../CartTable/CartTable';
import { CartTableMobile } from '../CartTableMobile/CartTableMobile';
import { CartTotal } from '../CartTotal/CartTotal';
import { getRouteCatalog } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface CartContentProps {
  className?: string;
}
export const CartContent = memo((props: CartContentProps) => {
  const { className } = props;
  const isMobile = useMediaQuery('(max-width: 480px)');
  const navigate = useNavigate();
  const cartsItems = useAppSelector(getCartItems);
  const isLoading = useAppSelector(getIsLoading);
  // request for getting carts is in header
  const onHandleNavigate = useCallback(() => {
    navigate(getRouteCatalog());
  }, [navigate]);

  const items = useCallback(() => {
    if (cartsItems.length > 0)
      return (
        <HStack max align='start' gap={2.5} className={cls.itemsView}>
          {isMobile ? (
            <CartTableMobile cartItems={cartsItems} />
          ) : (
            <CartTable cartItems={cartsItems} />
          )}
          <CartTotal />
        </HStack>
      );
    return (
      <VStack gap={2.5}>
        <VStack gap={0.75}>
          <Htag tage='h2'>Ваша корзина пуста</Htag>
          <PTag tage='P2'>Перейдите в каталог, чтобы добавить товары</PTag>
        </VStack>
        <ButtonUi
          layOut='TextOnly'
          name='go'
          theme='primary'
          size='L'
          className={cls.btn}
          onClick={onHandleNavigate}
        >
          перейти в каталог
        </ButtonUi>
      </VStack>
    );
  }, [cartsItems, isMobile, onHandleNavigate]);

  return (
    <VStack className={classNames(cls.CartContent, {}, [className])} gap={2.5}>
      <PageTitle title='КОРЗИНА' />
      {isLoading ? (
        <VStack max align='center' justify='center'>
          <Loader />
        </VStack>
      ) : (
        items()
      )}
    </VStack>
  );
});
