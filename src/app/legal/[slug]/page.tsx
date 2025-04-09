import React from 'react';

import { getPage, getPageSlugs } from '@/features/policy/policy';

import st from './page.module.scss';

export async function generateStaticParams() {
  const slugs = await getPageSlugs();

  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
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

export default async function PolicyPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
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
