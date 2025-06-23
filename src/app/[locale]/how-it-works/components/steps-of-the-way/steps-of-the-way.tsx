'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Headline } from '@/shared/ui/components/headline';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';

import st from './steps-of-the-way.module.scss';

const StepsSlider = dynamic(
  () => import('../steps-slider').then(m => m.StepsSlider),
  {
    ssr: false,
  },
);

export function StepsOfTheWay() {
  const t = useTranslations('howItWorks.stepsOfTheWay');

  return (
    <section className={st.layout}>
      <Headline title={t('title')} description={t('desc')} number={1} />
      <StepsSlider />
      <Link className={st.link} href="/contact-us">
        <Button variant="primaryInverted" size="md">
          {t('contactUs')} <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
