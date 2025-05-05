'use client';

import { FloatingCards } from '@/shared/ui/components/floating-cards';
import {
  GiftIcon,
  GraphUp,
  HarmonyIcon,
  PersonsIcon,
} from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-team.module.scss';

const items = [
  {
    category: 'Growth',
    icon: <GraphUp />,
    title: 'Talent Acquisition Experts',
    desc: 'Our recruitment specialists help businesses find and secure top talent to drive success and business growth.',
  },
  {
    category: 'Benefits',
    icon: <GiftIcon />,
    title: 'Employee Benefits Specialists',
    desc: 'We help companies optimize their employee benefits packages, ensuring they are competitive and attract top talent.',
  },
  {
    category: 'Harmony',
    icon: <HarmonyIcon />,
    title: 'Workplace Mediation Professionals',
    desc: 'Our mediation specialists help resolve workplace conflicts quickly and efficiently, ensuring a positive and productive environment.',
  },
  {
    category: 'Guidance',
    icon: <PersonsIcon />,
    title: 'HR Consultants',
    desc: 'We provide comprehensive HR advice on everything from employee rights to compliance and best practices for workplace dynamics.',
  },
];

export function OurTeam() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={2}>Our Team</Title>
        <Text color="primary" size="lg">
          At ProWorkforceX, our team of dedicated HR professionals has years of
          experience supporting businesses through various HR challenges. We
          work with companies to ensure effective workforce management,
          providing personalized advice and solutions that align with your
          business goals.
        </Text>
      </section>
      <FloatingCards items={items} />
    </section>
  );
}
