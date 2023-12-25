import { memo, useCallback } from 'react';
import {
  getSignInDataProcessing,
  getSignInNewsMailings,
} from '../../model/selectors/getSignInData';
import { signInActions } from '../../model/slice/signInSlice';
import { getRouteMain } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { VStack } from '@/shared/ui/Stack';

export const Checkboxs = memo(() => {
  const dispatch = useAppDispatch();
  const newsMailings = useAppSelector(getSignInNewsMailings);
  const dataProcessing = useAppSelector(getSignInDataProcessing);
  const onChangeDataProcessing = useCallback(
    (value: boolean) => {
      dispatch(signInActions.setDataProcessing(value));
    },
    [dispatch],
  );

  const onChangeNewsMailings = useCallback(
    (value: boolean) => {
      dispatch(signInActions.setNewsMailings(value));
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
    <VStack max>
      <Checkbox
        name='agree'
        checked={newsMailings}
        label='Хочу получать новости и рекламную рассылку'
        onChange={onChangeNewsMailings}
      />
      <Checkbox
        checked={dataProcessing}
        name='agree2'
        label={labelRender()}
        onChange={onChangeDataProcessing}
      />
    </VStack>
  );
});
