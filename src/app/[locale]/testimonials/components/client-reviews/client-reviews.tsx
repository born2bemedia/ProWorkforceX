'use client';

import { useTranslations } from 'next-intl';

import { Reviews } from '@/shared/ui/components/reviews';
import { Title } from '@/shared/ui/kit/title';

import st from './client-reviews.module.scss';

export function ClientReviews() {
  const t = useTranslations('testimonials.clientReviews');

  const reviews = [
    {
      text: t('0.text'),
      name: 'Anna P.',
      position: t('0.position'),
      company: 'Tech Innovations Ltd',
    },
    {
      text: t('1.text'),
      name: 'Michael R.',
      position: 'COO',
      company: 'FastTrack Logistics',
    },
    {
      text: t('2.text'),
      name: 'John D.',
      position: 'CEO',
      company: 'Creative Solutions Inc',
    },
    {
      text: t('3.text'),
      name: 'James W.',
      position: t('3.position'),
      company: 'Smart Business Solutions',
    },
    {
      text: t('4.text'),
      name: 'Sarah T.',
      position: t('4.position'),
      company: 'GlobalTech',
    },
    {
      text: t('4.text'),
      name: 'Clara M.',
      position: 'CEO',
      company: 'Growth Horizons Ltd',
    },
  ];

  return (
    <section className={st.layout}>
      <Title level={2} className={st.title}>
        {t('title')}
      </Title>
      <Reviews reviews={reviews} />
    </section>
  );
}
