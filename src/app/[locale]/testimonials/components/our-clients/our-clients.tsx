'use client';

import type { JSX } from 'react';
import { useTranslations } from 'next-intl';

import {
  CartIcon,
  ChipIcon,
  EducationIcon,
  Hammers,
  Health,
  Money,
  OrderHand,
  Tool,
} from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-clients.module.scss';

export function OurClients() {
  const t = useTranslations('testimonials.ourClients');

  const domains = [
    {
      icon: <ChipIcon />,
      title: t('0.title'),
      desc: t('0.desc'),
    },
    {
      icon: <Money />,
      title: t('1.title'),
      desc: t('1.desc'),
    },
    {
      icon: <Health />,
      title: t('2.title'),
      desc: t('2.desc'),
    },
    {
      icon: <OrderHand />,
      title: t('3.title'),
      desc: t('3.desc'),
    },
    {
      icon: <CartIcon />,
      title: t('4.title'),
      desc: t('4.desc'),
    },
    {
      icon: <EducationIcon />,
      title: t('5.title'),
      desc: t('5.desc'),
    },
    {
      icon: <Tool />,
      title: t('6.title'),
      desc: t('6.desc'),
    },
    {
      icon: <Hammers />,
      title: t('7.title'),
      desc: t('7.desc'),
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={2} className={st.title}>
          {t('title')}
        </Title>
        <Text color="primary" size="lg" className={st.text}>
          {t('desc')}
        </Text>
      </section>
      <section className={st.cards}>
        {domains.map(domain => (
          <Card key={domain.title} {...domain} />
        ))}
      </section>
    </section>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) {
  return (
    <article className={st.cardLayout}>
      {icon}
      <section className={st.cardTextLayout}>
        <Text color="primary" size="3xl" weight={500}>
          {title}
        </Text>
        <Text color="primary" size="lg">
          {desc}
        </Text>
      </section>
    </article>
  );
}
