import { memo, useState } from 'react';
import cls from './ProductFilterPrice.module.scss';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import Dec from '@/shared/assets/icons/productCardIcons/dec.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CollapseUi } from '@/shared/ui/CollapseUi/CollapseUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Input } from '@/shared/ui/Inputs';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProductFilterPriceProps {
  className?: string;
  onChangeFromPrice: (value: string) => void;
  onChangeToPrice: (value: string) => void;
  fromValue: string;
  toValue: string;
}
export const ProductFilterPrice = memo((props: ProductFilterPriceProps) => {
  const { className, onChangeFromPrice, onChangeToPrice, fromValue, toValue } =
    props;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <VStack
      max
      gap={1}
      className={classNames(cls.CatalogProdFilterPrice, {}, [className])}
    >
      <HStack
        max
        justify='between'
        className={cls.header}
        onClick={handleClick}
      >
        <Htag tage='h4'> Цена</Htag>
        {open ? <ArrowLineUp /> : <ArrowLineDown />}
      </HStack>
      <CollapseUi
        open={open}
        className={classNames('', { [cls.collapse]: open })}
      >
        <HStack align='end'>
          <Input
            name='from'
            label='от:'
            className={cls.input}
            type='number'
            value={fromValue}
            placeholder='400₽'
            onChange={onChangeFromPrice}
          />
          <VStack className={cls.dec} align='center' justify='center'>
            <Dec />
          </VStack>
          <Input
            name='to'
            label='До:'
            type='number'
            value={toValue}
            className={cls.input}
            placeholder='400₽'
            onChange={onChangeToPrice}
          />
        </HStack>
      </CollapseUi>
    </VStack>
  );
});
