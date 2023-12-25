import { memo, useEffect, useState } from 'react';
import cls from './ProductFilterSize.module.scss';
import { CheckBoxesType } from '../../model/types/filterTypes';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { CollapseUi } from '@/shared/ui/CollapseUi/CollapseUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProductFilterSizeProps {
  className?: string;
  onChooseSize: (size: CheckBoxesType) => void;
  sizeList?: CheckBoxesType[];
  title: string;
}

export const ProductFilterSize = memo((props: ProductFilterSizeProps) => {
  const { className, onChooseSize, sizeList, title } = props;
  const [open, setOpen] = useState(false);
  const [sizes, setSizes] = useState(sizeList);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setSizes(sizeList);
  }, [sizeList]);

  return (
    <VStack
      max
      gap={1}
      className={classNames(cls.CatalogProdFilterSize, {}, [className])}
    >
      <HStack
        max
        justify='between'
        className={cls.header}
        onClick={handleClick}
      >
        <Htag tage='h4'> {title}</Htag>
        {open ? <ArrowLineUp /> : <ArrowLineDown />}
      </HStack>
      <CollapseUi
        open={open}
        className={classNames('', { [cls.collapse]: open })}
      >
        <VStack align='end' gap={1.25}>
          <VStack max className={cls.checkboxWrapper}>
            {!!sizes &&
              sizes.map((item, index) => (
                <HStack key={index} max>
                  <Checkbox
                    name={item.name}
                    label={item.name}
                    checked={item.choose}
                    onChange={() => onChooseSize(item)}
                  />
                </HStack>
              ))}
          </VStack>
        </VStack>
      </CollapseUi>
    </VStack>
  );
});
