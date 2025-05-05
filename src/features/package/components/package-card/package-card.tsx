'use client';

import type { ProductDef } from '@/features/product/lib';

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
  onOrder,
}: PackageDef & { onOrder: (product: ProductDef) => void }) {
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
          <li key={item}>
            <svg
              className="bullet"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 1193" cx="4" cy="4" r="4" fill="#DFF56B" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <Button
        className={st.buyBtn}
        variant="primaryInverted"
        size="md"
        onClick={() =>
          onOrder({
            type: 'buy',
            cost: {
              price,
              unit: type,
            },
            description,
            title,
          })
        }
      >
        <span style={{opacity: 0}}>
          <ArrowTopRight />
        </span>
        Buy
        <ArrowTopRight />
      </Button>
    </article>
  );
}
