import { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './DeliveryPage.module.scss';
import Delivery from '@/shared/assets/images/Delivery/Delivery.jpg';
import { getRouteDelivery, getRouteSubCatalog } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { AppImage } from '@/shared/ui/AppImage';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export const DeliveryPage = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChoseDelivery = useCallback(
    (item: Catalogs) => {
      if (item) navigate(getRouteSubCatalog(item.categoryId));
    },
    [navigate],
  );

  const pathItems = useMemo(
    () => [{ name: 'O Доставке', to: getRouteDelivery() }],
    [],
  );

  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <VStack
        max
        gap={2}
        align='start'
        justify='start'
        className={cls.DeliveryWrapper}
      >
        <Htag className={cls.H1} tage='h1'>
          О ДОСТАВКЕ
        </Htag>
        <div className={cls.DeliveryPage}>
          <div className={cls.containerDelivery}>
            <div className={cls.left}>
              <VStack gap={1}>
                <PTag tage='P1' className={cls.P1}>
                  Доставка не распространяется на никотиносодержащую продукцию,
                  облагаемую акцизом(ст. 20 ФЗ №15 «Об охране здоровья граждан».
                </PTag>
              </VStack>
              <VStack gap={1}>
                <PTag tage='P1' className={cls.P1}>
                  Заказ можно забрать самовывозом в любом магазине нашей <br />
                  сети. При оформлении заказа с вами свяжется наш <br />
                  менеджер.
                </PTag>
              </VStack>
            </div>
            <div className={cls.right}>
              <div className={cls.img}>
                <AppImage src={Delivery} alt='Delivery' />
              </div>
            </div>
          </div>
        </div>
      </VStack>
    </PagesWrapper>
  );
});
export default DeliveryPage;
