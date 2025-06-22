'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './lets-build-future.module.scss';

export function LetsBuildFuture() {
  const t = useTranslations('home.letsBuildFuture');
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Title level={2}>{t('title')}</Title>
        <Text color="primary" className={st.text}>
          {t('desc.0')} <br />
          <br /> {t('desc.1')}
        </Text>
        <Button
          variant="primaryInverted"
          size="md"
          onClick={() => setOpen(true)}
        >
          {t('requestQuote')} <ArrowTopRight />
        </Button>
      </section>
      <section className={st.img}>
        <Image
          src="/images/home/mask.svg"
          alt="mask"
          fill
          style={{
            objectFit: 'cover',
            zIndex: 0,
            WebkitMaskImage: 'linear-gradient(to right, transparent, black)',
            WebkitMaskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to right, transparent, black)',
            maskSize: '100% 100%',
            maskRepeat: 'no-repeat',
          }}
        />
      </section>
    </section>
  );
}
