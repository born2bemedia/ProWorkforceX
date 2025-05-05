'use client';

import Link from 'next/link';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './packages-and-pricing.module.scss';

const packages = [
  {
    title: 'Transparent and Flexible Pricing',
    desc: 'We offer tailored pricing models that align with your company’s goals and budget, whether you need one-time consultations, long-term support, or comprehensive HR solutions. Our flexible pricing ensures your business gets the right level of service at the right price.',
  },
  {
    title: 'Predefined Packages',
    desc: 'Explore our range of predefined packages designed for various levels of employee development, workplace support, and HR solutions. Each package offers maximum value and provides the right support to meet your business’s unique HR needs.',
  },
  {
    title: 'Subscription-Based Packages',
    desc: 'Our subscription-based services provide businesses with ongoing, flexible support. Choose from monthly packages that grant regular access to essential HR services, helping your company stay supported while you grow and evolve.',
  },
];

export function PackagesAndPricing() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title color="primary">
          Ready to Talk Packages <br /> and Pricing?
        </Title>
        <Text className={st.text} color="gray600">
          We understand that every business has unique HR needs and goals.
          That’s why we offer transparent and flexible pricing options tailored
          to your company’s requirements.
        </Text>
      </section>
      <section className={st.cards}>
        {packages.map(pckg => (
          <Card key={pckg.title} {...pckg} />
        ))}
      </section>
      <Link href="/pricing-and-packages" className={st.navBtn}>
        <Button variant="primaryInverted" size="md">
          Browse Our Packages & Pricing
          <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <article className={st.card}>
      <Title level={3}>{title}</Title>
      <Text color="primary" size="lg">
        {desc}
      </Text>
    </article>
  );
}
