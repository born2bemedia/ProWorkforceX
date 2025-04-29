'use client';

import Link from 'next/link';

import { Reviews } from '@/shared/ui/components/reviews';
import { ArrowTopRight, Stars } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './what-clients-say.module.scss';

const reviews = [
  {
    text: 'ProWorkforceX helped us streamline our recruitment process and find the right talent for key positions. Their advice on employee benefits has been invaluable.',
    name: 'Sarah M.',
    position: 'HR Manager',
  },
  {
    text: 'ProWorkforceX guided us through optimizing our employee benefits. Their strategic input helped us create a more attractive package, increasing employee satisfaction.',
    name: 'Amanda P.',
    position: 'HR Director',
  },
  {
    text: 'The workplace conflict resolution service was exactly what we needed. ProWorkforceX helped us mediate a challenging situation with a team member, resulting in a positive outcome.',
    name: 'John D.',
    position: 'Operations Director',
  },
  {
    text: 'Thanks to ProWorkforceX’s HR advice, we addressed key HR issues efficiently. Their workplace dynamics and compliance expertise have been essential for our company’s growth.',
    name: 'Michael R.',
    position: 'Business Owner',
  },
  {
    text: 'The leadership training program provided by ProWorkforceX has been a game-changer. Our managers are more confident, and our teams are more cohesive than ever.',
    name: 'Jessica L.',
    position: 'CEO',
  },
  {
    text: 'The onboarding and employee integration support we received from ProWorkforceX ensured our new hires had a smooth transition. They were quickly integrated into our company culture.',
    name: 'Emily T.',
    position: 'Operations Manager',
  },
];

export function WhatClientsSay() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">
          What Clients Say About <br /> ProWorkforceX
        </Title>
      </section>
      <Reviews reviews={reviews} />
      <Link href="/testimonials" className={st.navBtn}>
        <Button variant="primaryInverted">
          Read More Testimonials <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
