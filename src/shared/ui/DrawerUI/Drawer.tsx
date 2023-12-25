import Drawer from '@mui/material/Drawer';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import './Drawer.scss';

export interface DrawerProps {
  className?: string;
  open: boolean;
  onHandleClose: () => void;
  children: ReactNode;
}
export const DrawerUi = memo((props: DrawerProps) => {
  const { className, open, onHandleClose, children } = props;
  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      )
        return;

      onHandleClose();
    };
  return (
    <div className={classNames('Drawer', {}, [className])}>
      <Drawer anchor='top' open={open} onClose={toggleDrawer()}>
        {children}
      </Drawer>
    </div>
  );
});
