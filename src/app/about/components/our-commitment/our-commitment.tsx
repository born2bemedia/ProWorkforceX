'use client';

import type { JSX } from 'react';
import Image from 'next/image';

import { Headline } from '@/shared/ui/components/headline';
import { CupIcon, MindIcon, SupportIcon } from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';

import st from './our-commitment.module.scss';

const items = [
  {
    title: 'Continuous Support',
    desc: 'Our crew of career coaches helps you set clear career goals, enhance your professional skills, and navigate key transitions.',
    icon: <SupportIcon />,
  },
  {
    title: 'Personalized Guidance',
    desc: 'Experts in employee benefits management ensure you optimize your entitlements and maximize your options.',
    icon: <MindIcon />,
  },
  {
    title: 'Your Success Is Our Success',
    desc: 'Our workplace mediation specialists help resolve conflicts efficiently, fostering a healthy, productive work environment.',
    icon: <CupIcon />,
  },
];

export function OurCommitment() {
  return (
    <section className={st.layout}>
      <Headline
        title="Our Commitment to You"
        description="At ProWorkforceX, we’re not just here to offer advice but to support you throughout your career journey."
        number={5}
      />
      <section className={st.cardsWithImg}>
        <section className={st.cards}>
          {items.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
        <section className={st.cardImgLayout}>
          <Image
            className={st.img}
            src="/images/about-us/our-commit.png"
            alt="img"
            fill
          />
        </section>
      </section>
    </section>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: JSX.Element;
}) {
  return (
    <article className={st.card}>
      <div className={st.cardIcon}>{icon}</div>
      <section className={st.cardText}>
        <Text size="3xl" color="primary" weight={500}>
          {title}
        </Text>
        <Text size="lg" color="primary">
          {desc}
        </Text>
      </section>
    </article>
  );
}
