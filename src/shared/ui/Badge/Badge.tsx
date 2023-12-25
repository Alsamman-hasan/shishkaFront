import { Badge } from '@mui/material';
import { memo, ReactNode } from 'react';
import './Badge.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface BadgeProps {
  className?: string;
  children: ReactNode;
  badgeContent?: ReactNode | number | string;
  // isAuth: boolean;
}

export const BadgeUI = memo((props: BadgeProps) => {
  const { className, children, badgeContent } = props;
  return (
    <Badge
      badgeContent={badgeContent}
      className={classNames('Badge', {}, [className])}
    >
      {children}
    </Badge>
  );
});
