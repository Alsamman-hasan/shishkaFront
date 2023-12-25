import { memo } from 'react';
import './ProductsOfWeek.scss';
import { CustomArrowProps } from 'react-slick';
import NavLeftIcon from '@/shared/assets/icons/navLeft.svg';
import NavRightIcon from '@/shared/assets/icons/navRight.svg';

export const NavRightMemo = memo((props: CustomArrowProps) => {
  const { onClick } = props;
  return <NavRightIcon className='Right' onClick={onClick} />;
});

export const NavLeftMemo = memo((props: CustomArrowProps) => {
  const { onClick } = props;
  return <NavLeftIcon className='Left' onClick={onClick} />;
});
