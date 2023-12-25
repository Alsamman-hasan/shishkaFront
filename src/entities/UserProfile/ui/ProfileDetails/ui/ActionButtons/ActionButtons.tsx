import { enqueueSnackbar, VariantType } from 'notistack';
import { memo, useCallback } from 'react';
import {
  getProfileIsUpdateLoading,
  getProfileReadonly,
} from '../../../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../../../model/service/updateProfileData/updateProfileData';
import { profileActions } from '../../../../model/slice/profileSlice';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { HStack } from '@/shared/ui/Stack';

export interface ActionButtonsProps {
  className: string;
  classNameBtn: string;
}
export const ActionButtons = memo((props: ActionButtonsProps) => {
  const { className, classNameBtn } = props;
  const dispatch = useAppDispatch();
  const readonly = useAppSelector(getProfileReadonly);
  const isLoading = useAppSelector(getProfileIsUpdateLoading);

  const statuses = useCallback((message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  }, []);

  const onUpdateData = useCallback(async () => {
    const data = await dispatch(updateProfileData());
    if (data.meta.requestStatus === 'fulfilled')
      statuses('Пароль успешно был обновлен', 'success');
    else if (data.meta.requestStatus === 'rejected')
      statuses('Что то пошло не так', 'error');
  }, [dispatch, statuses]);

  const onCancelUpdate = () => {
    dispatch(profileActions.setClearUpdate());
  };
  return (
    <HStack max gap={1} className={className}>
      <ButtonUi
        layOut='TextOnly'
        theme='primary'
        className={classNameBtn}
        disabled={!readonly}
        isLoading={isLoading}
        name='save'
        onClick={onUpdateData}
      >
        СОХРАНИТЬ
      </ButtonUi>
      <ButtonUi
        className={classNameBtn}
        layOut='TextOnly'
        theme='secondary'
        disabled={!readonly}
        name='otmena'
        onClick={onCancelUpdate}
      >
        ОТМЕНА
      </ButtonUi>
    </HStack>
  );
});
