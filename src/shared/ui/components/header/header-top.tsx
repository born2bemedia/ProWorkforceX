'use client';

import Link from 'next/link';

import { LangSwitcher } from '@/features/lang-switcher/components';

import { ShortAddress } from '@/shared/ui/components/short-address';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Text } from '@/shared/ui/kit/text';

import st from './header.module.scss';

export function HeaderTop() {
  return (
    <>
      <section className={st.headerTopLayout}>
        <div className={st.headerRow}>
          <Link href="/">
            <Text size="2xl">ProWorkforceX</Text>
          </Link>
          <ShortAddress />
          <div style={{ display: 'flex', gap: '10px' }}>
            <LangSwitcher />
            <SocialNetworks />
          </div>
        </div>
      </section>
    </>
  );
}
