'use client';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

const products: ProductDef[] = [
  {
    title: 'Comprehensive Benefits Analysis',
    description:
      'We conduct a full analysis of your current benefits packages to identify areas for improvement.',
    type: 'buy',
    cost: { price: '€750', unit: 'per analysis' },
  },
  {
    title: 'Employee Wellness Programs',
    description:
      'We design and implement wellness programs that improve employees’ physical and mental health.',
    type: 'order',
    cost: { from: true, price: '€1,500', unit: 'per program' },
  },
  {
    title: 'Paid Time Off & Leave Policies',
    description:
      'We help create fair and transparent leave policies that balance company needs with employee well-being.',
    type: 'buy',
    cost: { price: '€500', unit: 'per policy' },
  },
  {
    title: 'Employee Recognition Programs',
    description:
      'We assist in creating employee recognition programs to acknowledge and celebrate achievements and milestones.',
    type: 'order',
    cost: { from: true, price: '€600', unit: 'per program' },
  },
  {
    title: 'Benefits Benchmarking',
    description:
      'We compare your benefits packages with industry standards and offer guidance on adjustments to stay competitive.',
    type: 'buy',
    cost: { price: '€850', unit: 'per comparison' },
  },
  {
    title: 'Retirement Plans & Pension Schemes',
    description:
      'We assist in developing retirement solutions that ensure employees’ future financial security and align with your business needs.',
    type: 'order',
    cost: { price: '€1,000', unit: 'per plan' },
  },
  {
    title: 'Flexible Working Arrangements',
    description:
      'We help implement flexible working policies, including remote, flextime, and compressed workweeks.',
    type: 'buy',
    cost: { price: '€800', unit: 'per arrangement setup' },
  },
  {
    title: 'Custom Benefits Design',
    description:
      'We tailor benefits programs to your company’s goals and budget, ensuring employee satisfaction.',
    type: 'order',
    cost: { price: '€1,200', unit: 'per design' },
  },
  {
    title: 'Healthcare & Insurance Plans',
    description:
      'We provide expert advice on creating comprehensive healthcare and insurance plans for your workforce.',
    type: 'buy',
    cost: { price: '€1,200', unit: 'per plan' },
  },
  {
    title: 'Performance-Based Benefits',
    description:
      'We help design performance-based incentives and bonuses to motivate and reward employees for their contributions.',
    type: 'buy',
    cost: { price: '€1,000', unit: 'per program' },
  },
];

export function EmployeeBenefitsOptimization() {
  return (
    <ProductTemplate
      title="Employee Benefits Optimization"
      number={2}
      products={products}
    />
  );
}
