'use client';

import { useTranslations } from 'next-intl';

import { Hero as HeroComp } from '@/shared/ui/components/hero';

import st from './hero.module.scss';

export function Hero() {
  const t = useTranslations('solutions.hero');

  return (
    <HeroComp
      chipText={t('label')}
      title={t('title')}
      text={
        <>
          {t('desc.0')} <br />
          <br className={st.brMobile} />
          {t('desc.1')}
        </>
      }
      imageUrl="/images/solutions/hero.jpg"
      className={st.heroMobile}
    />
  );
}
