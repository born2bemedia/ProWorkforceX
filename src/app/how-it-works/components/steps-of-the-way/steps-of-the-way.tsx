'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

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
  return (
    <section className={st.layout}>
      <Headline
        title="Steps of the way"
        description={
          <>
            Explore how we work with you every step of the way
            <br className={st.br} /> to elevate your business and employee
            experience.
          </>
        }
        number={1}
      />
      <StepsSlider />
      <Link className={st.link} href="/contact-us">
        <Button variant="primaryInverted" size="md">
          Contact Us for Future-Proof HR Solutions <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
