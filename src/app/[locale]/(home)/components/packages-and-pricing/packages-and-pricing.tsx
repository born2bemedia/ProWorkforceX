'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './packages-and-pricing.module.scss';

export function PackagesAndPricing() {
  const t = useTranslations('home.packagesAndPricing');

  const packages = [
    {
      title: t('0.title'),
      desc: t('0.desc'),
    },
    {
      title: t('1.title'),
      desc: t('1.desc'),
    },
    {
      title: t('2.title'),
      desc: t('2.desc'),
    },
  ];
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">
          {t('title.0')} <br /> {t('title.1')}
        </Title>
        <Text className={st.text} color="gray600">
          {t('desc')}
        </Text>
      </section>
      <section className={st.cards}>
        {packages.map(pckg => (
          <Card key={pckg.title} {...pckg} />
        ))}
      </section>
      <Link href="/pricing-and-packages" className={st.navBtn}>
        <Button variant="primaryInverted" size="md">
          {t('browse')}
          <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <article className={st.card}>
      <Title level={3}>{title}</Title>
      <Text color="primary" size="lg">
        {desc}
      </Text>
    </article>
  );
}
