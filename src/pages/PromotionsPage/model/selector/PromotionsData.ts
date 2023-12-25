import { PromotionsItems } from '../types/PromotionsItems';
import bg1 from '@/shared/assets/images/Promotions/bg1.png';
import bg2 from '@/shared/assets/images/Promotions/bg2.png';
import bg3 from '@/shared/assets/images/Promotions/bg3.png';
import bg4 from '@/shared/assets/images/Promotions/bg4.png';
import card1 from '@/shared/assets/images/Promotions/image.png';
import card2 from '@/shared/assets/images/Promotions/picture.png';

export const promotions: PromotionsItems[] = [
  {
    bg: bg1,
    id: 1,
    img: card1,
    subTitle: 'Каждая 3 пачка STARLINE 25 гр БЕСПЛАТНО',
    title: 'Идеальный вечер в 2 шага',
    titleType: 'h1',
  },
  {
    bg: bg2,
    id: 2,
    img: card2,
    subTitle: 'Раскрой эмоции в новом формате',
    title: 'НОВИНКА В ШИШКЕ',
    titleType: 'h1',
  },
  {
    bg: bg3,
    card: true,
    hasBtn: true,
    id: 3,
    subTitle:
      'Потрясающие вкусы табака Aircraft, в сочетании с крепостью мелконарезанного сигарного листа подарят незабываемые ощущения',
    title: 'Aircraft by Smoke Kitchen',
    titleType: 'h1',
  },
  {
    bg: bg4,
    card: true,
    id: 4,
    subTitle:
      'Будь в курсе всех акций и спец предложений, обсуждай новинки, задавай вопросы и получай консультации от наших сотрудников',
    title: 'ВСЕ САМЫЕ СВЕЖИЕ НОВОСТИ И ГОРЯЧИЕ АКЦИИ ШИШКИ',
    titleType: 'h2',
  },
];
