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
    desc: 'We provide the right pricing model to fit your goals and budget, whether you need one-time consultations, ongoing support, or comprehensive career development.',
  },
  {
    title: 'Predefined Packages',
    desc: 'Explore our predefined packages, designed for different levels of career development, workplace support, and HR guidance. Each package ensures maximum value and the proper support at the right price.',
  },
  {
    title: 'Subscription-Based Packages',
    desc: 'We offer subscription-based services for ongoing support and flexibility. Choose from monthly packages that give you regular access to the HR services you need, making it easier to stay supported as you progress.',
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
          We understand that every individual’s HR needs and career goals are
          unique. That’s why we offer transparent and flexible pricing options
          tailored to your requirements.
        </Text>
      </section>
      <section className={st.cards}>
        {packages.map(pckg => (
          <Card key={pckg.title} {...pckg} />
        ))}
      </section>
      <Link href="/packages-and-pricing" className={st.navBtn}>
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
