'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import {
  ArrowTopRight,
  CaseIcon,
  ChartIcon,
  HandshakeIcon,
  LightIcon,
  PeopleIcon,
  RocketIcon,
} from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './why-choose.module.scss';

export function WhyChoose() {
  const t = useTranslations('home.whyChoose');

  const reasons = [
    {
      icon: <HandshakeIcon />,
      title: t('0.title'),
      desc: t('0.desc'),
      imgPath: '/images/home/why-choose/1.jpeg',
    },
    {
      icon: <CaseIcon />,
      title: t('1.title'),
      desc: t('1.desc'),
      imgPath: '/images/home/why-choose/2.jpeg',
    },
    {
      icon: <RocketIcon />,
      title: t('2.title'),
      desc: t('2.desc'),
      imgPath: '/images/home/why-choose/3.jpeg',
    },
    {
      icon: <LightIcon />,
      title: t('3.title'),
      desc: t('3.desc'),
      imgPath: '/images/home/why-choose/4.jpeg',
    },
    {
      icon: <PeopleIcon />,
      title: t('4.title'),
      desc: t('4.desc'),
      imgPath: '/images/home/why-choose/5.jpeg',
    },
    {
      icon: <ChartIcon />,
      title: t('5.title'),
      desc: t('5.desc'),
      imgPath: '/images/home/why-choose/6.jpeg',
    },
  ];

  return (
    <section className={st.layout}>
      <Title level={2} className={st.title}>
        {t('title.0')} <br /> {t('title.1')}
      </Title>
      <section className={st.grid}>
        {reasons.map(reason => (
          <Card key={reason.title} {...reason} />
        ))}
      </section>
      <Link href="/about-us" className={st.navBtn}>
        <Button variant="primaryInverted" size="md">
          {t('uncover')}
          <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}

function Card({
  icon,
  desc,
  imgPath,
  title,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
  imgPath: string;
}) {
  return (
    <article className={st.card}>
      {icon}
      <section className={st.cardContent}>
        <Title level={3}>{title}</Title>
        <Text className={st.text}>{desc}</Text>
        <div className={st.imgLayout}>
          <Image className={st.img} src={imgPath} alt="img" fill />
        </div>
      </section>
    </article>
  );
}
