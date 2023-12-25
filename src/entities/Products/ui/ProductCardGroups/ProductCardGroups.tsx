import { memo, useCallback, useState } from 'react';
import cls from './ProductCardGroups.module.scss';
import {
  getAddToCartIsLoading,
  getProductAddToCart,
} from '../../model/selectors/getCartInfo/getCartInfo';
import { CardProps } from '../../model/types/productType';
import Basket from '@/shared/assets/icons/basket.svg';
import { FavoriteIcon } from '@/shared/assets/icons/productCardIcons/FavoriteIcon';
import Dec from '@/shared/assets/icons/productCardIcons/dec.svg';
import Inc from '@/shared/assets/icons/productCardIcons/inc.svg';
import noImage from '@/shared/assets/images/img4.png';
import { getRouteProductDetails } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Input } from '@/shared/ui/Inputs';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Tags, TagsType } from '@/shared/ui/Tags/Tags';

export const ProductCardGroups = memo((props: CardProps) => {
  const {
    className,
    card: { name, images, label, sellingPrice, discountPrice, id, like },
    onAddToCart,
    onAddToFavorite,
  } = props;
  const [count, setCount] = useState(1);
  const addToCartIsLoading = useAppSelector(getAddToCartIsLoading);
  const prodIdAddedToCart = useAppSelector(getProductAddToCart);
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
    <VStack
      gap={0.5}
      justify='between'
      align='center'
      className={classNames(cls.ProductCardGroupsCard, {}, [className])}
    >
      <HStack justify='between' className={cls.tagFavorite}>
        <div>
          {!!label && <Tags color={label[0] as TagsType}>{label[0]}</Tags>}
        </div>
        <div onClick={() => onAddFavorite(id)}>
          <FavoriteIcon
            animation={classNames(cls.animation)}
            className={classNames(cls.icons, {
              [cls.isFavorite]: isFavorite,
            })}
          />
        </div>
      </HStack>
      <AppLink to={getRouteProductDetails(id)} className={cls.link}>
        <VStack gap={0.5}>
          <div className={cls.imgWrapper}>
            <AppImage src={(images && images[0].url) || noImage} alt='test' />
          </div>
          <PTag tage='P2'>{name}</PTag>
        </VStack>
      </AppLink>
      <HStack max justify='start' align='center' gap={0.5}>
        <span className={cls.price}>{sellingPrice}₽</span>
        {!!discountPrice && (
          <span className={cls.oldPrice}>{discountPrice}₽</span>
        )}
      </HStack>
      <HStack max justify='between' className={cls.actions}>
        <HStack className={cls.countWrapper}>
          <div className={cls.decrement} onClick={onRemoveProduct}>
            <Dec className={classNames('', { [cls.disabled]: count < 1 })} />
          </div>
          <Input
            label=''
            className={cls.number}
            name={`count-${id}`}
            value={count}
            type='number'
            max={99}
            onChange={value => setCount(Number(value))}
          />
          <div className={cls.increment} onClick={onAddProduct}>
            <Inc />
          </div>
        </HStack>
        <ButtonUi
          isLoading={prodIdAddedToCart === id && addToCartIsLoading}
          className={cls.btn}
          name={`btn${id}`}
          layOut='IconOnly'
          theme='primary'
          icon={<Basket />}
          onClick={() => onAddToCart(count, id)}
        >
          t
        </ButtonUi>
      </HStack>
    </VStack>
  );
});
