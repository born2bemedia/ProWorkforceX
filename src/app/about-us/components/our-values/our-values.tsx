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
    desc: 'We understand that each business is different, and we tailor our services to meet the unique workforce needs of your company.',
    imgUrl: '/images/about-us/values/1.jpeg',
  },
  {
    icon: <RoadIcon />,
    title: 'Transparency and Flexibility',
    desc: 'Whether you require one-time guidance or ongoing support, we offer flexible pricing and service options to suit your business’s evolving HR needs.',
    imgUrl: '/images/about-us/values/2.jpeg',
  },
  {
    icon: <CapaIcon />,
    title: 'Continuous Development',
    desc: 'Our clients consistently report positive changes in their workforce management, from smoother recruitment to improved employee satisfaction.',
    imgUrl: '/images/about-us/values/3.jpeg',
  },
];

export function OurValues() {
  return (
    <section className={st.layout}>
      <Headline
        title="Our Values"
        description="Our team is committed to helping businesses succeed through a customized and strategic approach to HR. Here’s what drives us:"
        number={1}
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
      <section className={st.cardContent}>
        <Title level={3}>{title}</Title>
        <Text color="primary" size="lg" className={st.textEl}>
          {desc}
        </Text>
        <div className={st.cardImg}>
          <Image className={st.imgEl} src={imgUrl} alt="img" fill />
        </div>
      </section>
    </article>
  );
}
