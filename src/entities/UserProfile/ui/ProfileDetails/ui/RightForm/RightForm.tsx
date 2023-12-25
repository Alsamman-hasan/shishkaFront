import { memo, useCallback } from 'react';
import {
  getProfileForm,
  getProfileSex,
} from '../../../../model/selectors/getProfileForm/getProfileForm';
import { profileActions } from '../../../../model/slice/profileSlice';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { Input, PhoneInput, SelectUi } from '@/shared/ui/Inputs';
import { VStack } from '@/shared/ui/Stack';

export const RightForm = memo(() => {
  const dispatch = useAppDispatch();

  const formData = useAppSelector(getProfileForm);
  const sex = useAppSelector(getProfileSex);
  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ email: value || '' }));
    },
    [dispatch],
  );

  const onChangePhone = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ mobile: value || '' }));
    },
    [dispatch],
  );

  const onSelectSex = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ sex: value }));
    },
    [dispatch],
  );
  return (
    <VStack max gap={1} align='center' justify='center'>
      <Input
        required
        name='E-mail'
        label='E-mail'
        type='email'
        value={formData?.email || ''}
        onChange={onChangeEmail}
      />
      <PhoneInput
        name='Phone'
        label='Телефон'
        value={formData?.mobile || ''}
        placeholder='+7'
        onChange={onChangePhone}
      />
      <SelectUi<string>
        required
        label='Пол'
        value={sex}
        placeholder='Выберите из списка'
        items={[
          { id: 1, name: 'муж' },
          { id: 2, name: 'жен' },
        ]}
        onSelect={onSelectSex}
      />
    </VStack>
  );
});
