import { useMemo, useState } from 'react';
import cls from './CustomTabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/types/TypedMemo';

interface TabsTypes<T> {
  title: T;
  id: number;
}
export interface CustomTabsProps<T> {
  className?: string;
  tabs: TabsTypes<T>[];
  onChooseTab?: (tab: TabsTypes<T>) => void;
  defaultTab: TabsTypes<T>;
  selectedTab?: TabsTypes<T>;
  itemClass?: string;
}

const CustomTabsUI = <T extends string>(props: CustomTabsProps<T>) => {
  const { className, onChooseTab, tabs, defaultTab, itemClass, selectedTab } =
    props;
  const [localTab, setLocalTab] = useState<TabsTypes<T>>(defaultTab);

  const onSelectTab = (t: TabsTypes<T>) => {
    setLocalTab(t);
    onChooseTab?.(t);
  };

  const select = useMemo(() => {
    if (!selectedTab) return localTab.title;
    return selectedTab.title;
  }, [localTab, selectedTab]);
  return (
    <div className={classNames(cls.CustomTabs, {}, [className])}>
      {!!tabs.length &&
        tabs.map(tab => (
          <div
            className={classNames(
              cls.btn,
              {
                [cls.active]: tab.title === select,
              },
              [itemClass],
            )}
            onClick={() => onSelectTab(tab)}
          >
            {tab.title}
          </div>
        ))}
    </div>
  );
};
export const CustomTabs = typedMemo(CustomTabsUI);
