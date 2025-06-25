'use client';

import { useTranslations } from 'next-intl';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

export function EmployeeBenefitsOptimization() {
  const t = useTranslations('pricingAndPackages.employeeBenefitsOptimization');

  const products: ProductDef[] = [
    {
      title: t('0.title'),
      description: t('0.desc'),
      type: t('0.type'),
      cost: { price: '€750', unit: t('0.unit') },
    },
    {
      title: t('1.title'),
      description: t('1.desc'),
      type: t('1.type'),
      cost: { from: true, price: '€1,500', unit: t('1.unit') },
    },
    {
      title: t('2.title'),
      description: t('2.desc'),
      type: t('2.type'),
      cost: { price: '€500', unit: t('2.unit') },
    },
    {
      title: t('3.title'),
      description: t('3.desc'),
      type: t('3.type'),
      cost: { from: true, price: '€600', unit: t('3.unit') },
    },
    {
      title: t('4.title'),
      description: t('4.desc'),
      type: t('4.type'),
      cost: { price: '€850', unit: t('4.unit') },
    },
    {
      title: t('5.title'),
      description: t('5.desc'),
      type: t('5.type'),
      cost: { price: '€1,000', unit: t('5.unit') },
    },
    {
      title: t('6.title'),
      description: t('6.desc'),
      type: t('6.type'),
      cost: { price: '€800', unit: t('6.unit') },
    },
    {
      title: t('7.title'),
      description: t('7.desc'),
      type: t('7.type'),
      cost: { price: '€1,200', unit: t('7.unit') },
    },
    {
      title: t('8.title'),
      description: t('8.desc'),
      type: t('8.type'),
      cost: { price: '€1,200', unit: t('8.unit') },
    },
    {
      title: t('9.title'),
      description: t('9.desc'),
      type: t('9.type'),
      cost: { price: '€1,000', unit: t('9.unit') },
    },
  ];

  return <ProductTemplate title={t('title')} number={2} products={products} />;
}
