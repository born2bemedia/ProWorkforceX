'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './headline.module.scss';

export function Headline({
  title,
  description,
  number,
  align = 'top',
}: {
  title: ReactNode;
  description: ReactNode;
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  align?: 'top' | 'bottom' | 'center';
}) {
  return (
    <section className={st.title}>
      <Title level={2} className={cn(st.titleEl, st[`num${number}`])}>
        {title}
      </Title>
      <Text
        color="primary"
        size="lg"
        className={cn(st.textEl, {
          [st.alignB]: align === 'bottom',
          [st.alignT]: align === 'top',
          [st.alignC]: align === 'center',
        })}
      >
        {description}
      </Text>
    </section>
  );
}
