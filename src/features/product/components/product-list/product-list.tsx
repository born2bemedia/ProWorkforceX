'use client';

import type { ProductDef } from '../../lib';
import { ProductCard } from '../product-card';
import st from './product-list.module.scss';

export function ProductList({ values }: { values: ProductDef[] }) {
  return (
    <section className={st.layout}>
      {values.map(p => (
        <ProductCard key={p.description} {...p} />
      ))}
    </section>
  );
}
