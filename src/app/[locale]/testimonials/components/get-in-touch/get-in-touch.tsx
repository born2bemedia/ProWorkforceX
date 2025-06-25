'use client';

import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './get-in-touch.module.scss';

export function GetInTouch() {
  const t = useTranslations('testimonials.getInTouch');
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title>{t('title')}</Title>
        <Text color="primary" size="lg">
          {t('desc.0')} <strong>{t('desc.1')}</strong> {t('desc.2')}
        </Text>
      </section>
      <Button
        variant="primaryInverted"
        size="md"
        style={{ zIndex: 5 }}
        onClick={() => setOpen(true)}
      >
        {t('request')} <ArrowTopRight />
      </Button>
    </section>
  );
}
