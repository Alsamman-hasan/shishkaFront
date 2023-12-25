import { memo, useEffect, useState } from 'react';
import cls from './ProductFilterBrand.module.scss';
import { CheckBoxesType } from '../../model/types/filterTypes';
import ArrowLineDown from '@/shared/assets/icons/ArrowLineDown.svg';
import ArrowLineUp from '@/shared/assets/icons/ArrowLineUp.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { CollapseUi } from '@/shared/ui/CollapseUi/CollapseUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Input } from '@/shared/ui/Inputs';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface ProductFilterBrandProps {
  className?: string;
  brands?: CheckBoxesType[];
  chooseHandler: (brand: CheckBoxesType) => void;
}

export const ProductFilterBrand = memo((props: ProductFilterBrandProps) => {
  const { className, brands, chooseHandler } = props;
  const [open, setOpen] = useState(false);
  const [filteredList, setFilteredList] = useState(brands);
  const [t, setT] = useState(brands);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setFilteredList(brands);
    setT(brands);
  }, [brands]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSearch = (value: string) => {
    const query = value;
    setSearchQuery(query);
    if (t?.length) {
      const searchList = t.filter(
        item => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
      );
      setFilteredList(searchList);
    }
  };

  return (
    <VStack
      max
      gap={1}
      className={classNames(cls.CatalogProdFilterBrand, {}, [className])}
    >
      <HStack
        max
        justify='between'
        className={cls.header}
        onClick={handleClick}
      >
        <Htag tage='h4'> Бренд</Htag>
        {open ? <ArrowLineUp /> : <ArrowLineDown />}
      </HStack>
      <CollapseUi
        open={open}
        className={classNames('', { [cls.collapse]: open })}
      >
        <VStack align='end' gap={1.25}>
          <Input
            name='brandFilter'
            className={cls.input}
            placeholder='Введите название'
            value={searchQuery}
            onChange={handleSearch}
          />
          <VStack max className={cls.checkboxWrapper}>
            {!!filteredList &&
              filteredList.map((item, index) => (
                <HStack key={index} max>
                  <Checkbox
                    name={item.name}
                    label={item.name}
                    checked={item.choose}
                    onChange={() => chooseHandler(item)}
                  />
                </HStack>
              ))}
          </VStack>
        </VStack>
      </CollapseUi>
    </VStack>
  );
});
