import type { Metadata } from 'next';

import {
  Benefits,
  CareerJourney,
  EffectiveProcess,
  Hero,
  LetsBuildFuture,
  PackagesAndPricing,
  ServicesInDetail,
  Solution,
  WhatClientsSay,
  WhyChoose,
} from './components';

export const metadata: Metadata = {
  title: 'ProWorkforceX - HR Solutions for Business Success',
  description:
    'Discover tailored HR solutions that empower your business with ProWorkforceX. From talent acquisition to employee development, we help optimize your workforce for success.',
  openGraph: {
    title: 'ProWorkforceX - HR Solutions for Business Success',
    description:
      'Discover tailored HR solutions that empower your business with ProWorkforceX. From talent acquisition to employee development, we help optimize your workforce for success.',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Solution />
      <WhyChoose />
      <EffectiveProcess />
      <ServicesInDetail />
      <WhatClientsSay />
      <PackagesAndPricing />
      <CareerJourney />
      <LetsBuildFuture />
    </>
  );
}
