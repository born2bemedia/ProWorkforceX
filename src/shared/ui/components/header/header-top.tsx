'use client';

import Image from 'next/image';
import Link from 'next/link';

import { LangSwitcher } from '@/features/lang-switcher/components';

import { ShortAddress } from '@/shared/ui/components/short-address';
import { SocialNetworks } from '@/shared/ui/components/social-networks';

import st from './header.module.scss';

export function HeaderTop() {
  return (
    <>
      <section className={st.headerTopLayout}>
        <div className={st.headerRow}>
          <Link href="/">
            <Image src="/logo-black.svg" alt="Logo" width={200} height={50} />
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
