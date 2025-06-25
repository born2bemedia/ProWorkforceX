'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Headline } from '@/shared/ui/components/headline';
import { CupIcon, MindIcon, SupportIcon } from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';

import st from './our-commitment.module.scss';

export function OurCommitment() {
  const t = useTranslations('aboutUs.ourCommitment');

  const items = [
    {
      title: t('0.title'),
      desc: t('0.desc'),
      icon: <SupportIcon />,
    },
    {
      title: t('1.title'),
      desc: t('1.desc'),
      icon: <MindIcon />,
    },
    {
      title: t('2.title'),
      desc: t('2.desc'),
      icon: <CupIcon />,
    },
  ];

  return (
    <section className={st.layout}>
      <Headline title={t('title')} description={t('desc')} number={5} />
      <section className={st.cardsWithImg}>
        <section className={st.cards}>
          {items.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
        <section className={st.cardImgLayout}>
          <Image
            className={st.img}
            src="/images/about-us/our-commit.png"
            alt="img"
            unoptimized
            fill
          />
        </section>
      </section>
    </section>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: JSX.Element;
}) {
  return (
    <article className={st.card}>
      <div className={st.cardIcon}>{icon}</div>
      <section className={st.cardText}>
        <Text size="3xl" color="primary" weight={500}>
          {title}
        </Text>
        <Text size="lg" color="primary">
          {desc}
        </Text>
      </section>
    </article>
  );
}
