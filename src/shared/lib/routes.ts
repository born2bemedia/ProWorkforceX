import type { useTranslations } from 'next-intl';

export const getRoutes = (t: ReturnType<typeof useTranslations>) => [
  { label: t('home'), href: '/' },
  { label: t('aboutUs'), href: '/about-us' },
  { label: t('solutions'), href: '/solutions' },
  { label: t('howItWorks'), href: '/how-it-works' },
  { label: t('pricingAndPackages'), href: '/pricing-and-packages' },
  { label: t('testimonials'), href: '/testimonials' },
  {
    label: t('resources'),
    href: '/resources/the-future-of-career-development',
  },
  { label: t('contactUs'), href: '/contact-us' },
];
