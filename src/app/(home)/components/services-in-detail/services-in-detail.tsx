'use client';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './services-in-detail.module.scss';

const services = [
  {
    title: 'HR Consultations & Advice',
    desc: 'Receive expert guidance on workforce strategy, employee rights, workplace dynamics, and compliance tailored to your company’s needs.',
    color: 'grey',
  },
  {
    title: 'Workplace Conflict Resolution',
    desc: 'Our professional mediation services resolve workplace conflicts quickly and effectively, fostering a harmonious and productive work environment.',
    color: 'secondary',
  },
  {
    title: 'Employee Engagement & Retention Strategies',
    desc: 'We help businesses develop effective strategies to improve employee engagement, enhance workplace culture, and boost retention, ensuring a motivated and loyal workforce.',
    color: 'grey',
  },
  {
    title: 'Talent Acquisition & Recruitment',
    desc: 'We assist businesses in finding the right candidates to meet your workforce needs, ensuring you hire the best talent for your organization.',
    color: 'secondary',
  },
  {
    title: 'Employee Development Programs',
    desc: 'We support businesses with tailored career development programs to enhance your employees’ skills, boost morale and retain talent.',
    color: 'grey',
  },
  {
    title: 'Leadership & Management Training',
    desc: 'We help businesses develop effective strategies to improve employee engagement, enhance workplace culture, and boost retention, ensuring a motivated and loyal workforce.',
    color: 'secondary',
  },
  {
    title: 'Employee Benefits Optimization',
    desc: 'Help your business maximize the value of employee benefits, ensuring that your package is competitive and attractive to top talent.',
    color: 'grey',
  },
  {
    title: 'Onboarding & Employee Integration',
    desc: 'We support businesses with tailored career development programs to enhance your employees’ skills, boost morale and retain talent.',
    color: 'grey',
  },
  {
    title: 'Workplace Well-being & Balance Coaching',
    desc: 'Support employees in a healthy work-life balance, improving their well-being and productivity.',
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
