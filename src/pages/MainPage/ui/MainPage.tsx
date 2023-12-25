import { memo } from 'react';
import { BannerImage } from './BannerImage/BannerImage';
import { BannerSlider } from './BannerSlider/BannerSlider';
import { Feedback } from './Feedback/Feedback';
import { PopularCategories } from './PopularCategories/PopularCategories';
import { ProductsOfWeek } from './ProductsOfWeek/ProductsOfWeek';
import { Promotions } from './Promotions/Promotions';
import { YMap } from '@/entities/MainComponents';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

const MainPage = memo(() => (
  <Wrapper>
    <BannerSlider />
    <Promotions />
    <PopularCategories />
    <BannerImage />
    <ProductsOfWeek />
    <Feedback />
    <YMap />
  </Wrapper>
));

export default MainPage;
