import type { Metadata } from 'next';

import {
  ClientReviews,
  ClientStories,
  GetInTouch,
  Hero,
  OurClients,
  WhatSets,
  WhyChooseUs,
} from './components';

export const metadata: Metadata = {
  title: 'ProWorkforceX Client Testimonials - Success Stories from Our Clients',
  description:
    'Read real stories from our clients about how ProWorkforceX has transformed their HR strategies, optimized their workforce, and helped achieve business success. Discover the impact of our solutions.',
  openGraph: {
    title:
      'ProWorkforceX Client Testimonials - Success Stories from Our Clients',
    description:
      'Read real stories from our clients about how ProWorkforceX has transformed their HR strategies, optimized their workforce, and helped achieve business success. Discover the impact of our solutions.',
    images: 'https://i.ibb.co/1t2ZCF6J/1024-518.png',
  },
};

export default function Testimonials() {
  return (
    <>
      <Hero />
      <ClientReviews />
      <WhyChooseUs />
      <OurClients />
      <WhatSets />
      <ClientStories />
      <GetInTouch />
    </>
  );
}
