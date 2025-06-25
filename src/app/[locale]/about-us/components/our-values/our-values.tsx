'use client';

import type { JSX, ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Headline } from '@/shared/ui/components/headline';
import { CapaIcon, HelpIcon, RoadIcon } from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-values.module.scss';

export function OurValues() {
  const t = useTranslations('aboutUs.ourValues');

  const values = [
    {
      icon: <HelpIcon />,
      title: t('0.title'),
      desc: t('0.desc'),
      imgUrl: '/images/about-us/values/1.jpeg',
    },
    {
      icon: <RoadIcon />,
      title: t('1.title'),
      desc: t('1.desc'),
      imgUrl: '/images/about-us/values/2.jpeg',
    },
    {
      icon: <CapaIcon />,
      title: t('2.title'),
      desc: t('2.desc'),
      imgUrl: '/images/about-us/values/3.jpeg',
    },
  ];

  return (
    <section className={st.layout}>
      <Headline title={t('title')} description={t('desc')} number={1} />
      <section className={st.cards}>
        {values.map(value => (
          <Card key={value.title} {...value} />
        ))}
      </section>
    </section>
  );
}

function Card({
  imgUrl,
  desc,
  title,
  icon,
}: {
  icon: JSX.Element;
  title: ReactNode;
  desc: string;
  imgUrl: string;
}) {
  return (
    <article className={st.cardLayout}>
      {icon}
      <section className={st.cardContent}>
        <Title level={3}>{title}</Title>
        <Text color="primary" size="lg" className={st.textEl}>
          {desc}
        </Text>
        <div className={st.cardImg}>
          <Image className={st.imgEl} src={imgUrl} alt="img" fill />
        </div>
      </section>
    </article>
  );
}
