'use client';

import { useTranslations } from 'next-intl';

import { Packages } from '@/features/package/components';

import { Text } from '@/shared/ui/kit/text';

import { WhyChoose } from '../why-choose';
import st from './one-time-purchase.module.scss';

export function OneTimePurchase() {
  const t = useTranslations('pricingAndPackages.packages.oneTimePurchase');

  const whyChoose = [
    {
      title: t('whyChoose.0.title'),
      text: t('whyChoose.0.desc'),
    },
    {
      title: t('whyChoose.1.title'),
      text: t('whyChoose.1.desc'),
    },
    {
      title: t('whyChoose.2.title'),
      text: t('whyChoose.2.desc'),
    },
    {
      title: t('whyChoose.3.title'),
      text: t('whyChoose.3.desc'),
    },
    {
      title: t('whyChoose.4.title'),
      text: t('whyChoose.4.desc'),
    },
  ];

  return (
    <section>
      <Text className={st.title} size="3xl" weight={500} color="primary">
        {t('title')}
      </Text>
      <Text className={st.text} size="lg" color="primary">
        {t('text')}
      </Text>
      <Packages type="one-time" />
      <WhyChoose
        title={t('whyChoose.title')}
        desc={t('whyChoose.desc')}
        values={whyChoose}
      />
    </section>
  );
}
