import { ShopsStores } from '../types/types';
import shop101 from '@/shared/assets/images/Shops/10shop/2.png';
import shop102 from '@/shared/assets/images/Shops/10shop/3.png';
import shop103 from '@/shared/assets/images/Shops/10shop/_-1.png';
import shop111 from '@/shared/assets/images/Shops/11shop/1_.jpg';
import shop112 from '@/shared/assets/images/Shops/11shop/2.jpeg';
import shop113 from '@/shared/assets/images/Shops/11shop/3.jpeg';
import shop121 from '@/shared/assets/images/Shops/12shop/1.jpg';
import shop122 from '@/shared/assets/images/Shops/12shop/2.jpg';
import shop123 from '@/shared/assets/images/Shops/12shop/3.jpg';
import shop131 from '@/shared/assets/images/Shops/13shop/1 (1).jpg';
import shop132 from '@/shared/assets/images/Shops/13shop/2_.jpg';
import shop133 from '@/shared/assets/images/Shops/13shop/3_.jpg';
import shop141 from '@/shared/assets/images/Shops/14shop/1.jpg';
import shop142 from '@/shared/assets/images/Shops/14shop/2.jpg';
import shop143 from '@/shared/assets/images/Shops/14shop/3.jpg';
import shop151 from '@/shared/assets/images/Shops/15shop/13.jpg';
import shop152 from '@/shared/assets/images/Shops/15shop/14.jpg';
import shop153 from '@/shared/assets/images/Shops/15shop/15.jpg';
import shop161 from '@/shared/assets/images/Shops/16shop/23.jpg';
import shop162 from '@/shared/assets/images/Shops/16shop/_1.jpg';
import shop163 from '@/shared/assets/images/Shops/16shop/_2.jpg';
import shop171 from '@/shared/assets/images/Shops/17shop/1.jpg';
import shop172 from '@/shared/assets/images/Shops/17shop/2.jpg';
import shop173 from '@/shared/assets/images/Shops/17shop/31.jpg';
import shop181 from '@/shared/assets/images/Shops/18shop/1 (1).jpg';
import shop182 from '@/shared/assets/images/Shops/18shop/2.jpg';
import shop183 from '@/shared/assets/images/Shops/18shop/3.jpg';
import shop191 from '@/shared/assets/images/Shops/19shop/1.jpg';
import shop192 from '@/shared/assets/images/Shops/19shop/_1.jpg';
import shop193 from '@/shared/assets/images/Shops/19shop/_2.jpg';
import shop201 from '@/shared/assets/images/Shops/20shop/18.jpg';
import shop202 from '@/shared/assets/images/Shops/20shop/_2.jpg';
import shop203 from '@/shared/assets/images/Shops/20shop/_3.jpg';
import shop211 from '@/shared/assets/images/Shops/21shop/4.jpg';
import shop212 from '@/shared/assets/images/Shops/21shop/5.jpg';
import shop213 from '@/shared/assets/images/Shops/21shop/6.jpg';
import shop221 from '@/shared/assets/images/Shops/22shop/1.jpg';
import shop222 from '@/shared/assets/images/Shops/22shop/2.jpg';
import shop223 from '@/shared/assets/images/Shops/22shop/3WWn169q7DE.jpg';
import shop231 from '@/shared/assets/images/Shops/23shop/1 (1).jpg';
import shop232 from '@/shared/assets/images/Shops/23shop/2.jpg';
import shop233 from '@/shared/assets/images/Shops/23shop/3.jpg';
import shop241 from '@/shared/assets/images/Shops/24shop/1.jpg';
import shop242 from '@/shared/assets/images/Shops/24shop/2.jpg';
import shop243 from '@/shared/assets/images/Shops/24shop/3.jpg';
import shop251 from '@/shared/assets/images/Shops/25shop/1 (1).jpg';
import shop252 from '@/shared/assets/images/Shops/25shop/2.jpg';
import shop253 from '@/shared/assets/images/Shops/25shop/3.jpg';
import shop31 from '@/shared/assets/images/Shops/3shop/1 (1).jpg';
import shop32 from '@/shared/assets/images/Shops/3shop/photo_2022-04-04_15- (1).jpg';
import shop33 from '@/shared/assets/images/Shops/3shop/photo_2022-04-04_15-.jpg';
import shop41 from '@/shared/assets/images/Shops/4shoop/2.jpg';
import shop42 from '@/shared/assets/images/Shops/4shoop/25.jpg';
import shop43 from '@/shared/assets/images/Shops/4shoop/26.jpg';
import shop51 from '@/shared/assets/images/Shops/5shop/19.jpg';
import shop52 from '@/shared/assets/images/Shops/5shop/21.jpg';
import shop53 from '@/shared/assets/images/Shops/5shop/4.jpg';
import shop61 from '@/shared/assets/images/Shops/6shop/1.png';
import shop62 from '@/shared/assets/images/Shops/6shop/2.jpg';
import shop63 from '@/shared/assets/images/Shops/6shop/3.jpg';
import shop71 from '@/shared/assets/images/Shops/7shop/1.jpg';
import shop72 from '@/shared/assets/images/Shops/7shop/2.jpg';
import shop73 from '@/shared/assets/images/Shops/7shop/3.jpg';
import shop81 from '@/shared/assets/images/Shops/8shop/11.jpg';
import shop82 from '@/shared/assets/images/Shops/8shop/2.jpg';
import shop83 from '@/shared/assets/images/Shops/8shop/photo_2022-04-04_16-.jpg';
import shop91 from '@/shared/assets/images/Shops/9shop/1.jpg';
import shop92 from '@/shared/assets/images/Shops/9shop/2.jpg';
import shop93 from '@/shared/assets/images/Shops/9shop/3.jpg';
import shop11 from '@/shared/assets/images/Shops/firstShop/shop1.png';
import shop12 from '@/shared/assets/images/Shops/firstShop/shop2.png';
import shop13 from '@/shared/assets/images/Shops/firstShop/shop3.png';
import shop21 from '@/shared/assets/images/Shops/secondShop/1.jpg';
import shop22 from '@/shared/assets/images/Shops/secondShop/2.jpg';
import shop23 from '@/shared/assets/images/Shops/secondShop/3.jpg';
import none from '@/shared/assets/images/img4.png';

