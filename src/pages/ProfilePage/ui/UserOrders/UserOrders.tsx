import { memo } from 'react';
import cls from './UserOrders.module.scss';
import {
  OrderSort,
  OrderTabs,
  fetchAllOrdersReq,
  orderReducer,
  fetchCountOrdersReq,
} from '@/entities/Orders';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoaderUI,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { VStack } from '@/shared/ui/Stack';

const initialReducers: ReducersList = {
  orders: orderReducer,
};
export interface UserOrdersProps {
  className?: string;
}
export const UserOrders = memo((props: UserOrdersProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  useEffectOnce(() => {
    dispatch(fetchAllOrdersReq());
    dispatch(fetchCountOrdersReq());
  });
  return (
    <DynamicModuleLoaderUI removeAfterUnmount reducers={initialReducers}>
      <VStack
        max
        gap={1.5}
        align='start'
        className={classNames(cls.UserOrders, {}, [className])}
      >
        <OrderSort />
        <OrderTabs />
      </VStack>
    </DynamicModuleLoaderUI>
  );
});
