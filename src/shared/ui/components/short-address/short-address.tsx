'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';

import st from './short-address.module.scss';

export function ShortAddress() {
  return (
    <address className={st.address}>
      <Link href="tel:+447476956490">
        <Text color="gray600">+447476956490</Text>
      </Link>
      <Link href="mailto:info@proworkforcex.com">
        <Text color="gray600">info@proworkforcex.com</Text>
      </Link>
    </address>
  );
}
