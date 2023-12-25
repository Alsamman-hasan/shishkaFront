import Pagination from '@mui/material/Pagination';
import { ChangeEvent, memo } from 'react';
import './Pagination.scss';

export interface PaginationProps {
  count: number;
  page: number;
  handleChange?: (event: ChangeEvent<unknown>, page: number) => void;
}
export const PaginationUi = memo((props: PaginationProps) => {
  const { count, page, handleChange } = props;
  return (
    <div className='PaginationUi'>
      <Pagination
        count={count}
        variant='text'
        shape='rounded'
        page={page}
        onChange={handleChange}
      />
    </div>
  );
});
