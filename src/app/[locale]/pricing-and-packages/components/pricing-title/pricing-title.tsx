'use client';

import { useTranslations } from 'next-intl';

import { Title } from '@/shared/ui/kit/title';

import st from './pricing-title.module.scss';

export function PricingTitle() {
  const t = useTranslations('pricingAndPackages.pricingTitle');

  return (
    <Title className={st.title} level={2}>
      {t('title')}
    </Title>
  );
}
