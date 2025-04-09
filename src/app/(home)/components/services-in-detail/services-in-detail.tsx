'use client';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './services-in-detail.module.scss';

const services = [
  {
    title: 'HR Consultations & Advice',
    desc: 'Receive customized career, employee rights, and workplace management advice.',
    color: 'grey',
  },
  {
    title: 'Resume Writing & Interview Coaching',
    desc: 'Boost your chances of landing your ideal job with professional resume writing and coaching services.',
    color: 'secondary',
  },
  {
    title: 'Employee Benefits Optimization',
    desc: 'Get help understanding and maximizing your benefits package.',
    color: 'grey',
  },
  {
    title: 'Career Development Programs',
    desc: 'Ongoing support for skill enhancement, career planning, and professional growth.',
    color: 'grey',
  },
  {
    title: 'Workplace Conflict Resolution',
    desc: 'Expert mediation and guidance to resolve workplace conflicts.',
    color: 'secondary',
  },
  {
    title: 'Personalized Job Search Assistance',
    desc: 'Get help understanding and maximizing your benefits package.',
    color: 'grey',
  },
];

export function ServicesInDetail() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">Our Services in Detail</Title>
        <Text className={st.text} color="gray600">
          Discover how ProWorkforceX can help you with a range of HR services
          designed to elevate your career and manage your personal HR needs
          effectively:
        </Text>
      </section>
      <section className={st.grid}>
        {services.map(service => (
          <Card key={service.title} {...service} />
        ))}
      </section>
    </section>
  );
}

function Card({
  color,
  desc,
  title,
}: {
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <article
      className={cn(st.card, {
        [st.secondaryCard]: color === 'secondary',
        [st.greyCard]: color === 'grey',
      })}
    >
      <Title level={5} weight={600} color="primary">
        {title}
      </Title>
      <Text size="2xl" color="primary">
        {desc}
      </Text>
    </article>
  );
}
