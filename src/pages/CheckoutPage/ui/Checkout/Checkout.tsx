import { memo } from 'react';
import cls from './Checkout.module.scss';
import { getCheckoutSuccess } from '../../model/selectors/getCheckoutData';
import { checkoutReducer } from '../../model/slice/checkoutsSlice';
import { CheckoutForm } from '../CheckoutForm/CheckoutForm';
import { CheckoutTotal } from '../CheckoutTotal/CheckoutTotal';
import { SuccessCheckout } from '../SuccessCheckout/SuccessCheckout';
import { getRouteProfile } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface CheckoutProps {
  className?: string;
}

const initialReducers: ReducersList = {
  Checkout: checkoutReducer,
};
export const Checkout = memo((props: CheckoutProps) => {
  const { className } = props;
  const success = useAppSelector(getCheckoutSuccess);
  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      {success ? (
        <SuccessCheckout />
      ) : (
        <VStack max className={classNames(cls.Checkout, {}, [className])}>
          <VStack max align='start' className={cls.CheckoutHeader} gap={1.5}>
            <Htag tage='h1' className={cls.title}>
              ОФОРМЛЕНИЕ ЗАКАЗА
            </Htag>
            <HStack
              max
              gap={2.5}
              align='start'
              justify='between'
              className={cls.content}
            >
              <VStack max gap={1.25}>
                <PTag tage='P1' className={cls.subTitle}>
                  Заполните поля ниже или войдите в свой{' '}
                  <AppLink to={getRouteProfile()}>личный кабинет</AppLink>
                </PTag>
                <CheckoutForm />
              </VStack>
              <CheckoutTotal />
            </HStack>
          </VStack>
        </VStack>
      )}
    </DynamicModuleLoader>
  );
});
