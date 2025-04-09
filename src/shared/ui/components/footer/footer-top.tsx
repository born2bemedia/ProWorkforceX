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
      { label: 'Resources', link: '/resources' },
      { label: 'Contacts', link: '/contacts' },
    ],
  },
  {
    title: 'Legal',
    list: [
      { label: 'Terms and Conditions', link: '/terms-and-conditions' },
      { label: 'Privacy Policy', link: '/privacy-policy' },
      { label: 'Cookie Policy', link: '/cookie-policy' },
      { label: 'Refund Policy', link: '/refund-policy' },
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
            Office address: Galvaniho 7/D, 821 04 Bratislava, Slovakia
          </Text>
          <Text color="primary" weight={300}>
            Registered address: Biskupa Kondého Street 5138/30, 929 01 Dunajská
            Streda, Slovakia
          </Text>
          <Text color="primary" weight={300}>
            Registered number: 53623878
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
