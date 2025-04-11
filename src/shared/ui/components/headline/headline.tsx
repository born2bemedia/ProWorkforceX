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
  alignLeft = false,
}: {
  title: ReactNode;
  description: string;
  number: 1 | 2 | 3 | 4 | 5;
  alignLeft?: boolean;
}) {
  return (
    <section className={st.title}>
      <Title
        level={2}
        className={cn(st.titleEl, {
          [st.num1]: number === 1,
          [st.num2]: number === 2,
          [st.num3]: number === 3,
          [st.num4]: number === 4,
          [st.num5]: number === 5,
        })}
      >
        {title}
      </Title>
      <Text
        color="primary"
        size="lg"
        className={cn(st.textEl, { [st.alignLeft]: alignLeft })}
      >
        {description}
      </Text>
    </section>
  );
}
