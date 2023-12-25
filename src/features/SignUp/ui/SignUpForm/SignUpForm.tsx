import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './SignUpForm.module.scss';
import {
  getSignUpError,
  getSignUpIsLoading,
  getInfo,
} from '../../model/selectors/getSignUpData/getSignUpData';
import { signUpReq } from '../../model/service/SignUpReq/signUpReq';
import { signUpReducer } from '../../model/slice/SignUpSlice';
import { Agreements } from '../Agreements/Agreements';
import { LeftForm } from '../LeftForm/LeftForm';
import { RightForm } from '../RightForm/RightForm';
import { SignUpHeader } from '../SignUpHeader/SignUpHeader';
import { getRouteSignIn } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { ErrorMessage } from '@/shared/ui/Messages';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface SignUpFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  SignUp: signUpReducer,
};

export const SignUpForm = memo((props: SignUpFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isloading = useAppSelector(getSignUpIsLoading);
  const error = useAppSelector(getSignUpError);
  const info = useAppSelector(getInfo);

  const onSignUp = useCallback(async () => {
    const data = await dispatch(signUpReq());
    if (data.meta.requestStatus === 'fulfilled') navigate(getRouteSignIn());
  }, [dispatch, navigate]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <VStack
        max
        gap={1}
        className={classNames(cls.SignUpForm, {}, [className])}
        align='center'
      >
        <SignUpHeader />
        <form style={{ width: '100%' }}>
          <HStack max gap={1.375} className={cls.formWrapper}>
            <LeftForm />
            <RightForm />
          </HStack>
        </form>
        <Agreements />
        <ButtonUi
          layOut='TextOnly'
          theme='primary'
          className={cls.btn}
          size='L'
          disabled={isloading}
          isLoading={isloading}
          name='signUp'
          onClick={onSignUp}
        >
          зарегистрироваться
        </ButtonUi>
        {!info.isDisplay && !!error && <ErrorMessage text={error} type='P3' />}
        {!!info.isDisplay && info.err.length > 0 && (
          <ErrorMessage
            text={`Поля ${info.err.join(',')} обязательны`}
            type='P3'
          />
        )}
      </VStack>
    </DynamicModuleLoader>
  );
});
