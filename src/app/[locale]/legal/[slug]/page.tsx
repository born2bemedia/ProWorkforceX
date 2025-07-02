import React from 'react';
import type { Metadata } from 'next';

import { getPage } from '@/features/policy/policy';

import st from './page.module.scss';

// export async function generateStaticParams(): Promise<
//   {
//     slug: string;
//   }[]
// > {
//   const slugs = await getPageSlugs();
//   return slugs.map(slug => ({ slug }));
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const { slug, locale } = awaitedParams;
  const page = await getPage(slug, locale);
  const pageTitle = `${page.title} | ProWorkforceX`;
  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      images: 'https://i.ibb.co/1t2ZCF6J/1024-518.png',
    },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const awaitedParams = await params;
  const { slug, locale } = awaitedParams;
  console.log('@slug', slug);
  console.log('@locale', locale);
  const page = await getPage(slug, locale);

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
