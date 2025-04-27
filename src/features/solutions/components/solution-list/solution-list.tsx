'use client';

import { useMemo } from 'react';
import Image from 'next/image';

import { useRequestDialogStore } from '@/features/request-form/services';

import { useWindow } from '@/shared/lib/hooks';
import { Layout } from '@/shared/ui/components/layout';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';

import type { Advantage } from '../../lib';
import { SolutionCard } from '../solution-card';
import st from './solution-list.module.scss';

export function SolutionList({
  advantages,
  imageUrls,
  actionBtnText,
  reverse = false,
}: {
  advantages: Advantage[];
  imageUrls: string[];
  actionBtnText: string;
  reverse?: boolean;
}) {
  const { width } = useWindow();
  const { setOpen } = useRequestDialogStore();

  const isMobile = useMemo(() => width < 768, [width]);

  return (
    <section>
      <Layout direction={isMobile ? 'column' : reverse ? 'row-reverse' : 'row'}>
        <Layout direction="column" gap={12}>
          {advantages.map(({ title, desc }, i) => (
            <SolutionCard key={title} title={title} desc={desc} number={++i} />
          ))}
        </Layout>
        <Layout gap={24} direction="column" className={st.imgLayout}>
          {imageUrls.map(image => (
            <Image
              className={st.img}
              key={image}
              src={image}
              alt={image}
              width={100}
              height={463}
              unoptimized
            />
          ))}
        </Layout>
      </Layout>
      <Button
        className={st.btn}
        variant="primaryInverted"
        onClick={() => setOpen(true)}
      >
        {actionBtnText} <ArrowTopRight />
      </Button>
    </section>
  );
}
