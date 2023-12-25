import { memo } from 'react';
import cls from './FirstFooter.module.scss';
import InstagramIcon from '@/shared/assets/icons/instagram.svg';
import Logo from '@/shared/assets/icons/logoWhite.svg';
import TelegramIcon from '@/shared/assets/icons/telegram.svg';
import VkIcon from '@/shared/assets/icons/vk.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export interface FirstFooterProps {
  className?: string;
}

export const FirstFooter = memo((props: FirstFooterProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.FirstFooter, {}, [className])}>
      <VStack align='start' gap={1.75} className={cls.itemsWrapper}>
        <Logo />
        <HStack
          max
          gap={0.75}
          align='center'
          justify='start'
          className={cls.itemsWrapper}
        >
          <VkIcon />
          <InstagramIcon />
          <TelegramIcon />
        </HStack>
      </VStack>
      <VStack gap={1.25} className={cls.itemsWrapper}>
        <Htag className={cls.header} tage='h4'>
          ДЛЯ КАЛЬЯНА
        </Htag>
        <VStack gap={0.75}>
          <PTag className={cls.item} tage='P3'>
            Кальяны
          </PTag>
          <PTag className={cls.item} tage='P3'>
            Табак и смеси
          </PTag>
          <PTag className={cls.item} tage='P3'>
            Уголь для кальяна
          </PTag>
          <PTag className={cls.item} tage='P3'>
            Аксессуары и комплектующие
          </PTag>
        </VStack>
      </VStack>
      <VStack gap={1.25} className={cls.itemsWrapper}>
        <Htag className={cls.header} tage='h4'>
          ДЛЯ ВЕЙПА
        </Htag>
        <VStack gap={0.75}>
          <PTag className={cls.item} tage='P3'>
            Mod и Pod - системы
          </PTag>
          <PTag className={cls.item} tage='P3'>
            Атомайзеры
          </PTag>
          <PTag className={cls.item} tage='P3'>
            Жидкость
          </PTag>
          <PTag className={cls.item} tage='P3'>
            Аксессуары и комплектующие
          </PTag>
        </VStack>
      </VStack>
      <VStack gap={1.25} className={cls.itemsWrapper}>
        <Htag className={cls.header} tage='h4'>
          САМОКРУТКИ/РАСТА
        </Htag>
        <HStack justify='between' gap={2.5} align='start'>
          <VStack gap={0.75}>
            <PTag className={cls.item} tage='P3'>
              Табак для самокруток
            </PTag>
            <PTag className={cls.item} tage='P3'>
              Табак для трубок
            </PTag>
            <PTag className={cls.item} tage='P3'>
              Снафф
            </PTag>
            <PTag className={cls.item} tage='P3'>
              Сигариллы
            </PTag>
          </VStack>
          <VStack gap={0.75} className={cls.itemsWrapper}>
            <PTag className={cls.item} tage='P3'>
              Аксессуары
            </PTag>
            <PTag className={cls.item} tage='P3'>
              Бонги
            </PTag>
            <PTag className={cls.item} tage='P3'>
              Трубки
            </PTag>
            <PTag className={cls.item} tage='P3'>
              Гриндеры
            </PTag>
            <PTag className={cls.item} tage='P3'>
              Аксессуары для расты
            </PTag>
          </VStack>
        </HStack>
      </VStack>
    </div>
  );
});
