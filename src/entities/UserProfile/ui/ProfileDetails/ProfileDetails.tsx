import { memo } from 'react';
import cls from './ProfileDetails.module.scss';
import { LeftForm, RightForm } from './ui';
import { ActionButtons } from './ui/ActionButtons/ActionButtons';
import { UpdatePassword } from './ui/UpdatePassword/UpdatePassword';
import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
} from '../../model/selectors/getProfileData/getProfileData';
import { fetchProfileData } from '../../model/service/fetchProfileData/fetchProfileData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { ErrorMessage } from '@/shared/ui/Messages';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProfileDetailsProps {
  className?: string;
}

export const ProfileDetails = memo((props: ProfileDetailsProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);
  const data = useAppSelector(getProfileData);

  useEffectOnce(() => {
    if (!data) dispatch(fetchProfileData());
  });

  if (isLoading)
    return (
      <VStack
        max
        align='center'
        justify='center'
        className={classNames(cls.ProfileDetails, {}, [cls.loading])}
        gap={3.75}
      >
        <Loader />
      </VStack>
    );

  if (error)
    return (
      <VStack
        max
        align='center'
        justify='center'
        className={classNames(cls.ProfileDetails, {}, [cls.loading])}
        gap={3.75}
      >
        <ErrorMessage text={error} type='P3' />
      </VStack>
    );

  return (
    <VStack
      className={classNames(cls.ProfileDetails, {}, [className])}
      gap={3.75}
    >
      <VStack max gap={1.25}>
        <Htag tage='h3'>Личные и контактные данные</Htag>
        <VStack max gap={2.25}>
          <HStack max gap={1.375} className={cls.formWrapper}>
            <LeftForm />
            <RightForm />
          </HStack>
          <ActionButtons className={cls.btnWrapper} classNameBtn={cls.btn} />
        </VStack>
      </VStack>
      <UpdatePassword />
    </VStack>
  );
});
