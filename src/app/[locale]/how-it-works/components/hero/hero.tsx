'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Chip } from '@/shared/ui/kit/chip';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('howItWorks.hero');

  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Chip>{t('label')}</Chip>
        <Link href="/contact-us">
          <Button variant="primaryInverted">
            {t('contactUs')} <ArrowTopRight />
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
