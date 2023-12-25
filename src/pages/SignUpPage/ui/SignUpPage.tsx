import { memo, useMemo } from 'react';
import cls from './SignUpPage.module.scss';
import { SignUpForm } from '@/features/SignUp';
import { getRouteSignUp } from '@/shared/consts/router';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';
import { HStack } from '@/shared/ui/Stack';

export const SignUpPage = memo(() => {
  const pathItems = useMemo(
    () => [{ name: 'Личный кабинет', to: getRouteSignUp() }],
    [],
  );

  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <HStack align='center' justify='center' className={cls.SignUp}>
        <SignUpForm />
      </HStack>
    </PagesWrapper>
  );
});

export default SignUpPage;
