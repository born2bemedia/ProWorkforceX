'use client';

import Link from 'next/link';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './explore-pricing.module.scss';

export function ExplorePricing() {
  return (
    <section className={st.layout}>
      <div className={st.textLayout}>
        <Title>Tailored HR Solutions with Flexible Pricing</Title>
        <Text>
          We understand that every business has unique HR needs, so we offer
          flexible pricing designed to fit your company’s specific requirements.
          Whether you’re looking for one-time consultations, ongoing HR support,
          or comprehensive, customized HR solutions, our pricing models are
          designed to support your business at every growth stage. <br />
          <br />
          Explore our competitive pricing and tailored packages designed to
          ensure businesses of all sizes can access top-tier HR services without
          compromising quality or budget.
        </Text>
      </div>
      <Link href="/pricing-and-packages" style={{ zIndex: 5 }}>
        <Button variant="primaryInverted" size="md">
          Explore Our Pricing & Packages
          <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
