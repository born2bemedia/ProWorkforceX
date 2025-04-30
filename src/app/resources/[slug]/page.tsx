import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  articles,
  articlesFallback,
  images,
  imagesFallback,
} from '@/features/articles/lib';

import { ArticleList, Banner, Heading, SwitchArticles } from './components';
import { articlesMeta } from './meta';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;

  return {
    title: articlesMeta[awaitedParams.slug].title,
    description: articlesMeta[awaitedParams.slug].description,
    openGraph: {
      title: articlesMeta[awaitedParams.slug].title,
      description: articlesMeta[awaitedParams.slug].description,
    },
  };
}

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
