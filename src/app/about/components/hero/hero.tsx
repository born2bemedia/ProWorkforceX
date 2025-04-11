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
          <Title color="white">Crafting the Future of Your Career</Title>
          <Text color="white" size="xl">
            At ProWorkforceX, we specialize in providing personalized human
            resources services to help individuals thrive in their careers.
            Whether navigating the complexities of your current role, seeking
            career advancement, or facing workplace challenges, we’re here to
            provide the support and guidance you need to achieve your goals.
          </Text>
        </div>
        <Chip className={st.chip}>
          Scroll <MouseIcon /> Down
        </Chip>
      </section>
    </section>
  );
}
