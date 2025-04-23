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
    desc: 'Our team works with you at every stage of your business, adapting our services to meet your company’s evolving HR needs.',
    icon: <SupportIcon />,
  },
  {
    title: 'Personalized Guidance',
    desc: 'Whether you’re scaling your workforce, or implementing benefits optimization, we tailor our solutions to help your business grow and succeed.',
    icon: <MindIcon />,
  },
  {
    title: 'Your Success Is Our Success',
    desc: 'We measure our success by the positive outcomes we achieve. We are committed to helping your business maximize its HR potential.',
    icon: <CupIcon />,
  },
];

export function OurCommitment() {
  return (
    <section className={st.layout}>
      <Headline
        title="Our Commitment to Your Business"
        description={
          <>
            At ProWorkforceX, we don’t just offer advice — we are <br />
            committed to supporting your company throughout its <br /> entire HR
            journey.
          </>
        }
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
