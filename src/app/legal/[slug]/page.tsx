import React from 'react';
import type { Metadata } from 'next';

import { getPage, getPageSlugs } from '@/features/policy/policy';

import st from './page.module.scss';

type PageParams = {
  slug: string;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const slugs = await getPageSlugs();

  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const slug = awaitedParams.slug;
  const page = await getPage(slug);
  const pageTitle = `${page.title} | ProWorkforceX`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: '',
    },
  };
}

type Props = {
  params: PageParams;
};

export default async function PolicyPage(props: Props) {
  const awaitedParams = await props.params;
  const slug = awaitedParams.slug;
  const page = await getPage(slug);
  return (
    <>
      <section className={st.policy}>
        <div className={st.policy__body}>
          <div className={st.sectionTitle}>
            <h1>{page.title}</h1>
            <div className={st.date}>Updated On {page.date}</div>
          </div>
          <article
            dangerouslySetInnerHTML={{ __html: page.body }}
            className={st.policy__content}
          />
        </div>
      </section>
    </>
  );
}
