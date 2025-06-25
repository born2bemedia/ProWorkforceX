'use client';

import { useTranslations } from 'next-intl';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

export function RiskManagement() {
  const t = useTranslations('pricingAndPackages.riskManagement');

  const products: ProductDef[] = [
    {
      title: t('0.title'),
      description: t('0.desc'),
      cost: {
        price: '€1,500',
        unit: t('0.unit'),
      },
      type: t('0.type'),
    },
    {
      title: t('1.title'),
      description: t('1.desc'),
      cost: {
        price: '€800',
        unit: t('1.unit'),
      },
      type: t('1.type'),
    },
    {
      title: t('2.title'),
      description: t('2.desc'),
      cost: {
        price: '€1,200',
        unit: t('2.unit'),
      },
      type: t('2.type'),
    },
    {
      title: t('3.title'),
      description: t('3.desc'),
      cost: {
        price: '€500',
        unit: t('3.unit'),
      },
      type: t('3.type'),
    },
    {
      title: t('4.title'),
      description: t('4.desc'),
      cost: {
        from: true,
        price: '€1,000',
        unit: t('4.unit'),
      },
      type: t('4.type'),
    },
    {
      title: t('5.title'),
      description: t('5.desc'),
      cost: {
        price: '€900',
        unit: t('5.unit'),
      },
      type: t('5.type'),
    },
    {
      title: t('6.title'),
      description: t('6.desc'),
      cost: {
        price: '€1,500',
        unit: t('6.unit'),
      },
      type: t('6.type'),
    },
    {
      title: t('7.title'),
      description: t('7.desc'),
      cost: {
        price: '€1,200',
        unit: t('7.unit'),
      },
      type: t('7.type'),
    },
    {
      title: t('8.title'),
      description: t('8.desc'),
      cost: {
        price: '€1,000',
        unit: t('8.unit'),
      },
      type: t('8.type'),
    },
    {
      title: t('9.title'),
      description: t('9.desc'),
      cost: {
        price: '€1,800',
        unit: t('9.unit'),
      },
      type: t('9.type'),
    },
  ];

  return <ProductTemplate title={t('title')} products={products} number={8} />;
}
