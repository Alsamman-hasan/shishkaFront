import { memo, useState } from 'react';
import cls from './StoreItem.module.scss';
import { ShopsStores } from '../../model/types/types';
import { StoresMap } from '../StoresMap/StoresMap';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface StoreItemProps {
  Item: ShopsStores;
}
export const StoreItem = memo((props: StoreItemProps) => {
  const { Item } = props;
  const { geometry, id, one, phone, street, three, timing, title, two } = Item;
  const [show, setShow] = useState(false);
  return (
    <VStack max gap={1} className={classNames(cls.StoreItem, {}, [])}>
      <div key={id} className={cls.containerDesc}>
        <div className={cls.description}>
          <VStack className={cls.title} gap={0.5}>
            <Htag tage='h2'>{title}</Htag>
            <PTag tage='P2'>{street}</PTag>
          </VStack>
          <VStack gap={0.25} className={cls.timing}>
            <PTag className={cls.P3} tage='P3'>
              График работы:
            </PTag>
            <PTag tage='P2'>{timing}</PTag>
          </VStack>
          <VStack gap={0.25} className={cls.phone}>
            <PTag className={cls.P3} tage='P3'>
              Телефон:
            </PTag>
            <PTag tage='P2'>{phone}</PTag>
          </VStack>
          <div className={cls.isOpenMap} onClick={() => setShow(!show)}>
            {show ? 'Скрыть карту' : 'Смотреть на карте'}
          </div>
        </div>
        <div className={cls.shopsImg}>
          <AppImage className={cls.img} src={one} />
          <AppImage className={cls.img} src={two} />
          <AppImage className={cls.img} src={three} />
        </div>
      </div>
      {!!show && <StoresMap geometry={geometry} />}
      <p className={cls.divider} />
    </VStack>
  );
});
