'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.layout}>
      <Card />
      <div className={st.imgLayout}>
        <div className={st.imgWrapper}>
          <Image
            src="/images/contact-us/hero.jpg"
            alt="hero-img"
            fill
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

function Card() {
  const t = useTranslations('contactUs.hero');

  return (
    <section className={st.cardLayout}>
      <section className={st.cardContent}>
        <Title>{t('title')}</Title>
        <Text className={st.text}>{t('text')}</Text>
      </section>
      <Link href="#contact-form">
        <Button variant="primaryInverted">
          {t('contact')} <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
