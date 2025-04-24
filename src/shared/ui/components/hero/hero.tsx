'use client';

import Link from 'next/link';

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
}: {
  chipText: string;
  title: string;
  text: string;
}) {
  return (
    <section className={st.layout}>
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
