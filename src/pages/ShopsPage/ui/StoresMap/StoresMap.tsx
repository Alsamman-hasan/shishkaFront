import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { memo } from 'react';
import cls from './StoresMap.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export interface StoresMapProps {
  className?: string;
  geometry: number[];
}
export const StoresMap = memo((props: StoresMapProps) => {
  const { className, geometry } = props;
  return (
    <div className={classNames(cls.Map, {}, [className])}>
      <YMaps>
        <Map
          defaultState={{ center: geometry, zoom: 14 }}
          style={{
            borderRadius: '8px',
            height: '440px',
            width: '100%',
          }}
        >
          <Placemark
            iconLayout='default#image'
            iconImageHref='@/shared/assets/icons/Location.svg'
            geometry={geometry}
            options={{
              iconColor: 'green',
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
});
