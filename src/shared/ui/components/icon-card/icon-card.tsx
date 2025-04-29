'use client';

import type { JSX } from 'react';

import { CheckIcon } from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './icon-card.module.scss';

export function IconCard({
  icon = <CheckIcon />,
  title,
  text,
}: {
  title: string;
  text: string;
  icon?: JSX.Element;
}) {
  return (
    <article className={st.cardLayout}>
      {icon}
      <section className={st.cardContent}>
        <Title level={3}>{title}</Title>
        <Text color="primary">{text}</Text>
      </section>
    </article>
  );
}
