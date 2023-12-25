import { memo, useCallback, useState } from 'react';
import cls from './UserProfile.module.scss';
import { UserOrders } from '../UserOrders/UserOrders';
import {
  ActiveTab,
  ProfileDetails,
  ProfileTabs,
  getProfileError,
} from '@/entities/UserProfile';
import { LogoutModal } from '@/features/LogoutModal';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { Htag } from '@/shared/ui/Htage/Htage';
import { ErrorMessage } from '@/shared/ui/Messages';
import { VStack } from '@/shared/ui/Stack';

export interface UserProfileProps {
  className?: string;
}
export const UserProfile = memo((props: UserProfileProps) => {
  const { className } = props;
  const error = useAppSelector(getProfileError);
  const [activeTab, setActiveTab] = useState<ActiveTab>('Personal');
  const [open, setOpen] = useState(false);
  const onOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onChangeTab = useCallback((tab: ActiveTab) => {
    setActiveTab(tab);
  }, []);

  return (
    <VStack max gap={1.5}>
      {!!error && <ErrorMessage text={error} type='P3' />}
      <Htag tage='h1'>ЛИЧНЫЙ КАБИНЕТ</Htag>
      <div className={classNames(cls.UserProfile, {}, [className])}>
        <ProfileTabs
          activeTab={activeTab}
          onChangeTab={onChangeTab}
          onOpenModal={onOpenModal}
        />
        {activeTab === 'Personal' && <ProfileDetails />}
        {activeTab === 'Order' && <UserOrders />}
      </div>
      {!!open && <LogoutModal open={open} onClose={onClose} />}
    </VStack>
  );
});
