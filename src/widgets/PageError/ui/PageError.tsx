import cls from './PageError.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';

export interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const realodPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p className={classNames(cls.info)}>произошла непредвиденная ошибка</p>
      <ButtonUi
        size='L'
        name='reload'
        layOut='TextOnly'
        theme='primary'
        className={cls.btn}
        onClick={realodPage}
      >
        Обновить страницу
      </ButtonUi>
    </div>
  );
};
