'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './heading.module.scss';

export function Heading() {
  const t = useTranslations('howItWorks.heading');

  return (
    <section className={st.layout}>
      <Title>{t('title')}</Title>
      <div className={st.text}>
        <Text color="primary" size="xl">
          {t('text.0')}
        </Text>
        <Text color="primary" size="xl">
          {t('text.1')}
        </Text>
      </div>
    </section>
  );
}
