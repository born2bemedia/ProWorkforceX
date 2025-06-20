'use client';

import type { JSX } from 'react';

import {
  CartIcon,
  ChipIcon,
  EducationIcon,
  Hammers,
  Health,
  Money,
  OrderHand,
  Tool,
} from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-clients.module.scss';

const domains = [
  {
    icon: <ChipIcon />,
    title: 'Technology',
    desc: 'Helping tech companies build high-performing teams and develop agile HR solutions to drive innovation.',
  },
  {
    icon: <Money />,
    title: 'Finance',
    desc: 'Offering strategic HR services to financial institutions, ensuring talent acquisition and retention in a highly competitive industry.',
  },
  {
    icon: <Health />,
    title: 'Healthcare',
    desc: 'Providing specialized HR services to healthcare organizations, ensuring compliance and employee well-being.',
  },
  {
    icon: <OrderHand />,
    title: 'Hospitality',
    desc: 'Supporting hospitality businesses with efficient HR management, and creating a culture of service excellence.',
  },
  {
    icon: <CartIcon />,
    title: 'Retail',
    desc: 'Supporting retail businesses in managing a dynamic workforce and enhancing customer-facing HR operations.',
  },
  {
    icon: <EducationIcon />,
    title: 'Education',
    desc: 'Assisting educational institutions with staffing, compliance, and development programs for administrative staff.',
  },
  {
    icon: <Tool />,
    title: 'Manufacturing',
    desc: 'Helping manufacturing companies optimize their workforce, manage compliance, and improve employee engagement.',
  },
  {
    icon: <Hammers />,
    title: 'Construction',
    desc: 'Helping construction companies with labor compliance, safety regulations, and an efficient HR system for managing large teams.',
  },
];

export function OurClients() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={2} className={st.title}>
          Our Clients Across Industries
        </Title>
        <Text color="primary" size="lg" className={st.text}>
          We work with companies of all sizes, across a broad range of
          industries. From small businesses to large enterprises, ProWorkforceX
          provides customized HR solutions to meet the specific needs of each
          industry.
        </Text>
      </section>
      <section className={st.cards}>
        {domains.map(domain => (
          <Card key={domain.title} {...domain} />
        ))}
      </section>
    </section>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) {
  return (
    <article className={st.cardLayout}>
      {icon}
      <section className={st.cardTextLayout}>
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
