import { memo } from 'react';
import cls from './SecoundFooter.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PTag } from '@/shared/ui/Paragraph/P';

export interface SecoundFooterProps {
  className?: string;
}

export const SecoundFooter = memo((props: SecoundFooterProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.SecoundFooter, {}, [className])}>
      <div>
        <PTag tage='desc' className={cls.componyName}>
          ©{new Date().getFullYear()} ИП Белкин Юрий Александрович
        </PTag>
      </div>
      <div>
        <PTag tage='desc' className={cls.componyName}>
          Политика конфиденциальности
        </PTag>
      </div>
    </div>
  );
});
