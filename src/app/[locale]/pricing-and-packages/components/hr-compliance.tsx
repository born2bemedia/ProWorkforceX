'use client';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

const products: ProductDef[] = [
  {
    title: 'Labor Law Compliance Audits',
    description:
      'We conduct thorough audits to ensure your company complies with all local, state, and federal labor laws.',
    cost: {
      price: '€1,200',
      unit: 'per audit',
    },
    type: 'buy',
  },
  {
    title: 'HR Policies & Procedure Development',
    description:
      'We help you develop clear, compliant HR policies and procedures that align with best practices and legal requirements.',
    cost: {
      price: '€1,000',
      unit: 'per policy development',
    },
    type: 'buy',
  },
  {
    title: 'Risk Mitigation Strategies',
    description:
      'We create comprehensive employee handbooks outlining workplace rules, expectations, and company policies.',
    cost: {
      price: '€1,500',
      unit: 'per handbook',
    },
    type: 'buy',
  },
  {
    title: 'Audit & Compliance Reporting',
    description:
      'We ensure your business fully complies with HR laws and generates necessary reports to maintain compliance standards.',
    cost: {
      price: '€800',
      unit: 'per report',
    },
    type: 'buy',
  },
  {
    title: 'Employee Rights Protection',
    description:
      'We guide businesses in protecting employee rights and promoting fair treatment in all workplace policies and practices.',
    cost: {
      price: '€900',
      unit: 'per consultation',
    },
    type: 'buy',
  },
  {
    title: 'Data Protection & Privacy Compliance',
    description:
      'We offer expert advice on data protection laws, ensuring your company meets GDPR and other privacy regulations.',
    cost: {
      price: '€1,000',
      unit: 'per consultation',
    },
    type: 'buy',
  },
  {
    title: 'Contract Management & Employee Agreements',
    description:
      'We assist in creating legally compliant contracts and employee agreements that protect your business and your employees.',
    cost: {
      from: true,
      price: '€500',
      unit: 'per contract/agreement',
    },
    type: 'order',
  },
  {
    title: 'Health & Safety Compliance',
    description:
      'We ensure your company adheres to health and safety regulations, reducing workplace accidents and risks.',
    cost: {
      from: true,
      price: '€1,500',
      unit: 'per assessment',
    },
    type: 'order',
  },
  {
    title: 'Risk Mitigation Strategies',
    description:
      'We help businesses identify and mitigate HR-related risks, including employee disputes, compliance violations, and workforce issues.',
    cost: {
      from: true,
      price: '€1,200',
      unit: 'per consultation',
    },
    type: 'buy',
  },
  {
    title: 'Workplace Investigations',
    description:
      'We conduct workplace investigations to address potential issues such as harassment, discrimination, or misconduct.',
    cost: {
      from: true,
      price: '€1,500',
      unit: 'per investigation',
    },
    type: 'buy',
  },
];

export function HRCompliance() {
  return (
    <ProductTemplate
      title="HR Compliance & Risk Management"
      products={products}
      number={5}
    />
  );
}
