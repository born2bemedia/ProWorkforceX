import { notFound } from 'next/navigation';

import {
  articles,
  articlesFallback,
  images,
  imagesFallback,
} from '@/features/articles/lib';

import { ArticleList, Banner, Heading, SwitchArticles } from './components';

export default async function Resources({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const articleValues = articles.map(({ value }) => value);
  const currentArticle = articleValues.includes(slug) ? slug : undefined;
  const imageSrc = images.get(slug);

  if (!currentArticle) {
    throw notFound();
  }

  return (
    <>
      <Banner imgUrl={imageSrc ?? imagesFallback} />
      <Heading />
      <SwitchArticles currentArticle={currentArticle} />
      <ArticleList article={currentArticle ?? articlesFallback} />
    </>
  );
}
