import { memo, useCallback } from 'react';
import cls from './StoresForm.module.scss';
import { getCheckoutStore } from '../../model/selectors/getCheckoutData';
import { checkoutActions } from '../../model/slice/checkoutsSlice';
import { useFetchStoresApi } from '@/entities/Stores';
import { fetchProfileData } from '@/entities/UserProfile';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { PTag } from '@/shared/ui/Paragraph/P';
import { RadioButton } from '@/shared/ui/RadioBtn/RadioButton';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

export interface StoresFormProps {
  className?: string;
}
export const StoresForm = memo((props: StoresFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const selectStore = useAppSelector(getCheckoutStore);
  const [getStores, { data, isLoading }] = useFetchStoresApi();

  const fetchStores = useCallback(async () => {
    await getStores({
      method: 'getStores',
    });
  }, [getStores]);

  const onSelectStore = useCallback(
    (value: string) => {
      dispatch(checkoutActions.setStore(value));
    },
    [dispatch],
  );

  useEffectOnce(() => {
    fetchStores();
    dispatch(fetchProfileData());
  });
  const getSkeletons = () =>
    new Array(4)
      .fill(0)
      .map((item, i) => <Skeleton key={item + i} width='100%' height={40} />);
  return (
    <VStack
      max
      className={classNames(cls.StoresForm, {}, [className])}
      gap={1.25}
    >
      <PTag tage='P1' className={cls.title}>
        Выберите магазин, где вам удобно будет забрать заказ
      </PTag>
      {isLoading ? (
        getSkeletons()
      ) : (
        <div className={cls.stores}>
          {!!data?.result &&
            data.result.map(store => (
              <VStack key={store.id} gap={0.75}>
                <RadioButton
                  key={store.name}
                  id={store.name}
                  label={store.name}
                  checked={store.id === selectStore}
                  onChange={() => onSelectStore(store.id)}
                />
                <p className={cls.divider} />
              </VStack>
            ))}
        </div>
      )}
    </VStack>
  );
});
