'use client';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { PackageDef } from '../../lib';
import st from './package-card.module.scss';

export function PackageCard({
  type,
  details,
  title,
  price,
  description,
}: PackageDef) {
  return (
    <article className={st.layout}>
      <Title level={3}>{title}</Title>
      <section>
        <span className={st.price}>{price}</span>
        <Text color="primary">
          {type === 'one-time' ? 'One-Time' : 'month'}
        </Text>
      </section>
      <Divider color="primary" />
      <Text color="primary">{description}</Text>
      <ul className={st.list}>
        {details.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button className={st.buyBtn} variant="primaryInverted" size="md">
        Buy
        <ArrowTopRight />
      </Button>
    </article>
  );
}
