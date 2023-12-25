import { memo, useCallback } from 'react';
import cls from './Agreements.module.scss';
import {
  getSignUpDataProcessing,
  getSignUpNewsMailings,
} from '../../model/selectors/getSignUpData/getSignUpData';
import { signUpActions } from '../../model/slice/SignUpSlice';
import { getRouteMain } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { VStack } from '@/shared/ui/Stack';

export const Agreements = memo(() => {
  const dispatch = useAppDispatch();
  const newsMailings = useAppSelector(getSignUpNewsMailings);
  const dataProcessing = useAppSelector(getSignUpDataProcessing);
  const onChangeDataProcessing = useCallback(
    (value: boolean) => {
      dispatch(signUpActions.setDataProcessing(value));
    },
    [dispatch],
  );

  const onChangeNewsMailings = useCallback(
    (value: boolean) => {
      dispatch(signUpActions.setNewsMailings(value));
    },
    [dispatch],
  );

  const labelRender = useCallback(
    () => (
      <>
        Я даю согласие на обработку{' '}
        <AppLink to={getRouteMain()}>персональных данных</AppLink>
      </>
    ),
    [],
  );
  return (
    <VStack className={cls.checkboxWrapper}>
      <Checkbox
        name='agree'
        checked={newsMailings}
        label='Хочу получать новости и рекламную рассылку'
        onChange={onChangeNewsMailings}
      />
      <Checkbox
        required
        checked={dataProcessing}
        name='agree2'
        label={labelRender()}
        error={false}
        errorMessage='fdfd'
        onChange={onChangeDataProcessing}
      />
    </VStack>
  );
});
