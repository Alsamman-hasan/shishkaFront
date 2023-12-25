import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { memo, useMemo } from 'react';
import cls from './YMap.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Layout } from '@/shared/ui/Layout/Layout';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';
// import { Input } from "@/shared/ui/Inputs";

export interface YMapProps {
  className?: string;
}
export const YMap = memo((props: YMapProps) => {
  const { className } = props;
  // const matches = useMediaQuery('(max-width: 1040px)');
  // const matches768 = useMediaQuery('(max-width: 768px)');
  // const width = useMemo(() => {
  //   if (matches && !matches768) return '100%';

  //   if (matches768) return '100%';

  //   return '100%';
  // }, [matches, matches768]);

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
    <Layout className={classNames(cls.YMap, {}, [className])}>
      <HStack gap={1.25} align='start' className={cls.mapWrapper}>
        <VStack gap={0.75}>
          <Htag tage='h1'>НАШИ МАГАЗИНЫ</Htag>
          <PTag tage='P2' className={cls.desc}>
            Магазин Шишка находится в Нижнем Новгороде, а также в городах Бор и
            Киров, и др. В наших магазинах широкий ассортимент кальянов,
            табаков, девайсов, жидкостей и других сопутствующих товаров. А наши
            опытные и приветливые сотрудники всегда будут рады вам помочь с
            выбором.
          </PTag>
          <ButtonUi
            name='yandex'
            layOut='TextOnly'
            theme='secondary'
            className={cls.btn}
          >
            подробнее
          </ButtonUi>
          {/* <Input name="test" label="test" type="email" /> */}
        </VStack>
        <VStack max align='center' justify='center'>
          <YMaps>
            <VStack max align='center' justify='center'>
              <Map
                defaultState={{ center: [56.326797, 44.006516], zoom: 6 }}
                style={{
                  borderRadius: '8px',
                  height: '440px',
                  width: '100%',
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
            </VStack>
          </YMaps>
        </VStack>
      </HStack>
    </Layout>
  );
});
