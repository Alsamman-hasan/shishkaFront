import { memo } from 'react';
import './Arrows.scss';
import { CustomArrowProps } from 'react-slick';
import NavLeftIcon from '@/shared/assets/icons/navLeft.svg';
import NavRightIcon from '@/shared/assets/icons/navRight.svg';

export const NavRightMemo = memo((props: CustomArrowProps) => {
  const { onClick } = props;
  return <NavRightIcon className='NavRight' onClick={onClick} />;
});

export const NavLeftMemo = memo((props: CustomArrowProps) => {
  const { onClick } = props;
  return <NavLeftIcon className='NavLeft' onClick={onClick} />;
});
