'use client';

import type { JSX } from 'react';

import { cn } from '@/shared/lib/styles';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';

import st from './floating-cards.module.scss';

export function FloatingCards({
  items,
}: {
  items: {
    category: string;
    icon: JSX.Element;
    title: string;
    desc: string;
  }[];
}) {
  return (
    <section className={st.cards}>
      {items.map((item, i) => (
        <Card key={item.title} index={i} {...item} />
      ))}
    </section>
  );
}

function Card({
  icon,
  desc,
  category,
  title,
  index,
}: {
  category: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <article
      className={cn(st.card, {
        [st.marginB]: index === 1,
        [st.marginT]: index === 3,
      })}
    >
      <section className={st.cardTitle}>
        <Text color="primary" size="lg">
          {category}
        </Text>
        {icon}
      </section>
      <Divider className={st.divider} />
      <section className={st.cardContent}>
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
