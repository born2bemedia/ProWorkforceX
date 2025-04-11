'use client';

import type { JSX, ReactNode } from 'react';
import Image from 'next/image';

import { Headline } from '@/shared/ui/components/headline';
import { CapaIcon, HelpIcon, RoadIcon } from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-values.module.scss';

const values = [
  {
    icon: <HelpIcon />,
    title: 'Personalized HR Support',
    desc: 'Every individual’s career and workplace needs differ, and we tailor our services to help you achieve your aspirations.',
    imgUrl: '/images/about-us/values/1.jpeg',
  },
  {
    icon: <RoadIcon />,
    title: 'Transparency and Flexibility',
    desc: 'If you need one-time guidance or ongoing support, we believe in flexible pricing and service options that fit your unique situation.',
    imgUrl: '/images/about-us/values/2.jpeg',
  },
  {
    icon: <CapaIcon />,
    title: 'Continuous Development',
    desc: 'Thanks to our strategic HR services, our clients consistently report positive career transitions and growth.',
    imgUrl: '/images/about-us/values/3.jpeg',
  },
];

export function OurValues() {
  return (
    <section className={st.layout}>
      <Headline
        title="Our Values"
        description="Our crew is committed to:"
        number={1}
        alignLeft
      />
      <section className={st.cards}>
        {values.map(value => (
          <Card key={value.title} {...value} />
        ))}
      </section>
    </section>
  );
}

function Card({
  imgUrl,
  desc,
  title,
  icon,
}: {
  icon: JSX.Element;
  title: ReactNode;
  desc: string;
  imgUrl: string;
}) {
  return (
    <article className={st.cardLayout}>
      {icon}
      <Title level={3}>{title}</Title>
      <Text color="primary" size="lg" className={st.textEl}>
        {desc}
      </Text>
      <div className={st.cardImg}>
        <Image className={st.imgEl} src={imgUrl} alt="img" fill />
      </div>
    </article>
  );
}
