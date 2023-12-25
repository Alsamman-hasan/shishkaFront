import { memo, useState } from 'react';
import cls from './AvailableTab.module.scss';
import { ListShops } from './ListShops/ListShops';
import { MapShops } from './MapShops/MapShops';
import LocationIcon from '@/shared/assets/icons/productCardIcons/Location.svg';
import ListIcon from '@/shared/assets/icons/productCardIcons/list.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface AvailableTabProps {
  className?: string;
}
export const AvailableTab = memo((props: AvailableTabProps) => {
  const { className } = props;
  const [view, setView] = useState<'list' | 'map'>('list');
  return (
    <VStack
      max
      className={classNames(cls.AvailableTab, {}, [className])}
      gap={1.25}
    >
      <HStack max justify='between'>
        <Htag tage='h3'>Наличие</Htag>
        <HStack gap={1.5}>
          <HStack
            className={classNames(cls.tab, { [cls.active]: view === 'list' })}
            onClick={() => setView('list')}
          >
            <ListIcon />
            <PTag tage='P3'>Списком</PTag>
          </HStack>
          <HStack
            className={classNames(cls.tab, { [cls.active]: view === 'map' })}
            onClick={() => setView('map')}
          >
            <LocationIcon />
            <PTag tage='P3'>На карте</PTag>
          </HStack>
        </HStack>
      </HStack>
      {view === 'list' ? <ListShops /> : <MapShops />}
    </VStack>
  );
});
