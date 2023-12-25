import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsAuth } from '@/entities/authData';
import { getRouteMain } from '@/shared/consts/router';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth =
    useSelector(getIsAuth) || Boolean(localStorage.getItem('isAuth'));
  // const auth = true;
  const location = useLocation();

  if (!auth)
    return <Navigate replace to={getRouteMain()} state={{ from: location }} />;

  return children;
}
