import { createSelector } from '@reduxjs/toolkit';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { StateSchema } from '@/app/providers/StorProvider';
import Coler from '@/shared/assets/icons/catalogsIcons60px/Coler.svg';
import Drinks from '@/shared/assets/icons/catalogsIcons60px/Drinks.svg';
import POD from '@/shared/assets/icons/catalogsIcons60px/POD.svg';
import Rasta from '@/shared/assets/icons/catalogsIcons60px/Rasta.svg';
import Sauses from '@/shared/assets/icons/catalogsIcons60px/Sauses.svg';
import Tobacco from '@/shared/assets/icons/catalogsIcons60px/Tobacco.svg';
import Vape from '@/shared/assets/icons/catalogsIcons60px/Vape.svg';
import Zippo from '@/shared/assets/icons/catalogsIcons60px/Zippo.svg';
import Hookah from '@/shared/assets/icons/catalogsIcons60px/hookah.svg';

const icons = [
  Hookah,
  Coler,
  Tobacco,
  Drinks,
  POD,
  Rasta,
  Sauses,
  Vape,
  Zippo,
  Hookah,
  Coler,
  Tobacco,
  Drinks,
  POD,
  Rasta,
  Sauses,
  Vape,
  Zippo,
  Hookah,
  Coler,
  Tobacco,
  Drinks,
  POD,
  Rasta,
  Sauses,
  Vape,
  Zippo,
  Hookah,
  Coler,
  Tobacco,
  Drinks,
  POD,
  Rasta,
  Sauses,
  Vape,
  Zippo,
];
export const getSubCatalogs = (state: StateSchema) =>
  state.subCatalog?.subCategory?.groups;

export const conversionCatalogs = (items: Groups[] | undefined) => {
  if (items) {
    const data = items.map((item, i) => ({ ...item, icon: icons[i] }));
    return data;
  }
  return undefined;
};
export const getCatalogsItems = createSelector(getSubCatalogs, catalog => {
  if (catalog) return conversionCatalogs(catalog);

  return undefined;
});
