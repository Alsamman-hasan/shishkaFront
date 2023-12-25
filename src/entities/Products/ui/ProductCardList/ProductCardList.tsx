import { memo, useCallback, useState } from 'react';
import cls from './ProductCardList.module.scss';
import { CardProps } from '../../model/types/productType';
import Basket from '@/shared/assets/icons/basket.svg';
import { FavoriteIcon } from '@/shared/assets/icons/productCardIcons/FavoriteIcon';
import Dec from '@/shared/assets/icons/productCardIcons/dec.svg';
import Inc from '@/shared/assets/icons/productCardIcons/inc.svg';
import noImage from '@/shared/assets/images/img4.png';
import { getRouteProductDetails } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Input } from '@/shared/ui/Inputs';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Tags, TagsType } from '@/shared/ui/Tags/Tags';

export const ProductCardList = memo((props: CardProps) => {
  const {
    className,
    card: { name, images, label, sellingPrice, discountPrice, id, like },
    onAddToCart,
    onAddToFavorite,
  } = props;

  const [count, setCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(like);
  const onAddProduct = useCallback(() => {
    setCount(prev => ++prev);
  }, []);

  const onRemoveProduct = useCallback(() => {
    if (count < 1) return;

    setCount(prev => --prev);
  }, [count]);

  const onAddFavorite = useCallback(
    (cardId: string) => {
      setIsFavorite(!isFavorite);
      onAddToFavorite(cardId);
    },
    [isFavorite, onAddToFavorite],
  );

  return (
    <div className={classNames(cls.ProductCardList, {}, [className])}>
      <HStack gap={1.25}>
        <AppLink to={getRouteProductDetails(id)} className={cls.link}>
          <div className={cls.imgWrapper}>
            <AppImage src={(images && images[0].url) || noImage} alt={name} />
          </div>
        </AppLink>
        <VStack className={cls.info} gap={0.75}>
          <div>
            {!!label && <Tags color={label[0] as TagsType}>{label}</Tags>}
          </div>
          <AppLink to={getRouteProductDetails(id)} className={cls.link}>
            <PTag tage='P2'>{name}</PTag>
          </AppLink>
          <div className={cls.tagFavorite} onClick={() => onAddFavorite(id)}>
            <FavoriteIcon
              animation={classNames(cls.animation)}
              className={classNames(cls.icons, {
                [cls.isFavorite]: isFavorite,
              })}
            />
          </div>
        </VStack>
      </HStack>
      <VStack justify='center' align='center'>
        <VStack gap={0.5} align='start'>
          {!!discountPrice && (
            <span className={cls.oldPrice}>{discountPrice}₽</span>
          )}
          <span className={cls.price}>{sellingPrice}₽</span>
        </VStack>
      </VStack>
      <HStack className={cls.actions} gap={1.75} justify='end'>
        <HStack className={cls.countWrapper}>
          <div className={cls.decrement} onClick={onRemoveProduct}>
            <Dec />
          </div>
          <Input
            className={cls.number}
            name={`count-${id}`}
            value={count}
            label=''
            type='number'
            max={99}
            onChange={value => setCount(Number(value))}
          />
          <div className={cls.increment} onClick={onAddProduct}>
            <Inc />
          </div>
        </HStack>
        <ButtonUi
          name={`btn${id}`}
          layOut='IconOnly'
          theme='primary'
          icon={<Basket />}
          onClick={() => onAddToCart(count, id)}
        >
          t
        </ButtonUi>
      </HStack>
    </div>
  );
});
