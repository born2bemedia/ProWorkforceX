'use client';

import Link from 'next/link';

import { ArrowTopRight, MouseIcon } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.layout}>
      <section className={st.topHero}>
        <Chip>BUILD YOUR CAREER</Chip>
        <Link href="/contact-us">
          <Button>
            Contact Us <ArrowTopRight />
          </Button>
        </Link>
      </section>
      <section className={st.topBottom}>
        <div className={st.title}>
          <Title color="white">
            Empowering Your Workforce, Streamlining HR for Your Business
          </Title>
          <Text color="white" size="xl">
            At ProWorkforceX, we specialize in providing businesses with
            tailored HR solutions to help them attract, manage, and retain top
            talent. Whether you need assistance with recruitment, HR management,
            employee benefits, or workplace mediation, we’ve got you covered.
          </Text>
        </div>
        <Chip className={st.chip}>
          Scroll <MouseIcon /> Down
        </Chip>
      </section>
    </section>
  );
}
