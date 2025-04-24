'use client';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

const products: ProductDef[] = [
  {
    title: 'Employee Engagement Surveys',
    description:
      'We design and conduct surveys to gauge employee engagement and identify areas for improvement.',
    cost: {
      price: '€1,000',
      unit: 'per survey',
    },
    type: 'buy',
  },
  {
    title: 'Workplace Culture Assessment',
    description:
      'We assess your company culture and provide recommendations to create a positive, inclusive, and motivating environment.',
    cost: {
      price: '€1,500',
      unit: 'per assessment',
    },
    type: 'buy',
  },
  {
    title: 'Flexible Work Environment Strategies',
    description:
      'We assist in implementing flexible work arrangements to increase job satisfaction and work-life balance.',
    cost: {
      price: '€800',
      unit: 'per program',
    },
    type: 'buy',
  },
  {
    title: 'Exit Interviews & Turnover Analysis',
    description:
      'We conduct exit interviews and analyze turnover data to help businesses understand and reduce employee attrition.',
    cost: {
      price: '€750',
      unit: 'per interview and analysis',
    },
    type: 'buy',
  },
  {
    title: 'Recognition Programs',
    description:
      'We help create employee recognition programs that reward and acknowledge contributions, enhancing job satisfaction.',
    cost: {
      price: '€800',
      unit: 'per program',
    },
    type: 'buy',
  },
  {
    title: 'Employee Satisfaction Programs',
    description:
      'We develop and implement satisfaction programs that enhance morale and improve employee retention.',
    cost: {
      price: '€1,000',
      unit: 'per program',
    },
    type: 'buy',
  },
  {
    title: 'Employee Feedback Programs',
    description:
      'We help businesses collect and analyze employee feedback to drive improvements in the workplace environment.',
    cost: {
      price: '€900',
      unit: 'per program',
    },
    type: 'order',
  },
  {
    title: 'Retention Strategy Development',
    description:
      'We assist in developing strategies to retain top talent, including career development plans and competitive compensation.',
    cost: {
      from: true,
      price: '€1,200',
      unit: 'per strategy',
    },
    type: 'order',
  },
  {
    title: 'Professional Development Opportunities',
    description:
      'We help you create career development initiatives that allow employees to grow within your organization.',
    cost: {
      price: '€1,000',
      unit: 'per program',
    },
    type: 'buy',
  },
  {
    title: 'Workforce Engagement Initiatives',
    description:
      'We guide you in creating engaging initiatives to enhance employee commitment and productivity.',
    cost: {
      price: '€1,200',
      unit: 'per initiative',
    },
    type: 'buy',
  },
];

export function EmployeeEngagement() {
  return (
    <ProductTemplate
      title="Employee Engagement & Retention"
      products={products}
      number={6}
    />
  );
}
