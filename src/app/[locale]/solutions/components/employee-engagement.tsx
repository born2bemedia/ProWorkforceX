'use client';

import { useTranslations } from 'next-intl';

import { SolutionTemplate } from './solution-template';
import st from './solution-template/solution-template.module.scss';

const images = [
  '/images/solutions/06-1.jpg',
  '/images/solutions/06-2.jpg',
  '/images/solutions/06-3.jpg',
];

export function EmployeeEngagement() {
  const t = useTranslations('solutions.employeeEngagement');

  const advantages = [
    {
      title: t('0.title'),
      desc: t('0.desc'),
    },
    {
      title: t('1.title'),
      desc: t('1.desc'),
    },
    {
      title: t('2.title'),
      desc: t('2.desc'),
    },
    {
      title: t('3.title'),
      desc: t('3.desc'),
    },
    {
      title: t('4.title'),
      desc: t('4.desc'),
    },
    {
      title: t('5.title'),
      desc: t('5.desc'),
    },
    {
      title: t('6.title'),
      desc: t('6.desc'),
    },
    {
      title: t('7.title'),
      desc: t('7.desc'),
    },
    {
      title: t('8.title'),
      desc: t('8.desc'),
    },
    {
      title: t('9.title'),
      desc: t('9.desc'),
    },
  ];

  return (
    <SolutionTemplate
      title={
        <>
          {t('title.0')} <br className={st.br} />
          {t('title.1')}
        </>
      }
      desc={t('desc')}
      number={6}
      advantages={advantages}
      imageUrls={images}
      actionBtnText={t('requestEngagementService')}
      reverse
    />
  );
}
