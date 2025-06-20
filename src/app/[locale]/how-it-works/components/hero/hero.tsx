'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Chip } from '@/shared/ui/kit/chip';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Chip>How It Works</Chip>
        <Link href="/contact-us">
          <Button variant="primaryInverted">
            Contact Us <ArrowTopRight />
          </Button>
        </Link>
      </section>
      <Image
        className={st.img}
        src="/images/how-it-works/hero.jpg"
        alt="hero"
        fill
        unoptimized
      />
    </section>
  );
}
