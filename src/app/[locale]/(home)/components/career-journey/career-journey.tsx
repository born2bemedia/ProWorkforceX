'use client';

import type { JSX } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import {
  LineUpIcon,
  LoopIcon,
  SecurityIcon,
  TableIcon,
} from '@/shared/ui/icons/grey';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './career-journey.module.scss';

export function CareerJourney() {
  const t = useTranslations('home.careerJourney');

  const steps = [
    {
      icon: <LineUpIcon />,
      title: t('0.title'),
      desc: t('0.desc'),
      url: '/resources/the-future-of-career-development',
    },
    {
      icon: <TableIcon />,
      title: t('1.title'),
      desc: t('1.desc'),
      url: '/resources/effective-conflict-resolution',
    },
    {
      icon: <LoopIcon />,
      title: t('2.title'),
      desc: t('2.desc'),
      url: '/resources/navigating-employee-benefits',
    },
    {
      icon: <SecurityIcon />,
      title: t('3.title'),
      desc: t('3.desc'),
      url: '/resources/work-life-balance',
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">
          {t('title.0')} <br /> {t('title.1')}
        </Title>
        <Text className={st.text} color="primary">
          {t('desc')}
        </Text>
      </section>
      <section className={st.grid}>
        {steps.map(step => (
          <Card key={step.title} {...step} />
        ))}
      </section>
      <Link
        href="/resources/the-future-of-career-development"
        className={st.navBtn}
      >
        <Button variant="primaryInverted">
          {t('dive')} <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}

function Card({
  url,
  title,
  icon,
  desc,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
  url: string;
}) {
  const t = useTranslations('home.careerJourney');

  return (
    <article className={st.card}>
      <section className={st.cardTitle}>
        {icon}
        <Title level={3}>{title}</Title>
      </section>
      <Text color="primary" size="lg">
        {desc}
      </Text>
      <Link href={url}>
        <button className={st.btn}>
          <span>{t('readMore')}</span> <ArrowTopRight />
        </button>
      </Link>
    </article>
  );
}