export const shops: ShopsStores[] = [
  {
    city: 'Нижний Новгород',
    geometry: [56.230757, 43.946554],
    id: 1,
    one: shop11,
    phone: '+7 (969) 604-99-06',
    street: 'Гагарина 222а',
    three: shop13,
    timing: 'С 9:00 - 21:00',
    title: 'ТЦ. Щербинки',
    two: shop12,
  },
  {
    city: 'п. Новинки',
    geometry: [56.192703, 43.858044],
    id: 2,
    one: shop21,
    phone: '+7 (904) 913-96-08',
    street: 'ЖК Окский берег, Гагарина 1б',
    three: shop23,
    timing: 'С 10:00 - 21:00',
    title: 'п. Новинки, ЖК Окский берег',
    two: shop22,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.313663, 44.028337],
    id: 3,
    one: shop31,
    phone: '+7 (901) 800-05-69',
    street: 'Полтавская 30',
    three: shop33,
    timing: 'С 10:00 - 21:00',
    title: 'ТЦ. Куб',
    two: shop32,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.288036, 44.077501],
    id: 4,
    one: shop41,
    phone: '+7 (996) 563-09-51',
    street: 'Казанское шоссе 12к1',
    three: shop43,
    timing: 'С 10:00 - 21:00',
    title: 'ТЦ. Лагуна',
    two: shop42,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.226024, 43.86284],
    id: 5,
    one: shop51,
    phone: '+7(929)055-20-30',
    street: 'Южное шоссе 24в',
    three: shop53,
    timing: 'с 9:00 - 21:00',
    title: 'Южное Шоссе',
    two: shop52,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.238627, 43.865939],
    id: 6,
    one: shop61,
    phone: '+7 (920) 015-02-75',
    street: 'Слева от "Вкусно и точка"',
    three: shop63,
    timing: 'c 10:00 до 22:00',
    title: 'ул. Героя Смирнова 15',
    two: shop62,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.250552, 43.852024],
    id: 7,
    one: shop71,
    phone: '+7 (920) 298-89-86',
    street: 'Ул. Краснодонцев 14',
    three: shop73,
    timing: 'с 10:00 - 22:00',
    title: 'Краснодонцев 14',
    two: shop72,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.250552, 43.852024],
    id: 8,
    one: shop71,
    phone: '+7 (920) 298-89-86',
    street: 'Ул. Краснодонцев 14',
    three: shop73,
    timing: 'с 10:00 - 22:00',
    title: 'Краснодонцев 14',
    two: shop72,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.344681, 43.865454],
    id: 9,
    one: shop81,
    phone: '+7 (996) 065-02-35',
    street: 'ул. Энгельса 1',
    three: shop83,
    timing: 'с 10:00 - 21:00',
    title: 'Сормово',
    two: shop82,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.266767, 43.876036],
    id: 10,
    one: shop91,
    phone: '',
    street: 'Львовская 7а',
    three: shop93,
    timing: 'с 9:00 - 21:00',
    title: 'Львовская',
    two: shop92,
  },
  {
    city: 'Богородск',
    geometry: [56.104306, 43.517132],
    id: 11,
    one: shop101,
    phone: '+7 (915) 943-27-45',
    street: 'ул. Ленина, 191',
    three: shop102,
    timing: 'с 10:00 - 21:00',
    title: 'Богородск',
    two: shop103,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.324261, 43.944775],
    id: 12,
    one: shop111,
    phone: '+7 (996) 566-09-07',
    street: 'ул. Гордеевская 2а',
    three: shop112,
    timing: 'с 9:00 - 21:00',
    title: 'Гордеевский универмаг',
    two: shop113,
  },
  {
    city: 'Балахна',
    geometry: [56.494813, 43.608446],
    id: 13,
    one: shop121,
    phone: '+7 (987) 114-71-26',
    street: 'ул. Колёсная улица 43',
    three: shop122,
    timing: 'С 10:00 до 21:00',
    title: 'Балахна',
    two: shop123,
  },
  {
    city: 'Вязники',
    geometry: [56.494947, 43.609704],
    id: 14,
    one: shop131,
    phone: '+7 (930) 744-28-16',
    street: 'Советская 62/1',
    three: shop132,
    timing: 'С 9:00 до 21:00',
    title: 'Вязники',
    two: shop133,
  },
  {
    city: 'Вязники',
    geometry: [56.487727, 43.60885],
    id: 15,
    one: shop141,
    phone: '+7 (980) 756-85-53',
    street: 'Ленина 39',
    three: shop142,
    timing: 'С 9:00 до 21:00',
    title: 'Вязники',
    two: shop143,
  },
  {
    city: 'Нижний Новгород',
    geometry: [56.286992, 43.8518],
    id: 16,
    one: shop151,
    phone: '+7 (908) 160-18-22',
    street: 'ул. Движенцев 2',
    three: shop152,
    timing: '',
    title: 'Сортировка',
    two: shop153,
  },
  {
    city: 'Павлово',
    geometry: [55.965768, 43.068945],
    id: 17,
    one: shop161,
    phone: '+7 (910) 129-05-65',
    street: 'ул. Сенная 6 Вход слева от Сервис Центра',
    three: shop162,
    timing: 'с 10:00 до 20.00',
    title: 'Павлово',
    two: shop163,
  },
  {
    city: 'Заволжье',
    geometry: [56.64248, 43.399857],
    id: 18,
    one: shop171,
    phone: '+7 (999) 141-32-58',
    street: 'ул. Железнодорожная 18',
    three: shop172,
    timing: 'с 10:00 до 21.00',
    title: 'Заволжье',
    two: shop173,
  },
  {
    city: 'Городец',
    geometry: [56.646984, 43.470213],
    id: 19,
    one: shop181,
    phone: '+7 (996) 564-07-23',
    street: 'Пролетарская площадь, 8',
    three: shop182,
    timing: 'c 09:00 до 20:00',
    title: 'Городец',
    two: shop183,
  },
  {
    city: 'Киров',
    geometry: [58.60698, 49.663073],
    id: 20,
    one: shop191,
    phone: '+7 (900) 526-12-43',
    street: 'ул.Пятницкая 87',
    three: shop192,
    timing: 'с 11:00 - 21:00',
    title: 'Киров',
    two: shop193,
  },
  {
    city: 'Киров',
    geometry: [58.592773, 49.632279],
    id: 21,
    one: shop201,
    phone: '+7 (900) 526-12-43',
    street: 'Ул. Воровского 78',
    three: shop202,
    timing: 'С 10:00 - 22:00',
    title: 'Киров',
    two: shop203,
  },
  {
    city: 'Мулино',
    geometry: [56.316154, 42.946253],
    id: 22,
    one: shop211,
    phone: '',
    street: 'ул.Школьная 16',
    three: shop212,
    timing: 'с 9:00 - 21:00',
    title: 'Мулино',
    two: shop213,
  },
  {
    city: 'Мулино',
    geometry: [56.316154, 42.946253],
    id: 23,
    one: none,
    phone: '+7 (930) 805-71-72',
    street: 'ул. Гвардейская, 61 1ый этаж',
    three: none,
    timing: 'c 10:00 до 20:00',
    title: 'Мулино',
    two: none,
  },
  {
    city: 'Гороховец',
    geometry: [56.645183, 43.48429],
    id: 24,
    one: shop221,
    phone: '+7(920) 048-77-92',
    street: 'ул. Московская 74',
    three: shop222,
    timing: 'с 10:00 - 21:00',
    title: 'Гороховец',
    two: shop223,
  },
  {
    city: 'Кстово',
    geometry: [56.149045, 44.201163],
    id: 25,
    one: shop231,
    phone: '',
    street: 'ул. 40 лет победы 10',
    three: shop232,
    timing: 'С 10:00 до 21:00',
    title: 'Кстово',
    two: shop233,
  },
  {
    city: 'Лысково',
    geometry: [56.022936, 45.039202],
    id: 26,
    one: shop241,
    phone: '+79200276979',
    street: '1-я Заводская улица, 1',
    three: shop242,
    timing: 'С 9:00 до 21:00',
    title: 'Лысково',
    two: shop243,
  },
  {
    city: 'Новосмолинский',
    geometry: [56.28272, 43.034566],
    id: 27,
    one: shop251,
    phone: '+7 (902) 685-97-22',
    street: 'п. Новосмолинский, ул. Танковая 28',
    three: shop252,
    timing: 'с 9:00 до 21:00',
    title: 'Новосмолинский',
    two: shop253,
  },
];
