'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Reviews } from '@/shared/ui/components/reviews';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './what-clients-say.module.scss';

export function WhatClientsSay() {
  const t = useTranslations('home.whatClientsSay');

  const reviews = [
    {
      text: t('0.text'),
      name: 'Sarah M.',
      position: t('0.position'),
    },
    {
      text: t('1.text'),
      name: 'Amanda P.',
      position: t('1.position'),
    },
    {
      text: t('2.text'),
      name: 'John D.',
      position: t('2.position'),
    },
    {
      text: t('3.text'),
      name: 'Michael R.',
      position: t('3.position'),
    },
    {
      text: t('4.text'),
      name: 'Jessica L.',
      position: t('4.position'),
    },
    {
      text: t('5.text'),
      name: 'Emily T.',
      position: t('5.position'),
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">
          {t('title.0')} <br /> {t('title.1')}
        </Title>
      </section>
      <Reviews reviews={reviews} />
      <Link href="/testimonials" className={st.navBtn}>
        <Button variant="primaryInverted">
          {t('readMore')} <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
