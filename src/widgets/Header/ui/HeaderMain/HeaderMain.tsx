import { memo, useCallback, useEffect, useState } from 'react';
import cls from './Header.module.scss';
import { HeaderFirstLine } from '../HeaderFirstLine/HeaderFirstLine';
import { HeaderSecondLine } from '../HeaderSecondLine/HeaderSecondLine';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

export interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
  const [isScrolling, setIsScrolling] = useState(false);

  const handleSize = useCallback(
    () => setIsScrolling(Boolean(window.scrollY > 10)),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleSize);
    return () => window.removeEventListener('scroll', handleSize);
  }, [handleSize]);

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <Wrapper
        className={classNames(cls.Wrapper, { [cls.isScroll]: isScrolling })}
      >
        <HeaderFirstLine />
        <HeaderSecondLine />
      </Wrapper>
    </header>
  );
});
