'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './thank-you-view.module.scss';

export function ThankYouOrderView() {
  const t = useTranslations('thankYouOrder');

  return (
    <section className={st.layout}>
      <div className={st.title}>
        <Title level={3}>{t('title')}</Title>
        <Text size="lg" color="primary">
          {t('desc')}
        </Text>
      </div>
    </section>
  );
}
