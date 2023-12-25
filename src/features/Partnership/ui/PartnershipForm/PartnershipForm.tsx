import { memo, useCallback } from 'react';
import cls from './PartnershipForm.module.scss';
import {
  getInfo,
  getPartnershipError,
  getPartnershipIsLoading,
} from '../../model/selectors/getPartnershipData/getPartnershipData';
import { partnershipReq } from '../../model/service/PartnershipReq/partnershipReq';
import { partnershipReducer } from '../../model/slice/PartnershipSlice';
import { LeftForm } from '../LeftForm/LeftForm';
import { RightForm } from '../RightForm/RightForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { ErrorMessage } from '@/shared/ui/Messages';
import { VStack } from '@/shared/ui/Stack';

export interface PartnershipFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  Partnership: partnershipReducer,
};

export const PartnershipForm = memo((props: PartnershipFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const isloading = useAppSelector(getPartnershipIsLoading);
  const error = useAppSelector(getPartnershipError);
  const info = useAppSelector(getInfo);

  const onSend = useCallback(async () => {
    await dispatch(partnershipReq());
  }, [dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <VStack
        align='center'
        justify='center'
        className={classNames(cls.PartnershipForm, {}, [className])}
      >
        <Htag tage='h2'>Оставить заявку</Htag>
        <div className={cls.inputs}>
          <div className={cls.left}>
            <LeftForm />
          </div>
          <div className={cls.right}>
            <RightForm />
          </div>
        </div>
        <VStack align='center'>
          <ButtonUi
            layOut='TextOnly'
            theme='primary'
            name='Partnership'
            className={cls.btn}
            size='M'
            disabled={isloading}
            isLoading={isloading}
            onClick={onSend}
          >
            Отправить
          </ButtonUi>
        </VStack>
        {!info.isDisplay && !!error && <ErrorMessage text={error} type='P3' />}
        {!!info.isDisplay && info.err.length > 0 && (
          <ErrorMessage
            text={`Поля ${info.err.join(',')} обязательны`}
            type='P3'
          />
        )}
      </VStack>
    </DynamicModuleLoader>
  );
});
