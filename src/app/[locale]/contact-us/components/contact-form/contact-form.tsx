'use client';

import { useTranslations } from 'next-intl';

import { ContactForm as ContactUsForm } from '@/features/request-form/components';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-form.module.scss';

export function ContactForm() {
  const t = useTranslations('contactUs.form');

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={2} className={st.title}>
          {t('title')}
        </Title>
        <Text>{t('desc')}</Text>
      </section>
      <ContactUsForm />
    </section>
  );
}
