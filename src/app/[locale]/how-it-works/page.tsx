import type { Metadata } from 'next';

import { ChooseOurProcess, Heading, Hero, StepsOfTheWay } from './components';

export const metadata: Metadata = {
  title: 'How ProWorkforceX Works - Our Approach to HR Success',
  description:
    'Understand our streamlined process for delivering effective HR solutions. We tailor our approach to meet your business’s unique needs and drive long-term success.',
  openGraph: {
    title: 'How ProWorkforceX Works - Our Approach to HR Success',
    description:
      'Understand our streamlined process for delivering effective HR solutions. We tailor our approach to meet your business’s unique needs and drive long-term success.',
    images: 'https://i.ibb.co/1t2ZCF6J/1024-518.png',
  },
};

export default function HowItWorks() {
  return (
    <>
      <Hero />
      <Heading />
      <StepsOfTheWay />
      <ChooseOurProcess />
    </>
  );
}
