'use client';

import { Reviews } from '@/shared/ui/components/reviews';
import { Title } from '@/shared/ui/kit/title';

import st from './client-reviews.module.scss';

const reviews = [
  {
    text: 'ProWorkforceX helped us streamline our hiring process and reduce turnover by 25%. Their talent acquisition services were exceptional, and they took the time to understand our company’s culture and values.',
    name: 'Anna P.',
    position: 'HR Director',
    company: 'Tech Innovations Ltd',
  },
  {
    text: 'We faced serious workplace conflict that was affecting productivity. Thanks to ProWorkforceX’s mediation services, we resolved the issues quickly and professionally, leading to a healthier work environment.',
    name: 'Michael R.',
    position: 'COO',
    company: 'FastTrack Logistics',
  },
  {
    text: 'We needed help improving employee engagement, and ProWorkforceX exceeded our expectations. They provided us with insightful strategies and assisted with execution, which led to a measurable increase in employee satisfaction.',
    name: 'John D.',
    position: 'CEO',
    company: 'Creative Solutions Inc',
  },
  {
    text: 'ProWorkforceX’s benefits optimization program saved us thousands. They helped us create a more competitive benefits package that saved money and increased employee satisfaction and retention.',
    name: 'James W.',
    position: 'HR Manager',
    company: 'Smart Business Solutions',
  },
  {
    text: 'Our leadership team underwent management training with ProWorkforceX, and it was a game-changer. The skills they taught our managers were immediately implemented, leading to a more cohesive and productive team.',
    name: 'Sarah T.',
    position: 'Operations Manager',
    company: 'GlobalTech',
  },
  {
    text: 'The team at ProWorkforceX provided invaluable support during our company’s expansion. Their expert advice on HR compliance helped us avoid costly mistakes, and their employee onboarding solutions ensured a smooth integration of new hires.',
    name: 'Clara M.',
    position: 'CEO',
    company: 'Growth Horizons Ltd',
  },
];

export function ClientReviews() {
  return (
    <section className={st.layout}>
      <Title level={2} className={st.title}>
        Client Reviews
      </Title>
      <Reviews reviews={reviews} />
    </section>
  );
}
