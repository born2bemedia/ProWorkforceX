'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowTopRight, MouseIcon } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Chip } from '@/shared/ui/kit/chip';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className={st.layout}>
      <section className={st.topHero}>
        <Chip>{t('label')}</Chip>
        <Link href="/contact-us">
          <Button>
            {t('contactUs')} <ArrowTopRight />
          </Button>
        </Link>
      </section>
      <section className={st.topBottom}>
        <div className={st.title}>
          <Title color="white">{t('title')}</Title>
          <Text color="white" size="xl">
            {t('description')}
          </Text>
        </div>
        <Chip className={st.chip}>
          {t('scrollLabel.0')} <MouseIcon /> {t('scrollLabel.1')}
        </Chip>
      </section>
    </section>
  );
}
