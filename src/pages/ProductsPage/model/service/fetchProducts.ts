import { createAsyncThunk } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
import { getParams } from '../selector/getProductsPageData/getProductsPageData';
import { ProductResult } from '../types/productsPage';
import { ThunkConfig } from '@/app/providers/StorProvider';

interface FetchProductsProps {
  replace?: boolean;
}
export const fetchProducts = createAsyncThunk<
  Iresponse<ProductResult>,
  FetchProductsProps,
  ThunkConfig<string>
>('product/fetchProducts', async (_, { extra, rejectWithValue, getState }) => {
  const params = getParams(getState());
  try {
    const response = await extra.api.post<Iresponse<ProductResult>>('', {
      method: 'getProducts',
      params,
    });
    if (response.data.error) {
      enqueueSnackbar('Что-то пошло не так, попробуйте чуть позже', {
        variant: 'error',
      });
      return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
    }
    return response.data;
  } catch (e) {
    enqueueSnackbar('Что-то пошло не так, попробуйте чуть позже', {
      variant: 'error',
    });
    return rejectWithValue('Что-то пошло не так, попробуйте чуть позже');
  }
});
