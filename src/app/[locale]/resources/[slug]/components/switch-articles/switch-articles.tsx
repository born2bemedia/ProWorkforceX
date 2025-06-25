'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { getArticles } from '@/features/articles/lib';

import st from './switch-articles.module.scss';

export function SwitchArticles({
  currentArticle,
}: {
  currentArticle?: string;
}) {
  const router = useRouter();
  const ta = useTranslations('resources.articles');

  const articles = getArticles(ta);

  const handleClick = (value: string) => router.push(`/resources/${value}`);

  return (
    <section className={st.layout}>
      {articles.map(({ value, label }) => (
        <span
          key={value}
          onClick={() => handleClick(value)}
          className={
            currentArticle === value ? st.activeSwitch : st.defaultSwitch
          }
          style={{ cursor: 'pointer' }}
        >
          {label}
        </span>
      ))}
    </section>
  );
}
