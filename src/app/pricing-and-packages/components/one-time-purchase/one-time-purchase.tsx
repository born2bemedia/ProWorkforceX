'use client';

import { Packages } from '@/features/package/components';

import { Text } from '@/shared/ui/kit/text';

import { WhyChoose } from '../why-choose';
import st from './one-time-purchase.module.scss';

const whyChoose = [
  {
    title: 'One-Time High-Impact Solutions',
    text: 'Ideal for businesses needing focused, comprehensive HR services for a specific need',
  },
  {
    title: 'Expert HR Support',
    text: 'Receive strategic guidance and actionable HR solutions tailored to your business’s needs.',
  },
  {
    title: 'Tailored for All Business Sizes',
    text: 'From small businesses to large enterprises, we provide solutions that work for you.',
  },
  {
    title: 'End-to-End HR Services',
    text: 'Our services cover all HR needs, from recruitment to compliance, leadership development, and performance management.',
  },
  {
    title: 'Cost-Effective Packages',
    text: 'Each package is designed to provide maximum value with a one-time investment.',
  },
];

export function OneTimePurchase() {
  return (
    <section>
      <Text className={st.title} size="3xl" weight={500} color="primary">
        One-Time Purchase HR Solutions
      </Text>
      <Text className={st.text} size="lg" color="primary">
        These high-value packages are designed for businesses that need
        specific, one-time HR support, whether for strategic HR overhauls,
        compliance checks, or leadership training. Each package provides a
        comprehensive solution to meet your business’s needs.
      </Text>
      <Packages type="one-time" />
      <WhyChoose
        title="Why Choose Our One-Time HR Solutions?"
        desc="These high-value packages are designed for businesses that need specific, one-time HR support, whether for strategic HR overhauls, compliance checks, or leadership training. Each package provides a comprehensive solution to meet your business’s needs."
        values={whyChoose}
      />
    </section>
  );
}
