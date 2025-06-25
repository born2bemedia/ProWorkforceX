'use client';

import { type JSX } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CaseIcon, ChartIcon, HandshakeIcon } from '@/shared/ui/icons/green';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './benefits.module.scss';

export function Benefits() {
  const t = useTranslations('home.benefits');

  const benefits = [
    {
      icon: <HandshakeIcon />,
      tag: t('0.tag'),
      title: t('0.title'),
      desc: t('0.desc'),
    },
    {
      icon: <CaseIcon />,
      tag: t('1.tag'),
      title: t('1.title'),
      desc: t('1.desc'),
    },
    {
      icon: <ChartIcon />,
      tag: t('2.tag'),
      title: t('2.title'),
      desc: t('2.desc'),
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.cards}>
        {benefits.map(benefit => (
          <Card key={benefit.tag} {...benefit} />
        ))}
      </section>
      <Link href="/contact-us" className={st.contactLink}>
        <Button variant="primaryInverted" size="md">
          {t('contactUs')} <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}

function Card({
  tag,
  desc,
  icon,
  title,
}: {
  icon: JSX.Element;
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <article className={st.card}>
      {icon}
      <section className={st.cardText}>
        <Chip>{tag}</Chip>
        <Title level={3}>{title}</Title>
        <Text>{desc}</Text>
      </section>
    </article>
  );
}
