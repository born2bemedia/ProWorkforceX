'use client';

import type { JSX } from 'react';

import { useRequestDialogStore } from '@/features/request-form/services';

import { cn } from '@/shared/lib/styles';
import { IconCard } from '@/shared/ui/components/icon-card';
import {
  ArrowTopRight,
  ChampIcon,
  GraphUp,
  HandshakeIcon,
  PersonsIcon,
  RoadIcon,
} from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './choose-our-process.module.scss';

const reasons = [
  {
    icon: <ChampIcon />,
    title: 'Tailored to Your Business',
    desc: 'Every process step is customized to fit your company’s unique needs and goals.',
  },
  {
    icon: <PersonsIcon />,
    title: 'Expert HR Team',
    desc: 'Work with experienced HR who deeply understand business needs and employee satisfaction.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Continuous Support',
    desc: 'We don’t just implement and leave; we offer ongoing support to ensure long-term success.',
  },
  {
    icon: <GraphUp />,
    title: 'Data-Driven Decisions',
    desc: 'Our approach is rooted in data and measurable results, ensuring your business always gets the best value',
  },
  {
    icon: <RoadIcon />,
    title: 'Proven Track Record',
    desc: 'Our process has helped many businesses streamline their HR functions, enhance employee engagement, and achieve significant growth.',
  },
];

export function ChooseOurProcess() {
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <Title className={st.title}>Why Choose Our Process?</Title>
      <section className={st.cards}>
        <div className={cn(st.row, st.firstRow)}>
          {reasons.slice(0, 3).map(({ desc, title, icon }) => (
            <IconCard key={title} title={title} text={desc} icon={icon} />
          ))}
        </div>
        <div className={cn(st.row, st.secondRow)}>
          {reasons.slice(3, 5).map(({ desc, title, icon }) => (
            <IconCard key={title} title={title} text={desc} icon={icon} />
          ))}
        </div>
      </section>
      <Button
        variant="primaryInverted"
        size="md"
        className={st.btn}
        onClick={() => setOpen(true)}
      >
        Get Started with ProWorkforceX <ArrowTopRight />
      </Button>
    </section>
  );
}
