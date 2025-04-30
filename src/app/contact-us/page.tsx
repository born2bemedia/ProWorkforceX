import type { Metadata } from 'next';

import { ContactForm, ContactInfo, Hero, SocialMedia } from './components';

export const metadata: Metadata = {
  title: 'Contact ProWorkforceX - Get in Touch for HR Solutions',
  description:
    'Reach out to ProWorkforceX for personalized HR solutions. Whether you need advice or support or want to get started with our services, we’re here to help.',
  openGraph: {
    title: 'Contact ProWorkforceX - Get in Touch for HR Solutions',
    description:
      'Reach out to ProWorkforceX for personalized HR solutions. Whether you need advice or support or want to get started with our services, we’re here to help.',
  },
};

export default function ContactUs() {
  return (
    <>
      <Hero />
      <ContactInfo />
      <SocialMedia />
      <ContactForm />
    </>
  );
}
