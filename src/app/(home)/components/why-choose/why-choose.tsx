'use client';

import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

const reasons = [
  {
    icon: <HandshakeIcon />,
    title: 'Expert HR Solutions for Businesses',
    desc: 'We provide customized HR solutions that align with your company’s unique needs, helping you attract, manage, and retain top talent.',
    imgPath: '/images/home/why-choose/1.jpeg',
  },
  {
    icon: <CaseIcon />,
    title: 'Experienced HR Guidance',
    desc: 'Our team of seasoned HR professionals offers expert advice to navigate complex HR challenges and optimize your workforce strategies.',
    imgPath: '/images/home/why-choose/2.jpeg',
  },
  {
    icon: <RocketIcon />,
    title: 'Talent Development & Career Advancement',
    desc: 'From upskilling to leadership development, we offer solutions that help your employees grow, fostering a motivated and capable workforce.',
    imgPath: '/images/home/why-choose/3.jpeg',
  },
  {
    icon: <LightIcon />,
    title: 'Comprehensive Employee Benefits Management',
    desc: 'We assist businesses in understanding and optimizing employee benefits, ensuring you provide the best package to attract and retain talent.',
    imgPath: '/images/home/why-choose/4.jpeg',
  },
  {
    icon: <PeopleIcon />,
    title: 'Workplace Conflict Resolution',
    desc: 'Our mediation services help resolve workplace conflicts efficiently, improving team dynamics and ensuring a harmonious work environment.',
    imgPath: '/images/home/why-choose/5.jpeg',
  },
  {
    icon: <ChartIcon />,
    title: 'Ongoing HR Support',
    desc: 'We don’t stop at the initial consultation. ProWorkforceX provides continuous support to help your business adapt to changing HR needs and ensure long-term success.',
    imgPath: '/images/home/why-choose/6.jpeg',
  },
];

export function WhyChoose() {
  return (
    <section className={st.layout}>
      <Title level={2} className={st.title}>
        Why Choose <br /> ProWorkforceX?
      </Title>
      <section className={st.grid}>
        {reasons.map(reason => (
          <Card key={reason.title} {...reason} />
        ))}
      </section>
      <Link href="/about" className={st.navBtn}>
        <Button variant="primaryInverted" size="md">
          Uncover What Drives Us
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
      <Title level={3}>{title}</Title>
      <Text className={st.text}>{desc}</Text>
      <div className={st.imgLayout}>
        <Image className={st.img} src={imgPath} alt="img" fill />
      </div>
    </article>
  );
}
