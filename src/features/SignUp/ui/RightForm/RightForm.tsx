import { Dayjs } from 'dayjs';
import { memo, useCallback, useMemo } from 'react';
import {
  getSignUpBirthday,
  getSignUpLocality,
  getSignUpPassword,
  getSignUpSex,
  getSignUpPasswordErrorMessage,
} from '../../model/selectors/getSignUpData/getSignUpData';
import { signUpActions } from '../../model/slice/SignUpSlice';
import { cities } from '@/shared/consts/russianCities';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { AutoCompleteVirt, DatePickerUi, Input } from '@/shared/ui/Inputs';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export const RightForm = memo(() => {
  const dispatch = useAppDispatch();

  const birthday = useAppSelector(getSignUpBirthday);
  const password = useAppSelector(getSignUpPassword);
  const errorPassord = useAppSelector(getSignUpPasswordErrorMessage);
  const sex = useAppSelector(getSignUpSex);
  const city = useAppSelector(getSignUpLocality);

  const items = useMemo(
    () =>
      cities.map((item, i) => ({
        id: `${item.name}-${item.population}-${i}`,
        title: item.name,
      })),
    [],
  );

  const onSelectTest = useCallback(
    (value: string | null) => {
      dispatch(signUpActions.setLocality(value || ''));
    },
    [dispatch],
  );

  const onSelectSex = useCallback(
    (value: string) => {
      dispatch(signUpActions.setSex(value));
    },
    [dispatch],
  );
  const onChangeBirthday = useCallback(
    (value: Dayjs | null) => {
      dispatch(signUpActions.setBirthday(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(signUpActions.setPassword(value));
    },
    [dispatch],
  );
  return (
    <VStack max gap={1} align='center' justify='center' id='test'>
      <HStack gap={1} align='center' justify='between'>
        <DatePickerUi
          required
          name='singUp'
          label='Дата рождения'
          value={birthday}
          onChange={onChangeBirthday}
        />
        <VStack gap={1} justify='between'>
          <PTag tage='P3'>Пол</PTag>
          <HStack gap={1}>
            <Checkbox
              checked={sex === 'male'}
              name='male'
              label='Муж'
              onChange={() => onSelectSex('male')}
            />
            <Checkbox
              name='female'
              checked={sex === 'female'}
              label='Жен'
              onChange={() => onSelectSex('female')}
            />
          </HStack>
        </VStack>
      </HStack>
      <AutoCompleteVirt
        required
        name='locationsSignUp'
        items={items}
        label='Населенный пункт'
        value={city}
        placeholder='Выберите из списка'
        onChange={onSelectTest}
      />
      <Input
        required
        name='password'
        label='Придумайте пароль'
        pattern='^[\s\S]{8,32}$'
        errorMessage={errorPassord}
        type='password'
        value={password}
        onChange={onChangePassword}
      />
    </VStack>
  );
});
