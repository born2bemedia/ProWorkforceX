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
        <Chip>ABOUT US</Chip>
        <Link href="/contact-us">
          <Button>
            Contact Us <ArrowTopRight />
          </Button>
        </Link>
      </section>
      <section className={st.topBottom}>
        <div className={st.title}>
          <Title color="white">Crafting the Future of Your Workforce</Title>
          <Text color="white" size="xl">
            At ProWorkforceX, we specialize in providing businesses with
            personalized human resources services designed to optimize workforce
            management. Whether you need support with talent acquisition,
            employee benefits, workplace conflict resolution, or leadership
            development, we’re here to help you build and maintain a
            high-performing workforce.
          </Text>
        </div>
        <Chip className={st.chip}>
          Scroll <MouseIcon /> Down
        </Chip>
      </section>
    </section>
  );
}
