import { memo, useMemo } from 'react';
import cls from './SignInPage.module.scss';
import { SignInForm } from '@/features/SignIn';
import { getRouteSignIn } from '@/shared/consts/router';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';
import { HStack } from '@/shared/ui/Stack';

export const SignInPage = memo(() => {
  const pathItems = useMemo(
    () => [{ name: 'Личный кабинет', to: getRouteSignIn() }],
    [],
  );
  return (
    <PagesWrapper>
      <BreadcrumbsUi pathItems={pathItems} />
      <HStack align='center' justify='center' className={cls.signIn}>
        <SignInForm />
      </HStack>
    </PagesWrapper>
  );
});
export default SignInPage;
