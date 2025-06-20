'use client';

import type { ReactNode } from 'react';

import { SolutionList } from '@/features/solutions/components';
import type { Advantage } from '@/features/solutions/lib';

import { Headline } from '@/shared/ui/components/headline';

import st from './solution-template.module.scss';

export function SolutionTemplate({
  advantages,
  title,
  desc,
  imageUrls,
  number,
  actionBtnText,
  reverse = false,
}: {
  title: ReactNode;
  desc: ReactNode;
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  advantages: Advantage[];
  imageUrls: string[];
  actionBtnText: string;
  reverse?: boolean;
}) {
  return (
    <section className={st.layout}>
      <Headline
        title={title}
        description={desc}
        number={number}
        align="bottom"
      />
      <SolutionList
        advantages={advantages}
        imageUrls={imageUrls}
        actionBtnText={actionBtnText}
        reverse={reverse}
      />
    </section>
  );
}
