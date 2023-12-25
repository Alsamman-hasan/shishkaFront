/* eslint-disable react/no-danger */
import dompurify from 'dompurify';
import { memo, useMemo } from 'react';
import cls from './BlogDetailsPage.module.scss';
import { text } from '../model/selector/BlogsDetailsMock';
import { getRouteBlog, getRouteBlogDetails } from '@/shared/consts/router';
import { AppImage } from '@/shared/ui/AppImage';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { Htag } from '@/shared/ui/Htage/Htage';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';
import { PTag } from '@/shared/ui/Paragraph/P';
import { VStack } from '@/shared/ui/Stack';

export interface BlogDetailsPageProps {
  className?: string;
}
export const BlogDetailsPage = memo((props: BlogDetailsPageProps) => {
  const { className } = props;
  const sanitizer = dompurify.sanitize;

  const pathItems = useMemo(
    () => [
      { name: 'Блог', to: getRouteBlog() },
      {
        name: 'Как ухаживать за чашей для кальяны из глины',
        to: getRouteBlogDetails('1'),
      },
    ],
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
        className={cls.BlogsWrapper}
      >
        <div className={cls.BlogPage}>
          <div className={cls.containerBlog}>
            {text.map(item => (
              <VStack gap={1}>
                <div className={cls.img}>
                  <AppImage src={item.img} alt='img' />
                </div>
                <VStack gap={1} className={cls.blog}>
                  <Htag tage='h2' className={cls.H2}>
                    {item.title}
                  </Htag>
                  <PTag tage='P3' className={cls.P3}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(item.subtitle),
                      }}
                    />
                  </PTag>
                </VStack>
              </VStack>
            ))}
          </div>
        </div>
      </VStack>
    </PagesWrapper>
  );
});

export default BlogDetailsPage;
