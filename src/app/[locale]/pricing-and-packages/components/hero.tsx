'use client';

import { useTranslations } from 'next-intl';

import { Hero as HeroComp } from '@/shared/ui/components/hero';

export function Hero() {
  const t = useTranslations('pricingAndPackages.hero');

  return (
    <HeroComp
      chipText={t('label')}
      title={t('title')}
      text={t('text')}
      imageUrl="/images/packages-and-pricing/hero.jpg"
    />
  );
}
