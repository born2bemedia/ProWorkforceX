'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './services-in-detail.module.scss';

export function ServicesInDetail() {
  const t = useTranslations('home.servicesInDetail');

  const services = [
    {
      title: t('0.title'),
      desc: t('0.desc'),
      color: 'grey',
    },
    {
      title: t('1.title'),
      desc: t('1.desc'),
      color: 'secondary',
    },
    {
      title: t('2.title'),
      desc: t('2.desc'),
      color: 'grey',
    },
    {
      title: t('3.title'),
      desc: t('3.desc'),
      color: 'secondary',
    },
    {
      title: t('4.title'),
      desc: t('4.desc'),
      color: 'grey',
    },
    {
      title: t('5.title'),
      desc: t('5.desc'),
      color: 'secondary',
    },
    {
      title: t('6.title'),
      desc: t('6.desc'),
      color: 'grey',
    },
    {
      title: t('7.title'),
      desc: t('7.desc'),
      color: 'grey',
    },
    {
      title: t('8.title'),
      desc: t('8.desc'),
      color: 'grey',
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">Our Services in Detail</Title>
        <Text className={st.text} color="gray600">
          Discover how ProWorkforceX can help you with a range of HR services
          designed to elevate your career and manage your personal HR needs
          effectively:
        </Text>
      </section>
      <section className={st.grid}>
        {services.map(service => (
          <Card key={service.title} {...service} />
        ))}
      </section>
    </section>
  );
}

function Card({
  color,
  desc,
  title,
}: {
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <article
      className={cn(st.card, {
        [st.secondaryCard]: color === 'secondary',
        [st.greyCard]: color === 'grey',
      })}
    >
      <Title level={5} weight={600} color="primary">
        {title}
      </Title>
      <Text size="2xl" color="primary">
        {desc}
      </Text>
    </article>
  );
}
