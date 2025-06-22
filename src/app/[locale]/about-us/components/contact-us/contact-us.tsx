'use client';

import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-us.module.scss';

export function ContactUs() {
  const t = useTranslations('aboutUs.contactUs');
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <section className={st.personBg}>
        <div className={st.text}>
          <Text size="lg" color="primary">
            {t('title')}
          </Text>
        </div>
      </section>
      <section className={st.contactForm}>
        <div className={st.contactTitle}>
          <Title level={2}>{t('label')}</Title>
          <Text size="lg" color="primary">
            {t('text')}
          </Text>
        </div>
        <Button
          className={st.button}
          variant="primaryInverted"
          size="md"
          onClick={() => setOpen(true)}
        >
          {t('requestConsultation')} <ArrowTopRight />
        </Button>
      </section>
    </section>
  );
}
