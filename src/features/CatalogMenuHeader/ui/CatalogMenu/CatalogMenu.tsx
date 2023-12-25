import { Menu } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './catalogMenu.scss';
import {
  getCatalogMenu,
  getIsLoading,
} from '../../model/selector/getCatalogMenu';
import { fetchCatalogs } from '../../model/service/fetchCatalogs';
import { catalogsMenuReducer } from '../../model/slice/catalogsSlice';
import { CatalogItems } from '../CatalogItems/CatalogItems';
import { SubItems } from '../SubItems/SubItems';
import { getRouteSubCatalog } from '@/shared/consts/router';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Portal } from '@/shared/ui/Portal/Portal';
import { HStack } from '@/shared/ui/Stack';

const initialReducers: ReducersList = {
  CatalogMenu: catalogsMenuReducer,
};

interface CatalogMenuProps {
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  anchorEl: HTMLElement | null;
}
export const CatalogMenu = memo((props: CatalogMenuProps) => {
  const { anchorEl, setAnchorEl } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const catalogList = useAppSelector(getCatalogMenu);
  const isLoading = useAppSelector(getIsLoading);
  const [sunCatalog, setSubCatalog] = useState<Catalogs | null>(null);
  const [isInit, setIsInit] = useState<boolean>(false);

  const open = Boolean(anchorEl);

  useEffectOnce(() => {
    setIsInit(true);
  });

  useEffect(() => {
    if (isInit) dispatch(fetchCatalogs());
  }, [dispatch, isInit]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChoseCategory = useCallback(
    (item: Catalogs) => {
      setAnchorEl(null);
      if (item) navigate(getRouteSubCatalog(item.categoryId));
    },
    [navigate, setAnchorEl],
  );

  const onChangeSubCatalog = (item: Catalogs) => {
    setSubCatalog(item);
  };

  const onChoose = () => {
    // history.push("/catalogs");
    setAnchorEl(null);
  };

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <Portal>
        <Menu
          className='menuBlock'
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button-menu',
          }}
          onClose={handleClose}
        >
          {isLoading ? (
            <HStack
              max
              style={{ height: '680px' }}
              justify='center'
              align='center'
            >
              <Loader />
            </HStack>
          ) : (
            <div className='menuContainer'>
              <CatalogItems
                catalogList={catalogList}
                onChangeSubCatalog={onChangeSubCatalog}
                onChoseCategory={onChoseCategory}
              />
              <div className='menuSubMain'>
                <SubItems sunCatalog={sunCatalog} onChoose={onChoose} />
              </div>
            </div>
          )}
        </Menu>
      </Portal>
    </DynamicModuleLoader>
  );
});
