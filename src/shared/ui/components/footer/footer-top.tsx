'use client';

import Link from 'next/link';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './footer.module.scss';

const navigation = [
  {
    title: 'Quick Navigation',
    list: [
      { label: 'Home', link: '/' },
      { label: 'About Us', link: '/about' },
      { label: 'Contact Us', link: '/contact-us' },
    ],
  },
  {
    title: 'Request a Service',
    list: [
      { label: 'Solutions', link: '/solutions' },
      { label: 'How It Works', link: '/how-it-works' },
      { label: 'Packages & Pricing', link: '/packages-and-pricing' },
    ],
  },
  {
    title: 'Insights',
    list: [
      { label: 'Testimonials', link: '/testimonials' },
      {
        label: 'Resources',
        link: '/resources/the-future-of-career-development',
      },
    ],
  },
  {
    title: 'Legal',
    list: [
      { label: 'Terms and Conditions', link: '/legal/terms-and-conditions' },
      { label: 'Privacy Policy', link: '/legal/privacy-policy' },
      { label: 'Cookie Policy', link: '/legal/cookie-policy' },
      { label: 'Refund Policy', link: '/legal/refund-policy' },
    ],
  },
];

export function FooterTop() {
  return (
    <section className={st.footerTopLayout}>
      <section className={st.logoLayout}>
        <Link href="/">
          <Text size="2xl">ProWorkforceX</Text>
        </Link>
        <address className={st.addressLayout}>
          <Text color="primary" weight={300}>
            Office address: 9 Albert Embankment (Unit C), Lambeth, London,
            United Kingdom, SE1 7HD
          </Text>
          <Text color="primary" weight={300}>
            Registered addresses: 2nd Floor College House, 17 King Edwards Road,
            Ruislip, London, United Kingdom, HA4 7AE
          </Text>
          <Text color="primary" weight={300}>
            Registered number: 16342190
          </Text>
        </address>
      </section>
      <section className={st.navigationLayout}>
        {navigation.map(({ title, list }, i) => (
          <nav key={title + i} className={st.listLayout}>
            <Title level={4} color="primary" uppercase>
              {title}
            </Title>
            <ul className={st.list}>
              {list.map(({ label, link }) => (
                <li key={label} className={st.navItem}>
                  <Link href={link}>
                    <Text color="primary">{label}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </section>
    </section>
  );
}
