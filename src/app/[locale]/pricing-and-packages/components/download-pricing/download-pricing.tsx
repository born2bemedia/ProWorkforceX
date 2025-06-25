'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { downloadFile } from '@/shared/lib/browser';
import { DownloadIcon } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './download-pricing.module.scss';

export function DownloadPricing() {
  const t = useTranslations('pricingAndPackages.downloadPricing');

  return (
    <section className={st.layout}>
      <Image
        src="/images/packages-and-pricing/mask-l.svg"
        alt="mask"
        fill
        unoptimized
        className={st.maskL}
        style={{
          objectFit: 'cover',
          zIndex: 0,
          WebkitMaskImage:
            'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.2) 40%, black 100%)',
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskImage:
            'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.2) 40%, black 100%)',
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
        }}
      />
      <div className={st.content}>
        <Title level={1}>{t('title')}</Title>
        <Text>{t('desc')}</Text>
      </div>
      <Button
        className={st.downloadBtn}
        onClick={() =>
          downloadFile({ url: '/files/price-list.pdf', name: 'price-list.pdf' })
        }
        variant="primaryInverted"
      >
        {t('btn')} <DownloadIcon />
      </Button>
      <Image
        src="/images/packages-and-pricing/mask-r.svg"
        alt="mask"
        fill
        unoptimized
        className={st.maskR}
        style={{
          objectFit: 'cover',
          zIndex: 0,
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 40%, black 100%)',
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 40%, black 100%)',
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
        }}
      />
    </section>
  );
}
