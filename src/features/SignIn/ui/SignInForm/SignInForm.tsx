import { memo, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './SignInForm.module.scss';
import {
  getSignInEmail,
  getSignInPassword,
  getSignInIsLoading,
  getSignInError,
} from '../../model/selectors/getSignInData';
import { signInReq } from '../../model/service/SignInReq/signInReq';
import { signInActions, signInReducer } from '../../model/slice/signInSlice';
import { ForgotPasswordModal } from '@/entities/ForgotPassword';
import { getRouteProfile, getRouteSignUp } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Input } from '@/shared/ui/Inputs';
import { ErrorMessage } from '@/shared/ui/Messages';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface SignInFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  SignIn: signInReducer,
};

export const SignInForm = memo((props: SignInFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const email = useAppSelector(getSignInEmail);
  const password = useAppSelector(getSignInPassword);
  const isLoading = useAppSelector(getSignInIsLoading);
  const error = useAppSelector(getSignInError);

  const [open, setOpen] = useState(false);

  const dis = useMemo(() => {
    if (!password || !email || isLoading) return true;

    return false;
  }, [email, isLoading, password]);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(signInActions.setEmail(value));
    },
    [dispatch],
  );

  const onOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(signInActions.setPassword(value));
    },
    [dispatch],
  );

  const onSignIn = useCallback(async () => {
    const singInData = await dispatch(signInReq());

    if (singInData.meta.requestStatus === 'fulfilled')
      navigate(getRouteProfile());
  }, [dispatch, navigate]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <VStack
        max
        gap={1}
        className={classNames(cls.SignInForm, {}, [className])}
        align='center'
      >
        <Htag tage='h1'>ВХОД</Htag>
        <div>
          <PTag tage='P2'>Войдите в ваш личный кабинет.</PTag>
          <PTag tage='P2'>
            Или <AppLink to={getRouteSignUp()}>зарегистрируйтесь</AppLink>, если
            у вас еще нет личного кабинета
          </PTag>
        </div>
        <VStack max gap={1} align='center' justify='center'>
          <Input
            name='email '
            label='E-mail'
            type='email'
            errorMessage='Please enter falid email address'
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            name='password'
            label='Пароль'
            type='password'
            value={password}
            onChange={onChangePassword}
          />
        </VStack>
        <HStack max justify='end' onClick={onOpenModal}>
          <PTag tage='P2' className={cls.ForgotPassword}>
            Забыли пароль?
          </PTag>
        </HStack>
        <ButtonUi
          layOut='TextOnly'
          theme='primary'
          name='login'
          className={cls.btn}
          size='L'
          disabled={dis}
          isLoading={isLoading}
          onClick={onSignIn}
        >
          войти
        </ButtonUi>
        {!!error && <ErrorMessage text={error} type='P3' />}
      </VStack>
      {!!open && <ForgotPasswordModal open={open} onClose={onClose} />}
    </DynamicModuleLoader>
  );
});
