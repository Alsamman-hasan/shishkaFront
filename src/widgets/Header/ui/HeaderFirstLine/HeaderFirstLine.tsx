import { memo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import cls from './HeaderFirstLine.module.scss';
import { firstHeaderItems } from '../../model/selector/getFirstHeaderItems/getFirstHeaderItems';
import Logo from '@/shared/assets/icons/logoMobile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { Layout } from '@/shared/ui/Layout/Layout';
import { PTag } from '@/shared/ui/Paragraph/P';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

export interface HeaderFirstLineProps {
  className?: string;
}

export const HeaderFirstLine = memo((props: HeaderFirstLineProps) => {
  const { className } = props;
  const matches = useMediaQuery('(max-width: 768px)');
  const { pathname } = useLocation();
  const headerContent = useCallback(() => {
    if (!matches) return <PTag tage='P3'>Нижний Новгород</PTag>;

    return <Logo />;
  }, [matches]);

  return (
    <Wrapper className={cls.Wrapper}>
      <Layout>
        <div className={classNames(cls.HeaderFirstLine, {}, [className])}>
          {headerContent()}
          <div className={cls.menu}>
            {firstHeaderItems.map(item => (
              <AppLink
                key={item.title}
                to={item.link}
                className={classNames('', {
                  [cls.active]: pathname === item.link,
                })}
              >
                <PTag tage='P2'>{item.title}</PTag>
              </AppLink>
            ))}
          </div>
          <div className={cls.lang}>
            {/* <PTag tage="P1">+7(999)139-52-52</PTag> */}
          </div>
        </div>
      </Layout>
    </Wrapper>
  );
});
