import { useSnackbar, VariantType } from 'notistack';
import { memo, useCallback, useState } from 'react';
import {
  getProfilePasswords,
  getProfilePasswordsError,
  getPasswordChanged,
  getPasswordIsLoading,
} from '../../../../model/selectors/getPasswords/getPasswords';
import { updatePasswordReq } from '../../../../model/service/updatePassword/updatePassword';
import { profileActions } from '../../../../model/slice/profileSlice';
import cls from '../../ProfileDetails.module.scss';
import { ForgotPasswordModal } from '@/entities/ForgotPassword';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Input } from '@/shared/ui/Inputs';
import { ErrorMessage } from '@/shared/ui/Messages';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack, HStack } from '@/shared/ui/Stack';

export const UpdatePassword = memo(() => {
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState<boolean>(false);
  const passwordsValue = useAppSelector(getProfilePasswords);
  const error = useAppSelector(getProfilePasswordsError);
  const isasswordChanged = useAppSelector(getPasswordChanged);
  const isLoading = useAppSelector(getPasswordIsLoading);

  const onOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onChangeOldPassword = useCallback(
    (value: string) => {
      dispatch(profileActions.updatePassword({ oldPassword: value || '' }));
    },
    [dispatch],
  );

  const statuses = useCallback(
    (variant: VariantType) => {
      if (variant === 'success')
        enqueueSnackbar('Пароль успешно был обновлен', { variant });

      enqueueSnackbar(' что то пошло не так ', { variant });
    },
    [enqueueSnackbar],
  );

  const onChangeNewPassword = useCallback(
    (value: string) => {
      dispatch(profileActions.updatePassword({ newPassword: value || '' }));
    },
    [dispatch],
  );

  const onUpdatePassword = async () => {
    const success = await dispatch(updatePasswordReq());
    if (success.meta.requestStatus === 'fulfilled') statuses('success');
  };

  const onClear = () => {
    dispatch(profileActions.setClearUpdatePassword());
  };
  return (
    <VStack max gap={2.25}>
      <VStack max gap={1.25}>
        <Htag tage='h3'>Изменить пароль</Htag>
        <HStack max gap={2.25} className={cls.formWrapper}>
          <Input
            required
            name='ocurrentPassword'
            label='Текущий пароль'
            pattern='^[A-Za-z0-9]{8,32}$'
            errorMessage='Пароль должен содержать не менее 8 символов'
            value={passwordsValue?.oldPassword || ''}
            type='password'
            onChange={onChangeOldPassword}
          />
          <Input
            required
            name='newPassword'
            label='Новый пароль'
            type='password'
            pattern='^[A-Za-z0-9]{8,32}$'
            errorMessage='Пароль должен содержать не менее 8 символов'
            value={passwordsValue?.newPassword || ''}
            onChange={onChangeNewPassword}
          />
        </HStack>
        {!!error && <ErrorMessage text={error} type='P3' />}
        <HStack justify='start' onClick={onOpenModal}>
          <PTag tage='P2' className={cls.ForgotPassword}>
            Забыли пароль?
          </PTag>
        </HStack>
        {!!open && <ForgotPasswordModal open={open} onClose={onClose} />}
      </VStack>
      <HStack max gap={1} className={cls.btnWrapper}>
        <ButtonUi
          layOut='TextOnly'
          theme='primary'
          className={cls.btn}
          disabled={!isasswordChanged}
          isLoading={isLoading}
          name='sakhranit'
          onClick={onUpdatePassword}
        >
          СОХРАНИТЬ
        </ButtonUi>
        <ButtonUi
          className={cls.btn}
          layOut='TextOnly'
          theme='secondary'
          name='cancel'
          disabled={!isasswordChanged}
          onClick={onClear}
        >
          ОТМЕНА
        </ButtonUi>
      </HStack>
    </VStack>
  );
});
