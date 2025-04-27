'use client';

import type { ReactNode } from 'react';
import { useMemo } from 'react';
import Link from 'next/link';

import { useWindow } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/styles';
import { ArrowTopRight, MouseIcon } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero({
  chipText,
  title,
  text,
  imageUrl,
  className,
}: {
  chipText: string;
  title: ReactNode;
  text: ReactNode;
  imageUrl: string;
  className?: string;
}) {
  const { width } = useWindow();

  const isMobile = useMemo(() => width <= 768, [width]);

  return (
    <section
      className={cn(st.layout, className)}
      style={{
        background: isMobile
          ? `linear-gradient(0deg, rgba(31, 36, 32, 0.80) 0%, rgba(31, 36, 32, 0.80) 100%), url('${imageUrl}') lightgray 50% / cover no-repeat`
          : `linear-gradient(180deg, rgba(31, 36, 32, 0.00) 0%, rgba(31, 36, 32, 0.80) 100%), url('${imageUrl}') lightgray 50% / cover no-repeat`,
      }}
    >
      <section className={st.topHero}>
        <Chip>{chipText.toUpperCase()}</Chip>
        <Link href="/contact-us">
          <Button>
            Contact Us <ArrowTopRight />
          </Button>
        </Link>
      </section>
      <section className={st.topBottom}>
        <div className={st.title}>
          <Title color="white">{title}</Title>
          <Text color="white" size="xl">
            {text}
          </Text>
        </div>
        <Chip className={st.chip}>
          Scroll <MouseIcon /> Down
        </Chip>
      </section>
    </section>
  );
}
