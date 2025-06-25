'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './explore-pricing.module.scss';

export function ExplorePricing() {
  const t = useTranslations('solutions.explorePricing');

  return (
    <section className={st.layout}>
      <div className={st.textLayout}>
        <Title>{t('title')}</Title>
        <Text>
          {t('desc.0')} <br />
          <br />
          {t('desc.1')}
        </Text>
      </div>
      <Link href="/pricing-and-packages" style={{ zIndex: 5 }}>
        <Button variant="primaryInverted" size="md">
          {t('explore')}
          <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
