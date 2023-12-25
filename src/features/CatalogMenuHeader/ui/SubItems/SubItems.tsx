import { MenuItem } from '@mui/material';
import { memo } from 'react';
import '../CatalogMenu/catalogMenu.scss';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';

export interface SubItemsProps {
  sunCatalog: Catalogs | null;
  onChoose: () => void;
}
export const SubItems = memo((props: SubItemsProps) => {
  const { sunCatalog, onChoose } = props;

  return (
    <div className='menuSubMainGroup'>
      {!!sunCatalog && (
        <div className='menuSubMainItems'>
          <Htag tage='h4'> {sunCatalog.category}</Htag>
          {sunCatalog?.groups?.map(item => (
            <div key={item.groupId} className='menuSubMainItemWrapper'>
              <MenuItem onClick={onChoose}>
                <PTag className='menuSubMainItem' tage='P3'>
                  {' '}
                  {item.group}
                </PTag>
              </MenuItem>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
