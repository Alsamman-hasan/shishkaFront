import { memo, useCallback } from 'react';
import {
  getSignUpEmail,
  getSignUpFullName,
  getSignUpPhone,
  getSignUpEmailError,
  getSignUpFullNameError,
} from '../../model/selectors/getSignUpData/getSignUpData';
import { signUpActions } from '../../model/slice/SignUpSlice';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { Input, PhoneInput } from '@/shared/ui/Inputs';
import { VStack } from '@/shared/ui/Stack';

export const LeftForm = memo(() => {
  const dispatch = useAppDispatch();

  const fullName = useAppSelector(getSignUpFullName);
  const phone = useAppSelector(getSignUpPhone);
  const email = useAppSelector(getSignUpEmail);
  const emailErrorMessage = useAppSelector(getSignUpEmailError);
  const error = useAppSelector(getSignUpFullNameError);
  const onChangePhone = useCallback(
    (value: string) => {
      dispatch(signUpActions.setPhone(value));
    },
    [dispatch],
  );

  const onChangeName = useCallback(
    (value: string) => {
      dispatch(signUpActions.setFullName(value));
    },
    [dispatch],
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(signUpActions.setEmail(value));
    },
    [dispatch],
  );
  return (
    <VStack max gap={1} align='center' justify='center'>
      <Input
        required
        name='fullname'
        label='ФИО'
        value={fullName}
        pattern='^[A-Za-z-а-яё\s+\D]{5,32}$/g'
        errorMessage={error}
        onChange={onChangeName}
      />
      <PhoneInput
        name='Phone'
        label='Телефон'
        value={phone}
        placeholder='+7'
        onChange={onChangePhone}
      />
      <Input
        required
        name='email'
        errorMessage={emailErrorMessage}
        label='Email'
        type='email'
        value={email}
        onChange={onChangeEmail}
      />
    </VStack>
  );
});
