import { MenuItem } from '@mui/material';
import { memo } from 'react';
import '../CatalogMenu/catalogMenu.scss';
import { Htag } from '@/shared/ui/Htage/Htage';
import { HStack } from '@/shared/ui/Stack';

export interface CatalogItemsProps {
  catalogList: Catalogs[] | undefined;
  onChoseCategory: (item: Catalogs) => void;
  onChangeSubCatalog: (item: Catalogs) => void;
}
export const CatalogItems = memo((props: CatalogItemsProps) => {
  const { catalogList, onChangeSubCatalog, onChoseCategory } = props;

  return (
    <div className='menuMain'>
      {catalogList?.map(item => (
        <div key={item.category} className='menuMainItems'>
          <MenuItem
            onClick={() => onChoseCategory(item)}
            onMouseEnter={() => onChangeSubCatalog(item)}
          >
            <HStack gap={0.5} className='item'>
              {!!item.icon && <item.icon />}
              <Htag className='menuMainItem' tage='h4'>
                {item.category}
              </Htag>
            </HStack>
          </MenuItem>
        </div>
      ))}
    </div>
  );
});
