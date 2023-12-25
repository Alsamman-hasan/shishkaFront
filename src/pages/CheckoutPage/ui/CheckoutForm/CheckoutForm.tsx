import { Dayjs } from 'dayjs';
import { memo, useCallback, useMemo } from 'react';
import cls from './CheckoutForm.module.scss';
import {
  getCheckoutBirthday,
  getCheckoutCity,
  getCheckoutDataProcessing,
  getCheckoutFullName,
  getCheckoutPhone,
  getCheckoutStore,
  getCheckoutLoading,
  getCheckoutError,
} from '../../model/selectors/getCheckoutData';
import { checkoutReq } from '../../model/services/checkout';
import { checkoutActions } from '../../model/slice/checkoutsSlice';
import { StoresForm } from '../StoresForm/StoresForm';
import { StoresMap } from '../StoresMap/StoresMap';
import { cities } from '@/shared/consts/russianCities';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import {
  AutoCompleteVirt,
  DatePickerUi,
  Input,
  PhoneInput,
} from '@/shared/ui/Inputs';
import { ErrorMessage } from '@/shared/ui/Messages';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface CheckoutFormProps {
  className?: string;
}
export const CheckoutForm = memo((props: CheckoutFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const fullName = useAppSelector(getCheckoutFullName);
  const phone = useAppSelector(getCheckoutPhone);
  const city = useAppSelector(getCheckoutCity);
  const birthday = useAppSelector(getCheckoutBirthday);
  const dataProcessing = useAppSelector(getCheckoutDataProcessing);
  const selectStore = useAppSelector(getCheckoutStore);
  const checkoutLoading = useAppSelector(getCheckoutLoading);
  const error = useAppSelector(getCheckoutError);

  const items = useMemo(
    () =>
      cities.map((item, i) => ({
        id: `${item.name}-${item.population}-${i}`,
        title: item.name,
      })),
    [],
  );

  const onChangeName = useCallback(
    (value: string) => {
      dispatch(checkoutActions.setFullName(value));
    },
    [dispatch],
  );

  const onChangePhone = useCallback(
    (value: string) => {
      dispatch(checkoutActions.setPhone(value));
    },
    [dispatch],
  );

  const onSelectCity = useCallback(
    (value: string | null) => {
      dispatch(checkoutActions.setCity(value || ''));
    },
    [dispatch],
  );

  const onChangeBirthday = useCallback(
    (value: Dayjs | null) => {
      dispatch(checkoutActions.setBirthday(value));
    },
    [dispatch],
  );

  const onHandleDataProcessing = useCallback(
    (value: boolean) => {
      dispatch(checkoutActions.setDataProcessing(value));
    },
    [dispatch],
  );

  const onCheckout = useCallback(() => {
    dispatch(checkoutReq());
  }, [dispatch]);

  return (
    <VStack
      max
      className={classNames(cls.CheckoutForm, {}, [className])}
      gap={2.5}
    >
      <HStack max gap={1.25} className={cls.inputsWrapper}>
        <VStack max gap={1}>
          <Input
            required
            name='fullname'
            label='ФИО'
            value={fullName}
            // pattern='^[A-Za-z-а-яё\s+\D]{5,32}$/g'
            // errorMessage={error}
            onChange={onChangeName}
          />
          <PhoneInput
            name='Phone'
            label='Телефон'
            value={phone}
            placeholder='+7'
            onChange={onChangePhone}
          />
        </VStack>
        <VStack max gap={1}>
          <AutoCompleteVirt
            required
            name='locationsSignUp'
            items={items}
            label='Населенный пункт'
            value={city}
            placeholder='Выберите из списка'
            onChange={onSelectCity}
          />
          <DatePickerUi
            required
            name='singUp'
            label='Дата рождения'
            value={birthday}
            onChange={onChangeBirthday}
          />
        </VStack>
      </HStack>
      <StoresForm />
      <StoresMap />
      <VStack gap={1.5}>
        <Checkbox
          name='checkout'
          checked={dataProcessing}
          label={
            <>
              Я даю согласие на обработку{' '}
              <AppLink to='/'>персональных данных</AppLink>
            </>
          }
          onChange={onHandleDataProcessing}
        />
        <ButtonUi
          size='L'
          layOut='TextOnly'
          name='checkout'
          className={cls.btn}
          isLoading={checkoutLoading}
          disabled={!dataProcessing || !selectStore.length}
          onClick={onCheckout}
        >
          оформить заказ
        </ButtonUi>
        {!!error && <ErrorMessage text={error} type='P3' />}
      </VStack>
    </VStack>
  );
});
