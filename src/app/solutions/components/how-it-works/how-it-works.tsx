'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Headline } from '@/shared/ui/components/headline';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './how-it-works.module.scss';

const benefits = [
  'Consultation to understand your HR needs.',
  'Customized HR strategy aligned with your business goals.',
  'Efficient implementation of HR solutions.',
  'Ongoing support to adapt and evolve.',
  'Regular feedback to ensure continuous progress.',
  'Networking & development opportunities for sustained growth.',
];

export function HowItWorks() {
  return (
    <section className={st.layout}>
      <Headline
        title={
          <>
            How It Works: Our <br className={st.br} /> Approach to Transforming{' '}
            <br className={st.br} /> Your HR Strategy
          </>
        }
        description={
          <>
            At ProWorkforceX, we follow a streamlined, client-focused process to
            <br className={st.br} />
            ensure your HR functions are optimized efficiently. We collaborate
            with your team to understand your <br className={st.br} /> unique
            challenges, offering solutions that <br className={st.br} /> foster
            growth and improve overall performance.
          </>
        }
        number={10}
        align="center"
      />
      <section className={st.contentLayout}>
        <section className={st.approaches}>
          <Title level={3}>
            Here’s a snapshot of <br className={st.br} /> our approach:
          </Title>
          <div className={st.list}>
            {benefits.map(benefit => (
              <Benefit key={benefit}>{benefit}</Benefit>
            ))}
          </div>
        </section>
        <DetailedWorkflow />
      </section>
    </section>
  );
}

function DetailedWorkflow() {
  return (
    <article className={st.workflowLayout}>
      <section className={st.workflow}>
        <section className={st.workflowTextLayout}>
          <Text
            weight={600}
            className={st.workflowText}
            color="primary"
            size="3xl"
          >
            If you’re curious to see how we fine-tune HR solutions for your
            business, click the button below:
          </Text>
        </section>
        <Link href="/how-it-works" style={{ width: '100%', zIndex: 5 }}>
          <Button variant="primaryInverted" fullWidth>
            Dive Into Detailed HR Workflow <ArrowTopRight />
          </Button>
        </Link>
      </section>
      <Image
        className={st.workflowImg}
        src="/images/solutions/10-1.jpg"
        alt="alt"
        style={{
          objectFit: 'cover',
          borderRadius: '12px',
        }}
        width={219}
        height={440}
        unoptimized
      />
    </article>
  );
}

function Benefit({ children }: { children: ReactNode }) {
  return (
    <article className={st.benefit}>
      <PlusIcon />
      {children}
    </article>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M14 8.5C14 8.63261 13.9473 8.75979 13.8536 8.85355C13.7598 8.94732 13.6326 9 13.5 9H8.5V14C8.5 14.1326 8.44732 14.2598 8.35355 14.3536C8.25979 14.4473 8.13261 14.5 8 14.5C7.86739 14.5 7.74021 14.4473 7.64645 14.3536C7.55268 14.2598 7.5 14.1326 7.5 14V9H2.5C2.36739 9 2.24021 8.94732 2.14645 8.85355C2.05268 8.75979 2 8.63261 2 8.5C2 8.36739 2.05268 8.24021 2.14645 8.14645C2.24021 8.05268 2.36739 8 2.5 8H7.5V3C7.5 2.86739 7.55268 2.74021 7.64645 2.64645C7.74021 2.55268 7.86739 2.5 8 2.5C8.13261 2.5 8.25979 2.55268 8.35355 2.64645C8.44732 2.74021 8.5 2.86739 8.5 3V8H13.5C13.6326 8 13.7598 8.05268 13.8536 8.14645C13.9473 8.24021 14 8.36739 14 8.5Z"
        fill="#093224"
      />
    </svg>
  );
}
