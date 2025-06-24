import type { useTranslations } from 'next-intl';

export const getServices = (t: ReturnType<typeof useTranslations>) => [
  t('0'),
  t('1'),
  t('2'),
  t('3'),
  t('4'),
  t('5'),
  t('6'),
  t('7'),
  t('8'),
  t('9'),
  t('10'),
];

export const getBudgets = (t: ReturnType<typeof useTranslations>) => [
  `${t('under')} €500`,
  `€500 - €2,000`,
  `€2,000 - €5,000`,
  `€5,000 - €10,000`,
  '€10,000+',
];

export const getTimelines = (t: ReturnType<typeof useTranslations>) => [
  t('within1Month'),
  t('1-3Months'),
  t('3-6Months'),
  t('flexibleTimeline'),
];

export const getContactMethods = (t: ReturnType<typeof useTranslations>) => [
  t('email'),
  t('phone'),
  t('videoCall'),
];
