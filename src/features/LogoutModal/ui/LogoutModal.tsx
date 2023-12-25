import { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './LogoutModal.module.scss';
import { useLogoutApi } from '../api/logoutRTK';
import { authDataActions } from '@/entities/authData';
import { getRouteMain } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { CustomModal } from '@/shared/ui/Modal/ModalUi';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface LogoutModalProps {
  className?: string;
  open: boolean;
  onClose: () => void;
}
export const LogoutModal = memo((props: LogoutModalProps) => {
  const { className, onClose, open } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [logout, { isLoading, isSuccess }] = useLogoutApi();

  const onLogOut = useCallback(async () => {
    await logout({ method: 'signOut' });
  }, [logout]);

  useEffect(() => {
    if (isSuccess) {
      onClose();
      dispatch(authDataActions.setIsAuth(false));
      localStorage.clear();
      navigate(getRouteMain());
    }
  }, [dispatch, isSuccess, navigate, onClose]);

  return (
    <CustomModal lazy isOpen={open} onClose={onClose}>
      <div className={classNames(cls.logoutModal, {}, [className])}>
        <VStack max gap={1.25}>
          <VStack max gap={0.5}>
            <Htag tage='h3' className={cls.title}>
              Вы уверены, что хотите выйти из личного кабинета?
            </Htag>
            <PTag tage='P2' className={cls.subTitle}>
              Вы можете воспользоваться иконкой личного кабинета в шапке сайта,
              чтобы заново зайти в свою учетную запись.
            </PTag>
          </VStack>
          <VStack max gap={1.5}>
            <HStack max gap={1.25} className={cls.btnWrapper}>
              <ButtonUi
                name='sing'
                layOut='TextOnly'
                theme='primary'
                className={cls.btn}
                size='L'
                isLoading={isLoading}
                onClick={onLogOut}
              >
                выйти
              </ButtonUi>
              <ButtonUi
                name='cans'
                layOut='TextOnly'
                theme='secondary'
                className={cls.btn}
                size='L'
                onClick={onClose}
              >
                отмена
              </ButtonUi>
            </HStack>
          </VStack>
        </VStack>
      </div>
    </CustomModal>
  );
});
