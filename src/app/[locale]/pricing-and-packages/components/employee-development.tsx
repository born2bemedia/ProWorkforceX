'use client';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

const products: ProductDef[] = [
  {
    title: 'Career Coaching & Counseling',
    description:
      'We provide career coaching services to help employees navigate their career paths and professional development.',
    cost: {
      price: '€600',
      unit: 'per session',
    },
    type: 'buy',
  },
  {
    title: 'Skill Development & Certification Programs',
    description:
      'We help implement skill development programs that lead to certifications, enhancing employee competencies.',
    cost: {
      from: true,
      price: '€1,500',
      unit: 'per program',
    },
    type: 'buy',
  },
  {
    title: 'Workplace Learning & Knowledge Sharing',
    description:
      'We help foster a learning culture through internal knowledge-sharing initiatives and learning platforms.',
    cost: {
      price: '€1,000',
      unit: 'per program',
    },
    type: 'buy',
  },
  {
    title: 'Feedback & Performance Reviews',
    description:
      'We help implement regular feedback and performance review systems to track employee progress and foster continuous improvement.',
    cost: {
      price: '€750',
      unit: 'per review system',
    },
    type: 'buy',
  },
  {
    title: 'Training Needs Analysis',
    description:
      'We assess your company’s training needs to ensure employees receive relevant and impactful learning opportunities.',
    cost: {
      price: '€800',
      unit: 'per analysis',
    },
    type: 'buy',
  },
  {
    title: 'Mentorship Programs',
    description:
      'We facilitate mentorship programs that pair experienced leaders with emerging talent to foster knowledge transfer.',
    cost: {
      from: true,
      price: '€1,000',
      unit: 'per program',
    },
    type: 'order',
  },
  {
    title: 'Personalized Employee Growth Plans',
    description:
      'We create individualized growth plans for employees based on their goals, skills, and company needs.',
    cost: {
      price: '€600',
      unit: 'per plan',
    },
    type: 'buy',
  },
  {
    title: 'Leadership & Management Training',
    description:
      'We develop leadership skills across all levels, from emerging managers to senior executives, ensuring effective team leadership.',
    cost: {
      from: true,
      price: '€1,500',
      unit: 'per program',
    },
    type: 'order',
  },
  {
    title: 'Succession Planning',
    description:
      'We assist in creating a succession plan to ensure your organization has a strong pipeline of future leaders.',
    cost: {
      from: true,
      price: '€1,000',
      unit: 'per program',
    },
    type: 'buy',
  },
  {
    title: 'Cross-Training Programs',
    description:
      'We design cross-training initiatives to enhance employee flexibility and promote collaboration across departments.',
    cost: {
      price: '€1,000',
      unit: 'per program',
    },
    type: 'buy',
  },
];

export function EmployeeDevelopment() {
  return (
    <ProductTemplate
      title="Employee Development & Career Advancement"
      products={products}
      number={3}
    />
  );
}
