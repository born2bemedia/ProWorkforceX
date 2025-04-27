'use client';

import { formatNumber } from '@/shared/lib/string';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './solution-card.module.scss';

export function SolutionCard({
  number,
  desc,
  title,
}: {
  title: string;
  desc: string;
  number: number;
}) {
  return (
    <article className={st.card}>
      <section className={st.cardTop}>
        <div className={st.cardTitle}>
          <Text color="gray600" className={st.cardNum} size="sm">
            {formatNumber(number)}
          </Text>
          <Title level={3}>{title}</Title>
        </div>
        <ArrowTopRight />
      </section>
      <Divider className={st.divider} />
      <Text size="xl" color="primary">
        {desc}
      </Text>
    </article>
  );
}
