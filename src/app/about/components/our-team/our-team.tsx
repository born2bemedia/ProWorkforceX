'use client';

import type { JSX } from 'react';

import { cn } from '@/shared/lib/styles';
import {
  GiftIcon,
  GraphUp,
  HarmonyIcon,
  PersonsIcon,
} from '@/shared/ui/icons/yellow';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-team.module.scss';

const items = [
  {
    category: 'Growth',
    icon: <GraphUp />,
    title: 'Career Coaching Experts',
    desc: 'Our crew of career coaches helps you set clear career goals, enhance your professional skills, and navigate key transitions.',
  },
  {
    category: 'Benefits',
    icon: <GiftIcon />,
    title: 'Employee Benefits Specialists',
    desc: 'Experts in employee benefits management ensure you optimize your entitlements and maximize your options.',
  },
  {
    category: 'Harmony',
    icon: <HarmonyIcon />,
    title: 'Workplace Mediation Professionals',
    desc: 'Our workplace mediation specialists help resolve conflicts efficiently, fostering a healthy, productive work environment.',
  },
  {
    category: 'Guidance',
    icon: <PersonsIcon />,
    title: 'HR Consultants',
    desc: 'Our HR consultants provide comprehensive advice on employee rights, workplace dynamics, and navigating complex HR issues.',
  },
];

export function OurTeam() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={2}>Our Team</Title>
        <Text color="primary" size="lg">
          A dedicated team of HR professionals powers ProWorkforceX, with years
          of experience supporting individuals through career challenges and
          workplace dynamics. Each team member is committed to providing
          personalized guidance and support, helping clients make informed
          decisions that positively impact their careers.
        </Text>
      </section>
      <section className={st.cards}>
        {items.map((item, i) => (
          <Card key={item.title} index={i} {...item} />
        ))}
      </section>
    </section>
  );
}

function Card({
  icon,
  desc,
  category,
  title,
  index,
}: {
  category: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <article
      className={cn(st.card, {
        [st.marginB]: index === 1,
        [st.marginT]: index === 3,
      })}
    >
      <section className={st.cardTitle}>
        <Text color="primary" size="lg">
          {category}
        </Text>
        {icon}
      </section>
      <Divider className={st.divider} />
      <section className={st.cardContent}>
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
