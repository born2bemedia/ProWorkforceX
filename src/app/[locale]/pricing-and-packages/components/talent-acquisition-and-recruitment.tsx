'use client';

import { useTranslations } from 'next-intl';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

export function TalentAcquisitionRecruitment() {
  const t = useTranslations('pricingAndPackages.talentAcquisitionRecruitment');

  const products: ProductDef[] = [
    {
      title: t('0.title'),
      description: t('0.desc'),
      type: t('0.type'),
      cost: {
        unit: t('0.unit'),
        price: '€700',
      },
    },
    {
      title: t('1.title'),
      description: t('1.desc'),
      type: t('1.type'),
      cost: {
        from: true,
        unit: t('1.unit'),
        price: '€1,800',
      },
    },
    {
      title: t('2.title'),
      description: t('2.desc'),
      type: t('2.type'),
      cost: {
        from: true,
        unit: t('2.unit'),
        price: '€500',
      },
    },
    {
      title: t('3.title'),
      description: t('3.desc'),
      type: t('3.type'),
      cost: {
        from: true,
        unit: t('3.unit'),
        price: '€2,000',
      },
    },
    {
      title: t('4.title'),
      description: t('4.desc'),
      type: t('4.type'),
      cost: {
        unit: t('4.unit'),
        price: '€750',
      },
    },
    {
      title: t('5.title'),
      description: t('5.desc'),
      type: t('5.type'),
      cost: {
        unit: t('5.unit'),
        price: '€350',
      },
    },
    {
      title: t('6.title'),
      description: t('6.desc'),
      type: t('6.type'),
      cost: {
        unit: t('6.unit'),
        price: '€700',
      },
    },
    {
      title: t('7.title'),
      description: t('7.desc'),
      type: t('7.type'),
      cost: {
        unit: t('7.unit'),
        price: '€850',
      },
    },
    {
      title: t('8.title'),
      description: t('8.desc'),
      type: t('8.type'),
      cost: {
        from: true,
        unit: t('8.unit'),
        price: '€1,200',
      },
    },
    {
      title: t('9.title'),
      description: t('9.desc'),
      type: t('9.type'),
      cost: {
        from: true,
        unit: t('9.unit'),
        price: '€1,000',
      },
    },
  ];

  return <ProductTemplate title={t('title')} products={products} number={1} />;
}
