// import Coler from "@/shared/assets/icons/catalogsIcons60px/Coler.svg";
import Drinks from '@/shared/assets/icons/catalogsIcons60px/Drinks.svg';
import POD from '@/shared/assets/icons/catalogsIcons60px/POD.svg';
import Rasta from '@/shared/assets/icons/catalogsIcons60px/Rasta.svg';
import Tobacco from '@/shared/assets/icons/catalogsIcons60px/Tobacco.svg';
// import Sauses from "@/shared/assets/icons/catalogsIcons60px/Sauses.svg";
import Vape from '@/shared/assets/icons/catalogsIcons60px/Vape.svg';
import Zippo from '@/shared/assets/icons/catalogsIcons60px/Zippo.svg';
import Hookah from '@/shared/assets/icons/catalogsIcons60px/hookah.svg';

export const conversionCatalogs = (items: Catalogs[] | undefined) => {
  if (items) {
    const data = items.map(item => {
      switch (item.category) {
        case 'Кальянная продукция':
          return { ...item, icon: Hookah };
        case 'Vape':
          return { ...item, icon: Vape };
        case 'Табачная продукция':
          return { ...item, icon: Tobacco };
        case 'Раста':
          return { ...item, icon: Rasta };
        case 'Zippo':
          return { ...item, icon: Zippo };
        case 'Одноразовые pod-системы':
          return { ...item, icon: POD };
        case 'Напитки':
          return { ...item, icon: Drinks };
        default:
          return item;
      }
    });
    return data;
  }
  return undefined;
};
