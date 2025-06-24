import type { useTranslations } from 'next-intl';

export const getArticles = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('0'),
    value: 'the-future-of-career-development',
  },
  {
    label: t('1'),
    value: 'effective-conflict-resolution',
  },
  {
    label: t('2'),
    value: 'navigating-employee-benefits',
  },
  {
    label: t('3'),
    value: 'work-life-balance',
  },
];

export const articlesFallback = 'the-future-of-career-development';
