'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './footer.module.scss';

const getNavigation = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('company'),
    list: [
      { label: t('home'), link: '/' },
      { label: t('aboutUs'), link: '/about-us' },
      { label: t('contactUs'), link: '/contact-us' },
    ],
  },
  {
    title: t('requestAService'),
    list: [
      { label: t('solutions'), link: '/solutions' },
      { label: t('howItWorks'), link: '/how-it-works' },
      { label: t('packagesAndPricing'), link: '/pricing-and-packages' },
    ],
  },
  {
    title: t('insights'),
    list: [
      { label: t('testimonials'), link: '/testimonials' },
      {
        label: t('resources'),
        link: '/resources/the-future-of-career-development',
      },
    ],
  },
  {
    title: t('legal'),
    list: [
      { label: t('termsAndConditions'), link: '/legal/terms-and-conditions' },
      { label: t('privacyPolicy'), link: '/legal/privacy-policy' },
      { label: t('cookiePolicy'), link: '/legal/cookie-policy' },
      { label: t('refundPolicy'), link: '/legal/refund-policy' },
    ],
  },
];

export function FooterTop() {
  const tn = useTranslations('footer.navigation');
  const t = useTranslations('footer');

  const navigation = getNavigation(tn);

  return (
    <section className={st.footerTopLayout}>
      <section className={st.logoLayout}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="Logo" width={250} height={50} />
        </Link>
        <address className={st.addressLayout}>
          <Text color="primary" weight={300}>
            {t('officeAddress')}: 9 Albert Embankment (Unit C), Lambeth, London,
            United Kingdom, SE1 7HD
          </Text>
          <Text color="primary" weight={300}>
            {t('registeredAddress')}: 2nd Floor College House, 17 King Edwards
            Road, Ruislip, London, United Kingdom, HA4 7AE
          </Text>
          <Text color="primary" weight={300}>
            {t('registeredNumber')}: 16342190
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
