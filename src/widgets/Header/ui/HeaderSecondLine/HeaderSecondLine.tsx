import { IconButton } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cls from './HeaderSecondLine.module.scss';
import { Catalog } from '../CatalogMenu/CatalogMenu';
import { SidebarUI } from '../Sidebar/SidebarUI';
import { getCartLength, getCartsReq } from '@/entities/Cart';
import { fetchFavorites, getFavCartLength } from '@/entities/Favorites';
import { authDataActions, getIsAuth } from '@/entities/authData';
import { SearchInput } from '@/features/Search';
import FavoriteIcon from '@/shared/assets/icons/Favorite.svg';
import BasketIcon from '@/shared/assets/icons/basket.svg';
import Logo from '@/shared/assets/icons/logo.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
  getRouteMain,
  getRouteProfile,
  getRouteSignIn,
  getRouteCarts,
  getRouteFavorites,
} from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import useMediaQuery from '@/shared/lib/hooks/useMediaQuery/useMediaQuery';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { BadgeUI } from '@/shared/ui/Badge/Badge';
import { Burger } from '@/shared/ui/Burger/Burger';
import { Layout } from '@/shared/ui/Layout/Layout';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

export interface HeaderSecondLineProps {
  className?: string;
}
const FavoriteIconMemo = memo(() => <FavoriteIcon />);
const ProfileIconMemo = memo(() => <ProfileIcon />);
const BasketIconMemo = memo(() => <BasketIcon />);
const BosLogoMemo = memo(() => <Logo />);

export const HeaderSecondLine = memo((props: HeaderSecondLineProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const mobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  getFavCartLength;
  const isAuth =
    useAppSelector(getIsAuth) || Boolean(localStorage.getItem('isAuth'));

  const baskets = useAppSelector(getCartLength);
  const badgeContent = useAppSelector(getFavCartLength);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const { close, isClosing, isMounted } = useModal({
    animationDelay: 250,
    isOpen: open,
    onClose,
  });

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onNavigate = useCallback(() => {
    navigate(getRouteMain());
  }, [navigate]);

  useEffect(() => {
    if (isAuth) {
      dispatch(getCartsReq({}));
      dispatch(fetchFavorites({}));
      dispatch(authDataActions.setIsAuth(isAuth));
    }
  }, [isAuth, dispatch]);

  const content = useCallback(() => {
    if (mobile) return <Burger open={open} onOpen={onOpen} onClose={close} />;

    return (
      <div style={{ cursor: 'pointer' }} onClick={onNavigate}>
        <BosLogoMemo />
      </div>
    );
  }, [mobile, close, onNavigate, onOpen, open]);

  return (
    <Wrapper className={classNames(cls.Wrapper, {}, [className])}>
      <Layout>
        <div className={classNames(cls.HeaderSecondLine)}>
          {content()}
          {!mobile && (
            <>
              <Catalog />
              <SearchInput />
            </>
          )}
          <div className={cls.IconsWrapper}>
            <IconButton
              name='profile'
              id='profile-btn'
              aria-label='profile'
              className={classNames(cls.btnIcons, {
                [cls.active]: pathname === getRouteProfile(),
              })}
            >
              <AppLink
                to={isAuth ? getRouteProfile() : getRouteSignIn()}
                className={cls.link}
              >
                <ProfileIconMemo />
              </AppLink>
            </IconButton>
            <IconButton
              name='Favorite'
              id='Favorite--btn'
              aria-label='Favorite'
              disabled={!isAuth}
              className={classNames(cls.btnIcons, {
                [cls.active]: pathname === getRouteFavorites(),
              })}
            >
              <AppLink
                to={isAuth ? getRouteFavorites() : getRouteSignIn()}
                className={cls.link}
              >
                <BadgeUI badgeContent={isAuth ? badgeContent : undefined}>
                  <FavoriteIconMemo />
                </BadgeUI>
              </AppLink>
            </IconButton>
            <IconButton
              name='Basket'
              id='Basket-btn'
              aria-label='Basket'
              disabled={!isAuth}
              className={classNames(cls.btnIcons, {
                [cls.active]: pathname === getRouteCarts(),
              })}
            >
              <AppLink
                to={isAuth ? getRouteCarts() : getRouteSignIn()}
                className={cls.link}
              >
                <BadgeUI
                  className={cls.Badge}
                  badgeContent={isAuth ? baskets : undefined}
                >
                  <BasketIconMemo />
                </BadgeUI>
              </AppLink>
            </IconButton>
          </div>
        </div>
      </Layout>
      {!!mobile && !!open && (
        <SidebarUI
          lazy
          open={open}
          close={close}
          isClosing={isClosing}
          isMounted={isMounted}
        />
      )}
    </Wrapper>
  );
});
