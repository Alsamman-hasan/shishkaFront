import { memo, MouseEvent, useState } from 'react';
import { CatalogMenu } from '@/features/CatalogMenuHeader';
import GatalogIcon from '@/shared/assets/icons/GroupCatalog.svg';
import Cross from '@/shared/assets/icons/close.svg';
import './catalogMenu.scss';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';

export const Catalog = memo(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className='menu'>
      <ButtonUi
        theme='primary'
        layOut='IconBefore'
        aria-haspopup='true'
        id='basic-button-menu'
        name='tes'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        className='menuBtn'
        icon={open ? <Cross /> : <GatalogIcon />}
        onClick={handleClick}
      >
        <Htag tage='h3'> КАТАЛОГ</Htag>
      </ButtonUi>
      {!!open && <CatalogMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />}
    </div>
  );
});
