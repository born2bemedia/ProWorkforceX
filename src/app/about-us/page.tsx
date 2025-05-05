import type { Metadata } from 'next';

import {
  ByTheNumbers,
  ContactUs,
  Hero,
  OurApproach,
  OurCommitment,
  OurTeam,
  OurValues,
} from './components';

export const metadata: Metadata = {
  title: 'About ProWorkforceX - HR Experts That Drive Business Growth',
  description:
    'Learn more about ProWorkforceX, your trusted HR partner. Our mission is to provide businesses with personalized HR solutions that drive growth and improve workforce management.',
  openGraph: {
    title: 'About ProWorkforceX - HR Experts That Drive Business Growth',
    description:
      'Learn more about ProWorkforceX, your trusted HR partner. Our mission is to provide businesses with personalized HR solutions that drive growth and improve workforce management.',
    images: 'https://i.ibb.co/1t2ZCF6J/1024-518.png',
  },
};

export default function AboutUs() {
  return (
    <>
      <Hero />
      <OurValues />
      <OurApproach />
      <ByTheNumbers />
      <OurTeam />
      <OurCommitment />
      <ContactUs />
    </>
  );
}
