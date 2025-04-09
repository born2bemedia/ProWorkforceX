'use client';

import type { JSX } from 'react';
import Link from 'next/link';

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

const steps = [
  {
    icon: <LineUpIcon />,
    title: 'Growth?',
    desc: 'Deep insights into your industry and competitors.',
    url: '#',
  },
  {
    icon: <TableIcon />,
    title: 'Effective Conflict Resolution in the Workplace',
    desc: 'Managing conflict is an essential skill for career growth. Discover how to address workplace challenges to maintain a positive, productive environment.',
    url: '#',
  },
  {
    icon: <LoopIcon />,
    title: 'Navigating Employee Benefits: A Complete Guide',
    desc: 'Maximize your benefits package and understand your entitlements. This guide helps you maximize what your employer offers to improve your career and well-being.',
    url: '#',
  },
  {
    icon: <SecurityIcon />,
    title: 'Building a Work-Life Balance in a Fast-Paced World',
    desc: 'Learn how to improve your productivity and overall well-being by mastering the art of balancing professional and personal life.',
    url: '#',
  },
];

export function CareerJourney() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">
          Stay Ahead in Your Career <br /> Journey
        </Title>
        <Text className={st.text} color="primary">
          Success in the workplace demands constant growth — stay ahead with
          insights, trends, and expert advice on career development, HR
          strategies, and workplace dynamics. Whether seeking guidance or aiming
          for career advancement, these readings will help you stay at the
          forefront of professional success.
        </Text>
      </section>
      <Title level={6} className={st.subTitle}>
        The Future of Career Development: What’s Next in Personal
      </Title>
      <section className={st.grid}>
        {steps.map(step => (
          <Card key={step.title} {...step} />
        ))}
      </section>
      <Link href="/resources" className={st.navBtn}>
        <Button variant="primaryInverted">
          Dive Into Resources <ArrowTopRight />
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
        <Button variant="outline" size="md">
          Read More <ArrowTopRight />
        </Button>
      </Link>
    </article>
  );
}
