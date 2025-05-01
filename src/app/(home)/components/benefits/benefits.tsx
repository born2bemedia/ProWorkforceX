'use client';

import type { JSX } from 'react';
import Link from 'next/link';

import { sendRequestForm } from '@/features/request-form/services';

import { CaseIcon, ChartIcon, HandshakeIcon } from '@/shared/ui/icons/green';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './benefits.module.scss';

const benefits = [
  {
    icon: <HandshakeIcon />,
    tag: 'Support',
    title: 'Customized HR Solutions for Your Business Needs',
    desc: 'We tailor each service to meet your company’s specific HR objectives, ensuring the most effective and efficient support for your workforce. We are committed to helping your business thrive, from talent acquisition to employee development.',
  },
  {
    icon: <CaseIcon />,
    tag: 'Growth',
    title: 'Expert HR Guidance Every Step of the Way',
    desc: 'Our team of experienced HR professionals provides ongoing support for your business. We help you navigate complex HR challenges, from optimizing employee benefits to resolving workplace conflicts. We ensure your business has the HR expertise it needs to succeed.',
  },
  {
    icon: <ChartIcon />,
    tag: 'Impact',
    title: 'Proven Track Record of Success',
    desc: 'Thanks to our strategic HR solutions, our clients consistently report positive outcomes. Whether it’s smoother recruitment, improved employee retention, or better workplace dynamics, ProWorkforceX helps businesses achieve measurable success.',
  },
];

export function Benefits() {
  return (
    <section className={st.layout}>
      <button
        onClick={() =>
          sendRequestForm({
            email: 'daniil.metelia@gmail.com',
            fullName: 'Daniil',
            website: '',
            phone: '',
            budget: '',
            companyName: '',
            projectTimeline: '',
            contactMethod: '',
            services: [],
            careerInterests: '',
            industry: '',
            skills: '',
            jobRoles: '',
            goals: '',
          })
        }
      >
        COntact
      </button>
      <section className={st.cards}>
        {benefits.map(benefit => (
          <Card key={benefit.tag} {...benefit} />
        ))}
      </section>
      <Link href="/contact-us" className={st.contactLink}>
        <Button variant="primaryInverted" size="md">
          Contact Us <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}

function Card({
  tag,
  desc,
  icon,
  title,
}: {
  icon: JSX.Element;
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <article className={st.card}>
      {icon}
      <section className={st.cardText}>
        <Chip>{tag}</Chip>
        <Title level={3}>{title}</Title>
        <Text>{desc}</Text>
      </section>
    </article>
  );
}
