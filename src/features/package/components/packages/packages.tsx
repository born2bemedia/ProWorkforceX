'use client';

import { useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { useOrderDialogStore } from '@/features/order-form/services/order-dialog.store';
import type { ProductDef } from '@/features/product/lib';

import { getPackages } from '../../lib';
import { PackageCard } from '../package-card';
import st from './packages.module.scss';

export function Packages({ type }: { type: 'one-time' | 'subscription' }) {
  const t = useTranslations('packages');

  const { setProduct, setOpen } = useOrderDialogStore();

  const pckgs = useMemo(
    () => getPackages(t).filter(item => item.type === type),
    [t, type],
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
