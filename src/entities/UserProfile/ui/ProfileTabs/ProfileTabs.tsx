import { memo } from 'react';
import cls from './ProfileTabs.module.scss';
import {
  getProfileData,
  getProfileIsLoading,
} from '../../model/selectors/getProfileData/getProfileData';
import { ActiveTab } from '../../model/types/Profile';
import ProfileIcon from '@/shared/assets/icons/UserProfile/ProfileDetails.svg';
import BasketIcon from '@/shared/assets/icons/UserProfile/basket.svg';
import RightArrowIcon from '@/shared/assets/icons/UserProfile/rightArrow.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProfileTabsProps {
  className?: string;
  activeTab: ActiveTab;
  onChangeTab: (tav: ActiveTab) => void;
  onOpenModal: () => void;
}
export const ProfileTabs = memo((props: ProfileTabsProps) => {
  const { className, activeTab, onChangeTab, onOpenModal } = props;
  const isLoading = useAppSelector(getProfileIsLoading);
  const data = useAppSelector(getProfileData);

  return (
    <VStack
      max
      gap={2}
      className={classNames(cls.ProfileTabs, {}, [className])}
    >
      {isLoading ? (
        <VStack className={cls.loading}>
          <Skeleton width='100%' height='100%' />
        </VStack>
      ) : (
        <VStack className={cls.userInfo}>
          <Htag tage='h4'>{data?.name}</Htag>
          <HStack>
            <PTag tage='P3'>Баланс карты:</PTag>
            <Htag tage='h4'>1 394 ₽</Htag>
          </HStack>
        </VStack>
      )}
      <VStack max gap={0.75} className={cls.btnTabsWrapper}>
        <ButtonUi
          icon={<ProfileIcon />}
          layOut='IconBefore'
          theme='secondary'
          size='L'
          name='personal-details'
          className={classNames(cls.btn, {
            [cls.btnActive]: activeTab === 'Personal',
          })}
          onClick={() => onChangeTab('Personal')}
        >
          Личные данные
        </ButtonUi>
        <ButtonUi
          name='my orders'
          icon={<BasketIcon />}
          layOut='IconBefore'
          size='L'
          theme='secondary'
          className={classNames(cls.btn, {
            [cls.btnActive]: activeTab === 'Order',
          })}
          onClick={() => onChangeTab('Order')}
        >
          Мои заказы
        </ButtonUi>
        <ButtonUi
          name='log'
          icon={<RightArrowIcon />}
          size='L'
          layOut='IconBefore'
          theme='secondary'
          className={classNames(cls.btn)}
          onClick={onOpenModal}
        >
          Выйти
        </ButtonUi>
      </VStack>
    </VStack>
  );
});
