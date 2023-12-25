import { memo, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './BlogPage.module.scss';
import { data } from '../model/selector/BlogsMock';
import { getIsLoading } from '../model/selector/getCatalogItems/getBlogItems';
// import { fetchBlogsData } from '../model/service/fetchBlogs';
import { getRouteBlog, getRouteBlogDetails } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/AppDispatch/AppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import { useEffectOnce } from '@/shared/lib/hooks/useEffectOnce/useEffectOnce';
import { AppImage } from '@/shared/ui/AppImage';
import { BreadcrumbsUi } from '@/shared/ui/Breadcrumbs/Breadcrumbs';
import { Htag } from '@/shared/ui/Htage/Htage';
import { Loader } from '@/shared/ui/Loader/Loader';
import { PageTitle } from '@/shared/ui/PageTitle/PageTitle';
import { PagesWrapper } from '@/shared/ui/PagesWrapper/PagesWrapper';
import { PaginationUi } from '@/shared/ui/PaginationUi/PaginationUi';
import { PTag } from '@/shared/ui/Paragraph/P';
import { HStack, VStack } from '@/shared/ui/Stack';

export const BlogPage = memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(getIsLoading);

  useEffectOnce(() => {
    // dispatch(fetchBlogsData());
  });

  // const onChoseBlog = useCallback(
  //   (item: Catalogs) => {
  //     if (item) navigate(getRouteBlogDetails());
  //   },
  //   [navigate],
  // );

  const pathItems = useMemo(() => [{ name: 'Блог', to: getRouteBlog() }], []);

  if (isLoading)
    return (
      <PagesWrapper>
        <BreadcrumbsUi pathItems={pathItems} />
        <VStack
          max
          gap={2}
          align='center'
          justify='center'
          className={cls.isLoading}
        >
          <Loader />
        </VStack>
      </PagesWrapper>
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
        <PageTitle title='БЛОГ' />
        <div className={cls.BlogPage}>
          <div className={cls.containerBlog}>
            {data.map(({ id, img, subTitle, title }) => (
              <VStack
                key={id}
                gap={1}
                className={cls.blog}
                onClick={() => navigate(getRouteBlogDetails('1'))}
              >
                <div className={cls.img}>
                  <AppImage src={img} alt='Chasha' />
                </div>
                <VStack max gap={0.5} className={cls.BlogInfo}>
                  <Htag tage='h3' className={cls.H3}>
                    {title}
                  </Htag>
                  <PTag tage='P2' className={cls.P2}>
                    {subTitle}
                  </PTag>
                </VStack>
              </VStack>
            ))}
          </div>
        </div>
      </VStack>
      <div className={cls.pagination}>
        <HStack align='end' justify='end'>
          <PaginationUi count={10} page={2} />
        </HStack>
      </div>
    </PagesWrapper>
  );
});
export default BlogPage;
