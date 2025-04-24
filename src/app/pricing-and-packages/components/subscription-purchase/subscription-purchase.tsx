'use client';

import { Packages } from '@/features/package/components';

import { Text } from '@/shared/ui/kit/text';

import { WhyChoose } from '../why-choose';
import st from './subscription-purchase.module.scss';

const whyChoose = [
  {
    title: 'Comprehensive, Ongoing Support',
    text: 'Get access to a dedicated team of HR experts who work with your business to ensure seamless HR operations.',
  },
  {
    title: 'Tailored Solutions',
    text: 'We provide solutions specifically designed to meet your unique business needs, whether a small business or a large enterprise.',
  },
  {
    title: 'Flexible & Scalable',
    text: 'Our subscription services can evolve as your business grows, ensuring you get the right support when needed.',
  },
  {
    title: 'Proactive HR Management',
    text: 'We don’t wait for problems to arise — we help you proactively address potential issues and optimize your HR strategy.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'Our services are designed to build long-term, sustainable success for your workforce and HR operations.',
  },
];

export function SubscriptionPurchase() {
  return (
    <section>
      <Text className={st.title} size="3xl" weight={500} color="primary">
        Subscription-Based HR Services
      </Text>
      <Text className={st.text} size="lg" color="primary">
        For businesses that want ongoing, comprehensive HR support, our
        subscription services provide expert guidance and tailored solutions to
        optimize workforce management at all times.
      </Text>
      <Packages type="subscription" />
      <WhyChoose
        title="Why Choose Our Subscription-Based HR Services?"
        desc="These high-value packages are designed for businesses that need specific, one-time HR support, whether for strategic HR overhauls, compliance checks, or leadership training. Each package provides a comprehensive solution to meet your business’s needs."
        values={whyChoose}
      />
    </section>
  );
}
