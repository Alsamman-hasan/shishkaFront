import { memo, useCallback, useState } from 'react';
import { OrderTab } from './OrderTab';
import cls from './ProductDetailsAvailability.module.scss';
import { AvailableTab } from '../AvailableTab/AvailableTab';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CustomTabs } from '@/shared/ui/CustomTabs/CustomTabs';
import { VStack } from '@/shared/ui/Stack';

type Tabs = 'Наличие' | 'Доставка';
export interface ProductDetailsAvailabilityProps {
  className?: string;
}
interface TabsItems {
  id: number;
  title: Tabs;
}
const tabs: TabsItems[] = [
  { id: 1, title: 'Наличие' },
  { id: 2, title: 'Доставка' },
];
export const ProductDetailsAvailability = memo(
  (props: ProductDetailsAvailabilityProps) => {
    const { className } = props;
    const [tab, setTab] = useState<TabsItems>({ id: 1, title: 'Наличие' });
    const onChangeTab = useCallback((t: TabsItems) => {
      setTab(t);
    }, []);

    return (
      <VStack
        max
        justify='start'
        gap={2}
        className={classNames(cls.ProductDetailsAvailability, {}, [className])}
      >
        <CustomTabs
          tabs={tabs}
          defaultTab={tabs[0]}
          itemClass={cls.tabs}
          className={cls.tabs}
          onChooseTab={onChangeTab}
        />
        {tab.title === 'Наличие' ? <AvailableTab /> : <OrderTab />}
      </VStack>
    );
  },
);
