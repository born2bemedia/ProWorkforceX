'use client';

import type { JSX } from 'react';
import Image from 'next/image';

import { Headline } from '@/shared/ui/components/headline';
import { ChartsIcon, CheckUser, Puzzle } from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';

import st from './what-sets.module.scss';

const items = [
  {
    icon: <CheckUser />,
    title: 'Comprehensive Expertise',
    desc: 'Our team of seasoned HR professionals offers broad expertise in HR management, from compliance to employee development.',
  },
  {
    icon: <Puzzle />,
    title: 'Bespoke Solutions',
    desc: 'We don’t believe in a one-size-fits-all approach. Every business is unique, so we create HR solutions tailored to your needs.',
  },
  {
    icon: <ChartsIcon />,
    title: 'Proven Track Record',
    desc: 'Our clients consistently report measurable improvements in workforce productivity, employee retention, and overall HR performance.',
  },
];

export function WhatSets() {
  return (
    <section className={st.layout}>
      <Headline
        title="What Sets Us Apart"
        description={
          <>
            At ProWorkforceX, it’s not just about providing HR services — it’s
            about creating lasting <br className={st.br} /> partnerships. We aim
            to help your business thrive through innovative, tailored HR
            solutions <br className={st.br} />
            that align with your goals and foster long-term success. Here’s what
            sets us apart:
          </>
        }
        number={4}
      />
      <section className={st.contentLayout}>
        <section className={st.cards}>
          {items.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
        <Image
          className={st.img}
          src="/images/testimonials/girl.jpg"
          alt="girl"
          width={644}
          height={450}
        />
      </section>
    </section>
  );
}

function Card({
  icon,
  desc,
  title,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) {
  return (
    <article className={st.cardLayout}>
      <span className={st.cardIcon}>{icon}</span>
      <section className={st.cardTitle}>
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
