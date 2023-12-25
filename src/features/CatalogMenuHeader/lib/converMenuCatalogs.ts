import Drinks from '@/shared/assets/icons/catalog-icons30/Drinks.svg';
import POD from '@/shared/assets/icons/catalog-icons30/POD.svg';
import Rasta from '@/shared/assets/icons/catalog-icons30/Pacta.svg';
import Hookah from '@/shared/assets/icons/catalog-icons30/ShishkaT.svg';
import Tobacco from '@/shared/assets/icons/catalog-icons30/Tabak.svg';
import Vape from '@/shared/assets/icons/catalog-icons30/Vape.svg';
import Zippo from '@/shared/assets/icons/catalog-icons30/Zippo.svg';

export const conversionCatalogs = (
  items: Catalogs[] | undefined,
): Catalogs[] | undefined => {
  if (items) {
    const data = items.map(item => {
      switch (item.category) {
        case 'Кальянная продукция':
          return { ...item, icon: Hookah, id: item.category };
        case 'Vape':
          return { ...item, icon: Vape, id: item.category };
        case 'Табачная продукция':
          return { ...item, icon: Tobacco, id: item.category };
        case 'Раста':
          return { ...item, icon: Rasta, id: item.category };
        case 'Zippo':
          return { ...item, icon: Zippo, id: item.category };
        case 'Одноразовые pod-системы':
          return { ...item, icon: POD, id: item.category };
        case 'Напитки':
          return { ...item, icon: Drinks, id: item.category };
        default:
          return item;
      }
    });
    return data;
  }
  return undefined;
};
