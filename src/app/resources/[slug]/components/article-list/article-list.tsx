'use client';

import { articlesComponents } from '@/features/articles/lib/articles-comps';

export function ArticleList({ article }: { article: string }) {
  const ArticleComp = articlesComponents[article];

  return <>{ArticleComp}</>;
}
