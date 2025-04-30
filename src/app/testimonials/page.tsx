import type { Metadata } from 'next';

import { Hero } from '@/shared/ui/components/hero';

import {
  ClientReviews,
  ClientStories,
  GetInTouch,
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
  },
};

export default function Testimonials() {
  return (
    <>
      <Hero
        chipText="Testimonials"
        title={<>What Our Clients Say About ProWorkforceX</>}
        text={
          <>
            Our mission is to empower businesses by providing tailored HR
            solutions. But don’t just take our word for it — hear from satisfied
            clients who have benefited from our expert HR services.
          </>
        }
        imageUrl="/images/testimonials/hero.jpg"
      />
      <ClientReviews />
      <WhyChooseUs />
      <OurClients />
      <WhatSets />
      <ClientStories />
      <GetInTouch />
    </>
  );
}
