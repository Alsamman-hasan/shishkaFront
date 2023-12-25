import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { memo, useMemo } from 'react';
import cls from './MapShops.module.scss';
import { cities } from '../../../model/selectors/citiesData';
import { classNames } from '@/shared/lib/classNames/classNames';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack } from '@/shared/ui/Stack';

export interface MapShopsProps {
  className?: string;
}
export const MapShops = memo((props: MapShopsProps) => {
  const { className } = props;
  const matches = useMediaQuery('(max-width: 1040px)');
  const matches768 = useMediaQuery('(max-width: 768px)');
  const matches536 = useMediaQuery('(max-width: 536px)');
  const width = useMemo(() => {
    if (matches && !matches536 && !matches768) return '100%';

    if (matches536) return '300px';

    if (matches768) return '500px';

    return '100%';
  }, [matches, matches536, matches768]);

  const geometry = [
    { geometry: [56.230757, 43.946554] },
    { geometry: [56.326649, 44.005564] },
    { geometry: [56.19269, 43.858582] },
    { geometry: [56.313663, 44.028337] },
    { geometry: [56.326797, 44.006516] },
    { geometry: [56.358811, 44.05145] },
    { geometry: [56.226024, 43.86284] },
  ];
  return (
    <HStack className={classNames(cls.MapShops, {}, [className])}>
      <div className={cls.containerList}>
        <div className={cls.left}>
          {cities.map(({ id, city, availability }) => (
            <div>
              <div key={id} className={cls.city}>
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
          ))}
        </div>
        <div className={cls.right}>
          <YMaps>
            <Map
              defaultState={{ center: [56.326797, 44.006516], zoom: 6 }}
              style={{
                borderRadius: '16px',
                height: '440px',
                width,
              }}
            >
              {geometry.map(item => (
                <Placemark
                  iconLayout='default#image'
                  iconImageHref='@/shared/assets/icons/Location.svg'
                  geometry={item.geometry}
                  options={{
                    iconColor: 'green',
                  }}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </div>
    </HStack>
  );
});
