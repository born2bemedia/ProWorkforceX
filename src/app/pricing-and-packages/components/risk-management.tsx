'use client';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

const products: ProductDef[] = [
  {
    title: 'Labor Law Compliance Audits',
    description:
      'We conduct thorough audits to ensure your company’s HR practices comply with local, state, and federal labor laws, helping you avoid costly legal issues.',
    cost: {
      price: '€1,500',
      unit: 'per audit',
    },
    type: 'buy',
  },
  {
    title: 'Employee Rights Protection',
    description:
      'We guide businesses in implementing practices that protect employee rights, including fair treatment, non-discriminatory policies, and equal opportunities.',
    cost: {
      price: '€800',
      unit: 'per consultation',
    },
    type: 'buy',
  },
  {
    title: 'Anti-Discrimination & Equal Employment',
    description:
      'Our services ensure that your organization has effective anti-discrimination policies, promoting an inclusive and equitable work environment for all employees.',
    cost: {
      price: '€1,200',
      unit: 'per policy review',
    },
    type: 'buy',
  },
  {
    title: 'Legal HR Documentation',
    description:
      'We help you draft and review essential HR documents such as employment contracts, non-disclosure agreements, and severance packages to ensure they are legally compliant.',
    cost: {
      price: '€500',
      unit: 'per document review',
    },
    type: 'buy',
  },
  {
    title: 'HR Policies & Procedure Development',
    description:
      'We help create and implement comprehensive HR policies and procedures that align with legal standards and best practices, ensuring compliance and consistency across your organization.',
    cost: {
      from: true,
      price: '€1,000',
      unit: 'per policy development',
    },
    type: 'order',
  },
  {
    title: 'Disciplinary & Grievance Procedures',
    description:
      'We help businesses develop transparent, fair, and legally sound disciplinary procedures, ensuring that all actions are taken in line with legal requirements and organizational values.',
    cost: {
      price: '€900',
      unit: 'per procedure development',
    },
    type: 'buy',
  },
  {
    title: 'Employee Benefits Compliance',
    description:
      'We assist in ensuring that your employee benefits programs comply with relevant tax, legal, and healthcare regulations, safeguarding your company and employees.',
    cost: {
      price: '€1,500',
      unit: 'per review',
    },
    type: 'buy',
  },
  {
    title: 'Workplace Safety Compliance',
    description:
      'Our team assists businesses in meeting health and safety regulations, ensuring that their workplaces are safe and compliant with OSHA and other relevant safety standards.',
    cost: {
      price: '€1,200',
      unit: 'per assessment',
    },
    type: 'buy',
  },
  {
    title: 'Data Protection & Privacy Compliance',
    description:
      'We guide data protection laws, including GDPR compliance, helping businesses protect sensitive employee information and avoid data breaches.',
    cost: {
      price: '€1,000',
      unit: 'per consultation',
    },
    type: 'buy',
  },
  {
    title: 'Internal Investigations & Reporting',
    description:
      'We offer expertise in conducting internal investigations of employee misconduct, harassment, or workplace disputes, ensuring fairness and compliance with laws.',
    cost: {
      price: '€1,800',
      unit: 'per investigation',
    },
    type: 'buy',
  },
];

export function RiskManagement() {
  return (
    <ProductTemplate
      title="HR Compliance & Risk Management"
      products={products}
      number={8}
    />
  );
}
