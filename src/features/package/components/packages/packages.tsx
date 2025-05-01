'use client';

import { useCallback, useMemo } from 'react';

import { useOrderDialogStore } from '@/features/order-form/services/order-dialog.store';
import type { ProductDef } from '@/features/product/lib';

import { packages } from '../../lib';
import { PackageCard } from '../package-card';
import st from './packages.module.scss';

export function Packages({ type }: { type: 'one-time' | 'subscription' }) {
  const { setProduct, setOpen } = useOrderDialogStore();

  const pckgs = useMemo(
    () => packages.filter(item => item.type === type),
    [type],
  );

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
      {pckgs.map(pckg => (
        <PackageCard key={pckg.title} onOrder={onOrder} {...pckg} />
      ))}
    </section>
  );
}
