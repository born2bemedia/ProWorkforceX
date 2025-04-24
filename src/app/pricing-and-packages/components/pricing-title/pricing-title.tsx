'use client';

import { Title } from '@/shared/ui/kit/title';

import st from './pricing-title.module.scss';

export function PricingTitle() {
  return (
    <Title className={st.title} level={2}>
      Pricing
    </Title>
  );
}
