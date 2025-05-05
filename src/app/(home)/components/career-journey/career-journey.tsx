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
    title: 'The Future of Career Development: What’s Next in Employee Growth?',
    desc: 'From skill-building to remote work opportunities, career development is evolving fast. Find out what’s next and how to stay ahead of the competition.',
    url: '/resources/the-future-of-career-development',
  },
  {
    icon: <TableIcon />,
    title: 'Effective Conflict Resolution in the Workplace',
    desc: 'Managing conflict is a critical skill for maintaining a positive and productive environment. Discover how to address workplace challenges with effective strategies.',
    url: '/resources/effective-conflict-resolution',
  },
  {
    icon: <LoopIcon />,
    title: 'Navigating Employee Benefits: A Complete Guide for Employers',
    desc: 'Maximize your business’s benefits package and understand how to offer competitive entitlements to attract and retain top talent.',
    url: '/resources/navigating-employee-benefits',
  },
  {
    icon: <SecurityIcon />,
    title: 'Building a Work-Life Balance in the Modern Workplace',
    desc: 'Learn how to help your employees improve productivity and overall well-being by mastering the art of balancing professional and personal life.',
    url: '/resources/work-life-balance',
  },
];

export function CareerJourney() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">
          Stay Ahead in Your HR <br /> Strategy
        </Title>
        <Text className={st.text} color="primary">
          Business success requires continuous growth — stay ahead with
          insights, trends, and expert advice on HR strategies, employee
          development, and workplace management. Whether seeking guidance on
          workforce planning or looking to advance your HR practices, these
          resources will help you stay at the forefront of business success.
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
