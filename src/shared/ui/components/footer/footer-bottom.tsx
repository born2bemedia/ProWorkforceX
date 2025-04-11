'use client';

import Link from 'next/link';

import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Text } from '@/shared/ui/kit/text';

import st from './footer.module.scss';

export function FooterBottom() {
  return (
    <section className={st.footerBottomLayout}>
      <Text color="white" className={st.text}>
        © {new Date().getFullYear()} Workforcex Ltd All Rights Reserved.
        Reserved.
      </Text>
      <section className={st.contacts}>
        <div className={st.links}>
          <Link href="tel:+447878591056">
            <Text color="white">+447878591056</Text>
          </Link>
          <Link href="mailto:info@proworkforcex.com">
            <Text color="white">info@proworkforcex.com</Text>
          </Link>
        </div>
        <SocialNetworks />
      </section>
    </section>
  );
}
