'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './lets-build-future.module.scss';

export function LetsBuildFuture() {
  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Title level={2}>Let’s Build Your Future Together</Title>
        <Text color="primary" className={st.text}>
          Your success is our priority. Whether you&#39;re looking for career
          growth, HR advice, or personalized support, ProWorkforceX is here to
          help you achieve your goals. <br />
          <br /> We offer tailored HR solutions, career development guidance,
          and expert advice to help you reach your full potential. Let’s work
          together to shape your future.
        </Text>
        <Link href="/resources" className={st.navBtn}>
          <Button variant="primaryInverted" size="md">
            Dive Into Resources <ArrowTopRight />
          </Button>
        </Link>
      </section>
      <Image
        className={st.imgLayout}
        src="/images/home/mask.svg"
        alt="mask"
        fill
      />
    </section>
  );
}
