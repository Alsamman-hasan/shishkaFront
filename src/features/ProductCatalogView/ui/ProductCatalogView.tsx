import { FC, memo, SVGProps, useCallback } from 'react';
import cls from './ProductCatalogView.module.scss';
import GroupView from '@/shared/assets/icons/catalogProduct/GroupView.svg';
import ListView from '@/shared/assets/icons/catalogProduct/ListView.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { HStack } from '@/shared/ui/Stack';

export interface ProductCatalogViewProps {
  className?: string;
  view: ProductView;
  onChangeView: (view: ProductView) => void;
}

interface ViewType {
  view: ProductView;
  icon: FC<SVGProps<SVGSVGElement>>;
}
const viewtypes: ViewType[] = [
  {
    icon: GroupView,
    view: 'Group',
  },
  {
    icon: ListView,
    view: 'List',
  },
];

export const ProductCatalogView = memo((props: ProductCatalogViewProps) => {
  const { className, onChangeView, view } = props;
  const clickHandle = useCallback(
    (views: ProductView) => () => {
      onChangeView(views);
    },
    [onChangeView],
  );
  return (
    <HStack
      className={classNames(cls.ProductCatalogView, {}, [className])}
      gap={0.25}
      align='start'
    >
      {viewtypes.map(viewType => (
        <ButtonUi
          key={viewType.view}
          layOut='IconOnly'
          name={viewType.view}
          theme='Quaternary'
          icon={<viewType.icon />}
          className={classNames(cls.btn, {
            [cls.active]: viewType.view === view,
          })}
          onClick={clickHandle(viewType.view)}
        >
          d
        </ButtonUi>
      ))}
    </HStack>
  );
});
