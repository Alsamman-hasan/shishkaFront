import { memo, useState } from 'react';
import cls from './ListShops.module.scss';
import { cities } from '../../../model/selectors/citiesData';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack } from '@/shared/ui/Stack';

export interface ListShopsProps {
  className?: string;
}
export const ListShops = memo((props: ListShopsProps) => {
  const { className } = props;
  const [isShowMore, setShowMore] = useState(false);
  return (
    <HStack className={classNames(cls.ListShops, {}, [className])}>
      {cities.map(({ id, city, availability }) => (
        <div key={id} className={cls.containerList}>
          <div className={cls.left}>
            <div className={cls.city}>
              <PTag className={cls.P2} tage='P2'>
                {city}
              </PTag>
            </div>
            <div className={cls.availability}>
              <PTag className={cls.P3} tage='P3'>
                {availability}
              </PTag>
            </div>
            <p className={cls.divider} />
          </div>
          <div className={cls.right}>
            <div className={cls.city}>
              <PTag className={cls.P2} tage='P2'>
                {city}
              </PTag>
            </div>
            <div className={cls.availability}>
              <PTag className={cls.P3} tage='P3'>
                {availability}
              </PTag>
            </div>
            <p className={cls.divider} />
          </div>
        </div>
      ))}
      <div className={cls.btnShowMore} onClick={() => setShowMore(!isShowMore)}>
        <PTag tage='P2' className={cls.isShowMore}>
          {isShowMore ? 'Показать меньше' : 'Показать больше'}
        </PTag>
      </div>
    </HStack>
  );
});
