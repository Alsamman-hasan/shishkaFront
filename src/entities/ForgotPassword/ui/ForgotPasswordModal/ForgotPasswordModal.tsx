import { memo } from 'react';
import cls from './ForgotPasswordModal.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Input } from '@/shared/ui/Inputs';
import { CustomModal } from '@/shared/ui/Modal/ModalUi';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface ForgotPasswordModalProps {
  className?: string;
  open: boolean;
  onClose: () => void;
}
export const ForgotPasswordModal = memo((props: ForgotPasswordModalProps) => {
  const { className, onClose, open } = props;
  return (
    <CustomModal isOpen={open} onClose={onClose}>
      <div className={classNames(cls.ForgotPasswordModal, {}, [className])}>
        <VStack max gap={1.25}>
          <VStack max gap={0.5}>
            <Htag tage='h3'>Восстановление пароля</Htag>
            <PTag tage='P2'>
              Укажите ваш e-mail, который вы использовали для регистрации
            </PTag>
          </VStack>
          <VStack max gap={1.5}>
            <Input
              name='E-mail-modal'
              label='E-mail'
              type='email'
              // onChange={onChangeEmail}
              errorMessage='Please enter falid email address'
              // value={email}
            />
            <ButtonUi
              layOut='TextOnly'
              theme='primary'
              className={cls.btn}
              name='ForgotPasswor'
              size='L'
              // disabled={dis}
              // onClick={onSignIn}
            >
              войти
            </ButtonUi>
          </VStack>
        </VStack>
      </div>
    </CustomModal>
  );
});
