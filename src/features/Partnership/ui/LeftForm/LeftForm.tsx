import { memo, useCallback, useMemo } from 'react';
import {
  getPartnershipPhone,
  getPartnershipEmail,
  getPartnershipEmailError,
  getPartnershipLocality,
} from '../../model/selectors/getPartnershipData/getPartnershipData';
import { partnershipActions } from '../../model/slice/PartnershipSlice';
import { cities } from '@/shared/consts/russianCities';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { PhoneInput, AutoCompleteVirt, Input } from '@/shared/ui/Inputs';
import { VStack } from '@/shared/ui/Stack';

export const LeftForm = memo(() => {
  const dispatch = useAppDispatch();

  const phone = useAppSelector(getPartnershipPhone);
  const email = useAppSelector(getPartnershipEmail);
  const emailErrorMessage = useAppSelector(getPartnershipEmailError);
  const city = useAppSelector(getPartnershipLocality);

  const items = useMemo(
    () =>
      cities.map((item, i) => ({
        id: `${item.name}-${item.population}-${i}`,
        title: item.name,
      })),
    [],
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(partnershipActions.setEmail(value));
    },
    [dispatch],
  );

  const onChangePhone = useCallback(
    (value: string) => {
      dispatch(partnershipActions.setPhone(value));
    },
    [dispatch],
  );

  const onSelectCity = useCallback(
    (value: string | null) => {
      dispatch(partnershipActions.setLocality(value || ''));
    },
    [dispatch],
  );
  return (
    <VStack gap={1}>
      <Input
        name='email'
        errorMessage={emailErrorMessage}
        label='E-mail*'
        type='email'
        value={email}
        onChange={onChangeEmail}
      />
      <PhoneInput
        name='Phone'
        label='Телефон'
        placeholder='+7'
        value={phone}
        onChange={onChangePhone}
      />
      <AutoCompleteVirt
        name='locationsPartnership'
        items={items}
        label='Город'
        value={city}
        placeholder='Выберите из списка'
        onChange={onSelectCity}
      />
    </VStack>
  );
});
