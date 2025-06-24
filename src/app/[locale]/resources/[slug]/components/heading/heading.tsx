'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './heading.module.scss';

export function Heading() {
  const t = useTranslations('resources.heading');

  return (
    <section className={st.layout}>
      <Title className={st.title}>{t('title')}</Title>
      <Text color="primary" size="lg">
        {t('text.0')}
        <br />
        <br /> {t('text.1')}
      </Text>
    </section>
  );
}
