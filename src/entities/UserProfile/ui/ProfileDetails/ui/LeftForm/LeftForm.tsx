import { Dayjs } from 'dayjs';
import { memo, useCallback, useMemo } from 'react';
import { getProfileForm } from '../../../../model/selectors/getProfileForm/getProfileForm';
import { profileActions } from '../../../../model/slice/profileSlice';
import { cities } from '@/shared/consts/russianCities';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AutoCompleteVirt, DatePickerUi, Input } from '@/shared/ui/Inputs';
import { VStack } from '@/shared/ui/Stack';

export const LeftForm = memo(() => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(getProfileForm);
  const items = useMemo(
    () =>
      cities.map(item => ({
        id: `${item.name}${item.population}`,
        title: item.name,
      })),
    [],
  );

  const onSelectTest = useCallback(
    (value: string | null) => {
      if (value) dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  const onChangeName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ name: value || '' }));
    },
    [dispatch],
  );

  const onChangeBirthday = useCallback(
    (value: Dayjs | null) => {
      dispatch(profileActions.updateProfile({ birthday: value }));
    },
    [dispatch],
  );
  return (
    <VStack max gap={1} align='center' justify='center'>
      <Input
        required
        name='fullname'
        label='ФИО'
        value={formData?.name || ''}
        onChange={onChangeName}
      />
      <DatePickerUi
        name='profileDetail'
        label='Дата рождения'
        value={formData?.birthday || null}
        onChange={onChangeBirthday}
      />
      <AutoCompleteVirt
        name='locationsSignUp'
        items={items}
        label='Населенный пункт'
        value={formData?.city || ''}
        placeholder='Выберите из списка'
        onChange={onSelectTest}
      />
    </VStack>
  );
});
