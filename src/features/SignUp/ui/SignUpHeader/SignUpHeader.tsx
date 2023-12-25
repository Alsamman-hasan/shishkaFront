import { memo } from 'react';
import { getRouteSignIn } from '@/shared/consts/router';
import { AppLink } from '@/shared/ui/AppLinks/AppLinks';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PTag } from '@/shared/ui/Paragraph/P';

export const SignUpHeader = memo(() => (
  <>
    <Htag tage='h1'>РЕГИСТРАЦИЯ</Htag>
    <div>
      <PTag tage='P2'>Зарегистрируйтесь, заполнив поля ниже.</PTag>
      <PTag tage='P2'>
        Или воспользуйтесь <AppLink to={getRouteSignIn()}>входом</AppLink>, если
        у вас уже есть личный кабинет.
      </PTag>
    </div>
  </>
));
