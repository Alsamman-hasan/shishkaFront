import { StateSchema } from '@/app/providers/StorProvider';

export const getSelectGroup = (state: StateSchema) =>
  state.product?.selectGroup;

export const getSelectCategoryName = (state: StateSchema) =>
  state.product?.categoryName;
