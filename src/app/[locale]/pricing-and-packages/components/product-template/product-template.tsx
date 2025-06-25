'use client';

import { ProductList } from '@/features/product/components';
import type { ProductDef } from '@/features/product/lib';

import { cn } from '@/shared/lib/styles';
import { Title } from '@/shared/ui/kit/title';

import st from './product-template.module.scss';

export function ProductTemplate({
  title,
  products,
  number,
}: {
  title: string;
  products: ProductDef[];
  number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}) {
  return (
    <section className={st.layout}>
      <Title className={cn(st.title, st[`num${number}`])} level={5}>
        {title}
      </Title>
      <ProductList values={products} />
    </section>
  );
}
