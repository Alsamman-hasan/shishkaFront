import { YMaps, Map } from '@pbe/react-yandex-maps';
import { memo, useState } from 'react';
import cls from './StoresMap.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface StoresMapProps {
  className?: string;
}
export const StoresMap = memo((props: StoresMapProps) => {
  const { className } = props;
  const [isOpenMap, setOpenMap] = useState(false);
  return (
    <div className={classNames(cls.Map, {}, [className])}>
      <VStack max gap={1}>
        <div onClick={() => setOpenMap(!isOpenMap)}>
          <PTag tage='P1' className={cls.isOpenMap}>
            {isOpenMap ? 'Скрыть карту' : 'Смотреть на карте'}
          </PTag>
        </div>
        {!!isOpenMap && (
          <YMaps>
            <Map
              defaultState={{ center: [56.326797, 44.006516], zoom: 6 }}
              style={{
                borderRadius: '8px',
                height: '440px',
                width: '100%',
              }}
            />
          </YMaps>
        )}
      </VStack>
    </div>
  );
});
