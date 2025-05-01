'use client';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { ProductDef } from '../../lib';
import st from './product-card.module.scss';

export function ProductCard({
  cost,
  description,
  title,
  type,
  onOrder,
}: ProductDef & { onOrder: (product: ProductDef) => void }) {
  return (
    <article className={st.cardLayout}>
      <Title level={3}>{title}</Title>
      <Text className={st.cardDesc} color="primary">
        {description}
      </Text>
      <section className={st.cardCost}>
        <div className={st.cardPrice}>
          {cost.from && <Text color="primary">From</Text>}
          <span className={st.cardPrice}>{cost.price}</span>
        </div>
        <Text color="primary">{cost.unit}</Text>
      </section>
      <Button
        className={st.buyBtn}
        variant="primaryInverted"
        size="md"
        onClick={() => onOrder?.({ title, description, type, cost })}
      >
        {type} <ArrowTopRight />
      </Button>
    </article>
  );
}
