'use client';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

const products: ProductDef[] = [
  {
    title: 'Recruitment Strategy Development',
    description:
      "We work with you to create a strategy that best fits your company's needs and culture.",
    type: 'buy',
    cost: {
      unit: 'per hour',
      price: '€700',
    },
  },
  {
    title: 'Executive Search Services',
    description:
      'We provide high-level executive search for senior and specialized roles to ensure the right leadership for your company.',
    type: 'order',
    cost: {
      from: true,
      unit: 'per search',
      price: '€1,800',
    },
  },
  {
    title: 'Employee Referral Programs',
    description:
      'Ensuring new hires seamlessly integrate into your company culture.',
    type: 'order',
    cost: {
      from: true,
      unit: 'per program',
      price: '€500',
    },
  },
  {
    title: 'Campus Recruitment',
    description:
      'We assist in attracting fresh talent by partnering with universities and colleges for campus recruitment events and initiatives.',
    type: 'order',
    cost: {
      from: true,
      unit: 'per event',
      price: '€2,000',
    },
  },
  {
    title: 'Talent Sourcing & Screening',
    description:
      'We assist with sourcing top candidates and screening resumes to deliver high-quality candidates.',
    type: 'buy',
    cost: {
      unit: 'per hour',
      price: '€750',
    },
  },
  {
    title: 'Job Advertisement & Campaigns',
    description:
      'We create and distribute targeted job ads across multiple platforms to ensure maximum reach.',
    type: 'buy',
    cost: {
      unit: 'per campaign',
      price: '€350',
    },
  },
  {
    title: 'Diversity Recruitment Strategies',
    description:
      'We provide strategies to help you build a diverse and inclusive workforce, fostering innovation and creativity.',
    type: 'buy',
    cost: {
      unit: 'per hour',
      price: '€700',
    },
  },
  {
    title: 'Candidate Interviews & Assessments',
    description:
      'Our experts conduct interviews and use assessments to evaluate candidates based on skills, experience, and cultural fit.',
    type: 'buy',
    cost: {
      unit: 'per interview',
      price: '€850',
    },
  },
  {
    title: 'Recruitment Process Outsourcing (RPO)',
    description:
      'We can manage your entire recruitment process or specific parts depending on your needs.',
    type: 'order',
    cost: {
      from: true,
      unit: 'per campaign',
      price: '€1,200',
    },
  },
  {
    title: 'Temporary & Contract Staffing',
    description:
      'We provide temporary and contract staffing solutions to meet short-term workforce needs or specific project demands.',
    type: 'order',
    cost: {
      from: true,
      unit: 'per placement',
      price: '€1,000',
    },
  },
];

export function TalentAcquisitionRecruitment() {
  return (
    <ProductTemplate
      title="Talent Acquisition & Recruitment"
      products={products}
      number={1}
    />
  );
}
