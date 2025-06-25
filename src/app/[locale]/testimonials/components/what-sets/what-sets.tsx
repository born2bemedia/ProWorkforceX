'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Headline } from '@/shared/ui/components/headline';
import { ChartsIcon, CheckUser, Puzzle } from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';

import st from './what-sets.module.scss';

export function WhatSets() {
  const t = useTranslations('testimonials.whatSetsUsApart');

  const items = [
    {
      icon: <CheckUser />,
      title: t('0.title'),
      desc: t('0.desc'),
    },
    {
      icon: <Puzzle />,
      title: t('1.title'),
      desc: t('1.desc'),
    },
    {
      icon: <ChartsIcon />,
      title: t('2.title'),
      desc: t('2.desc'),
    },
  ];

  return (
    <section className={st.layout}>
      <Headline title={t('title')} description={t('desc')} number={4} />
      <section className={st.contentLayout}>
        <section className={st.cards}>
          {items.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
        <Image
          className={st.img}
          src="/images/testimonials/girl.jpg"
          alt="girl"
          width={644}
          height={450}
          unoptimized
        />
      </section>
    </section>
  );
}

function Card({
  icon,
  desc,
  title,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) {
  return (
    <article className={st.cardLayout}>
      <span className={st.cardIcon}>{icon}</span>
      <section className={st.cardTitle}>
        <Text color="primary" size="3xl" weight={500}>
          {title}
        </Text>
        <Text color="primary" size="lg">
          {desc}
        </Text>
      </section>
    </article>
  );
}
