import { memo, useCallback } from 'react';
import {
  getPartnershipAboutMe,
  getPartnershipTitleOrganization,
} from '../../model/selectors/getPartnershipData/getPartnershipData';
import { partnershipActions } from '../../model/slice/PartnershipSlice';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { Input, Textarea } from '@/shared/ui/Inputs';
import { VStack } from '@/shared/ui/Stack';

export const RightForm = memo(() => {
  const dispatch = useAppDispatch();

  const titleCompany = useAppSelector(getPartnershipTitleOrganization);
  const aboutMe = useAppSelector(getPartnershipAboutMe);

  const onChangeTitleCompany = useCallback(
    (value: string) => {
      dispatch(partnershipActions.setTitleOrganization(value));
    },
    [dispatch],
  );

  const onChangeAboutMe = useCallback(
    (value: string) => {
      dispatch(partnershipActions.setAboutMe(value));
    },
    [dispatch],
  );
  return (
    <VStack gap={1}>
      <Input
        name='Название организации'
        label='Название организации'
        value={titleCompany}
        onChange={onChangeTitleCompany}
      />
      <Textarea
        name='Коротко о себе'
        label='Коротко о себе'
        value={aboutMe}
        onChange={onChangeAboutMe}
      />
    </VStack>
  );
});
