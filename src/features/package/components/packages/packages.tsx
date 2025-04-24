'use client';

import { useMemo } from 'react';

import { packages } from '../../lib';
import { PackageCard } from '../package-card';
import st from './packages.module.scss';

export function Packages({ type }: { type: 'one-time' | 'subscription' }) {
  const pckgs = useMemo(
    () => packages.filter(item => item.type === type),
    [type],
  );

  return (
    <section className={st.layout}>
      {pckgs.map(pckg => (
        <PackageCard key={pckg.title} {...pckg} />
      ))}
    </section>
  );
}
