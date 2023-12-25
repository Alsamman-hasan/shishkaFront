import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './ProductDetailsError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface ProductDetailsErrorProps {
  className?: string;
  error: string;
}
export const ProductDetailsError = memo((props: ProductDetailsErrorProps) => {
  const { className, error } = props;
  const navigate = useNavigate();

  return (
    <div className={classNames(cls.ProductDetailsError, {}, [className])}>
      <VStack gap={1}>
        <PTag tage='P1'> {error} </PTag>
        <ButtonUi
          className={cls.btn}
          layOut='TextOnly'
          name='test'
          size='M'
          onClick={() => navigate(-1)}
        >
          Вернуться назад
        </ButtonUi>
      </VStack>
    </div>
  );
});
