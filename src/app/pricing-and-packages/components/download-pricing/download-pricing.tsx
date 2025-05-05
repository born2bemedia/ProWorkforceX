'use client';

import { downloadFile } from '@/shared/lib/browser';
import { DownloadIcon } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './download-pricing.module.scss';

export function DownloadPricing() {
  return (
    <section className={st.layout}>
      <div className={st.content}>
        <Title level={1}>Download Your Comprehensive Pricing Guide</Title>
        <Text>
          Need a detailed view of our services and pricing? Download our
          complete price list in PDF format, and you’ll have all the information
          you need right at your fingertips.
        </Text>
      </div>
      <Button
        className={st.downloadBtn}
        onClick={() =>
          downloadFile({ url: '/files/price-list.pdf', name: 'price-list.pdf' })
        }
        variant="primaryInverted"
      >
        Download Price List <DownloadIcon />
      </Button>
    </section>
  );
}
