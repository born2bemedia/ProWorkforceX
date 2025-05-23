'use client';

import Image from 'next/image';
import Link from 'next/link';

import { SolutionCard } from '@/features/solutions/components';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './solution.module.scss';

const solutions = [
  {
    title: 'HR Consultations & Advice',
    desc: 'Tailored guidance on career decisions, employee rights, and workplace management.',
  },
  {
    title: 'Talent Acquisition & Recruitment',
    desc: 'Helping businesses find the right talent to drive success.',
  },
  {
    title: 'Employee Benefits Optimization',
    desc: 'Ensuring your business offers the best benefits package to attract and retain employees.',
  },
  {
    title: 'Workplace Conflict Resolution',
    desc: 'Offering mediation services to resolve issues efficiently and professionally.',
  },
  {
    title: 'Career Development Programs',
    desc: 'Supporting employee growth through customized career development solutions.',
  },
  {
    title: 'Onboarding & Integration Support',
    desc: 'Ensuring new hires seamlessly integrate into your company culture.',
  },
];

export function Solution() {
  return (
    <section className={st.layout}>
      <section className={st.title}>
        <Title level={2} className={st.titleEl}>
          Your One-Stop HR Solution with ProWorkforceX
        </Title>
        <Text color="primary" size="lg" className={st.textEl}>
          We provide businesses with comprehensive services that support
          workforce management and HR operations. Here’s how we can help:
        </Text>
      </section>
      <section className={st.solutions}>
        <section className={st.cards}>
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} number={++i} {...solution} />
          ))}
        </section>
        <section className={st.img}>
          <Image
            src="/images/home/solutions.png"
            alt="solutions"
            width={648}
            height={760}
            unoptimized
            style={{ width: '100%', borderRadius: '24px', objectFit: 'cover' }}
          />
        </section>
      </section>
      <Link href="/solutions" className={st.navBtn}>
        <Button variant="primaryInverted" size="md">
          Explore Our Solutions <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
