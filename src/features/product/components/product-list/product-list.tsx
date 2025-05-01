'use client';

import { useCallback } from 'react';

import { useOrderDialogStore } from '@/features/order-form/services/order-dialog.store';

import type { ProductDef } from '../../lib';
import { ProductCard } from '../product-card';
import st from './product-list.module.scss';

export function ProductList({ values }: { values: ProductDef[] }) {
  const { setProduct, setOpen } = useOrderDialogStore();

  const onOrder = useCallback(
    (product: ProductDef) => {
      console.log('Order product:', product);
      setProduct(product);
      setOpen(true);
    },
    [setOpen, setProduct],
  );

  return (
    <section className={st.layout}>
      {values.map(p => (
        <ProductCard key={p.description} onOrder={onOrder} {...p} />
      ))}
    </section>
  );
}
