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
    title: 'Personalized HR Solutions',
    desc: 'Every individual’s journey is unique. Our services are tailored to your career goals, HR needs, and personal aspirations.',
    imgPath: '/images/home/why-choose/1.jpeg',
  },
  {
    icon: <CaseIcon />,
    title: 'Expert HR Guidance',
    desc: 'Our team comprises experienced HR professionals who provide expert advice to help you navigate your career and HR challenges',
    imgPath: '/images/home/why-choose/2.jpeg',
  },
  {
    icon: <RocketIcon />,
    title: 'Career Advancement Opportunities',
    desc: 'Whether you’re looking to upskill, get promoted, or change careers, ProWorkforceX offers targeted solutions to help you move forward.',
    imgPath: '/images/home/why-choose/3.jpeg',
  },
  {
    icon: <LightIcon />,
    title: 'Comprehensive Employee Benefits Support',
    desc: 'We guide you through understanding and optimizing your employee benefits to ensure you get the most out of your entitlements.',
    imgPath: '/images/home/why-choose/4.jpeg',
  },
  {
    icon: <PeopleIcon />,
    title: 'Workplace Conflict Resolution',
    desc: 'We offer mediation and support, helping you efficiently and professionally resolve workplace conflicts.',
    imgPath: '/images/home/why-choose/5.jpeg',
  },
  {
    icon: <ChartIcon />,
    title: 'Ongoing Career Support',
    desc: 'Our commitment doesn’t stop with one consultation. We provide continuous support and advice, helping you grow throughout your career.',
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
      <Link href="/about-us" className={st.navBtn}>
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
