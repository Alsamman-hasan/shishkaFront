import { memo, useCallback, useState } from 'react';
import cls from './ProductDetailsInfo.module.scss';
import {
  getAddToCartIsLoading,
  getProductAddToCart,
} from '../../model/selectors/getCartInfo/getCartInfo';
import { FavoriteIcon } from '@/shared/assets/icons/productCardIcons/FavoriteIcon';
import Dec from '@/shared/assets/icons/productCardIcons/dec.svg';
import Inc from '@/shared/assets/icons/productCardIcons/inc.svg';
import noImage from '@/shared/assets/images/img4.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { AppImage } from '@/shared/ui/AppImage';
import { ButtonUi } from '@/shared/ui/Buttons/ButtonUi';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Input } from '@/shared/ui/Inputs';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Tags, TagsType } from '@/shared/ui/Tags/Tags';

export interface ProductDetailsInfoProps {
  className?: string;
  onAddToCart: (count: number, cardId: string) => void;
  onAddToFavorite: (cardId: string) => void;
  card: Product;
}
export const ProductDetailsInfo = memo((props: ProductDetailsInfoProps) => {
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
    <HStack
      max
      gap={3.75}
      align='start'
      className={classNames(cls.ProductDetailsInfo, {}, [className])}
    >
      <div className={cls.firstContainer}>
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
        <div className={cls.imgWrapper}>
          <AppImage src={(images && images[0].url) || noImage} alt='test' />
        </div>
      </div>
      <VStack max className={cls.secundContainer} gap={1.5}>
        <VStack max gap={0.75} align='start'>
          <Htag tage='h1'>{name}</Htag>
          <PTag tage='P3' className={cls.availability}>
            В наличии в 16 магазинах
          </PTag>
        </VStack>
        <VStack max align='start' className={cls.price} gap={2.25}>
          <HStack max justify='start' align='center' gap={0.5}>
            <span className={cls.price}>{sellingPrice}₽</span>
            {!!discountPrice && (
              <span className={cls.oldPrice}>{discountPrice}₽</span>
            )}
          </HStack>
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
        </VStack>
        <ButtonUi
          isLoading={prodIdAddedToCart === id && addToCartIsLoading}
          layOut='TextOnly'
          name='to-cart-add'
          theme='primary'
          onClick={() => onAddToCart(count, id)}
        >
          В корзину
        </ButtonUi>
        <PTag tage='P2' className={cls.userAttention}>
          Цена действительна только для интернет-магазина и может отличаться от
          цен в розничных магазинах
        </PTag>
      </VStack>
    </HStack>
  );
});
