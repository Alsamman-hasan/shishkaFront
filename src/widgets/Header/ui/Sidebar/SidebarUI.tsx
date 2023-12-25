import React, { memo } from 'react';
import cls from './Sidebar.module.scss';
import { firstHeaderItems } from '../../model/selector/getFirstHeaderItems/getFirstHeaderItems';
import { SearchInput } from '@/features/Search';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { Overlay } from '@/shared/ui/Overlay';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Portal } from '@/shared/ui/Portal/Portal';
import { VStack } from '@/shared/ui/Stack';

export interface SidebarProps {
  className?: string;
  open: boolean;
  lazy?: boolean;
  isClosing: boolean;
  close: () => void;
  isMounted: boolean;
}
export const SidebarUI = memo((props: SidebarProps) => {
  const { className, open, lazy, close, isClosing, isMounted } = props;
  const mods: Mods = {
    [cls.opened]: open,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.SidebarUI, mods, [className])}>
        <Overlay onClick={close} />
        <VStack
          max
          justify='between'
          className={classNames(cls.content, {}, [className])}
        >
          <VStack max gap={1.5} className={cls.menu}>
            <SearchInput />
            {firstHeaderItems.map(item => (
              <AppLink key={item.title} to={item.link} onClick={close}>
                <PTag tage='P2'>{item.title}</PTag>
              </AppLink>
            ))}
          </VStack>
          <PTag tage='P3'>Нижний Новгород</PTag>
        </VStack>
      </div>
    </Portal>
  );
});
