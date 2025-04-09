'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './solution.module.scss';

const solutions = [
  {
    title: 'HR Consultations & Advice',
    desc: 'Receive tailored advice on career decisions, workplace dynamics, and more.',
  },
  {
    title: 'Resume Writing & Interview Coaching',
    desc: 'Professional services to polish your resume and help you ace interviews.',
  },
  {
    title: 'Employee Benefits Optimization',
    desc: 'Ensure you are fully aware of and make the most of your employee benefits.',
  },
  {
    title: 'Workplace Conflict Resolution',
    desc: 'We offer expert mediation to resolve workplace issues.',
  },
  {
    title: 'Career Development Programs',
    desc: 'Invest in your future with comprehensive programs that promote professional growth.',
  },
  {
    title: 'Personalized Job Search Assistance',
    desc: 'Get support in finding the right job opportunities that align with your skills and career goals, with guidance on applications and networking strategies.',
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
          At ProWorkforceX, we specialize in providing comprehensive HR services
          designed to meet the needs of individuals. Whether you want to advance
          your career, optimize employee benefits, or need expert HR advice,
          we’re here to help you achieve your objectives.
        </Text>
      </section>
      <section className={st.solutions}>
        <section className={st.cards}>
          {solutions.map((solution, i) => (
            <Card key={solution.title} number={i++} {...solution} />
          ))}
        </section>
        <Image
          className={st.img}
          src="/images/home/solutions.png"
          alt="solutions"
          width={648}
          height={829}
        />
      </section>
      <Link href="/solutions" className={st.navBtn}>
        <Button variant="primaryInverted" size="md">
          Explore Our Solutions <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}

function Card({
  number,
  desc,
  title,
}: {
  title: string;
  desc: string;
  number: number;
}) {
  return (
    <article className={st.card}>
      <section className={st.cardTop}>
        <div className={st.cardTitle}>
          <Text className={st.cardNum} size="sm">
            {number}
          </Text>
          <Title level={3}>{title}</Title>
        </div>
        <ArrowTopRight />
      </section>
      <Divider className={st.divider} />
      <Text size="xl" color="primary">
        {desc}
      </Text>
    </article>
  );
}
