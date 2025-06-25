'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-approach.module.scss';

export function OurApproach() {
  const t = useTranslations('aboutUs.ourApproach');

  return (
    <section className={st.layout}>
      <section className={st.imgLayout}>
        <Image
          className={st.img}
          src="/images/about-us/our-approach.png"
          alt="our-approach"
          unoptimized
          fill
        />
      </section>
      <section className={st.titleLayout}>
        <Title level={2}>{t('title')}</Title>
        <Text color="primary" size="lg" className={st.text}>
          {t('desc.0')} <br />
          <br /> {t('desc.1')}
        </Text>
      </section>
    </section>
  );
}
