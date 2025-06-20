'use client';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

const products: ProductDef[] = [
  {
    title: 'Executive Leadership Development',
    description:
      'We provide tailored development programs for senior leaders to refine their strategic thinking, decision-making, and leadership skills, ensuring they lead with vision and confidence.',
    cost: {
      price: '€2,000',
      unit: 'per program',
    },
    type: 'buy',
  },
  {
    title: 'Change Management Training',
    description:
      'We help leaders navigate organizational changes, equipping them with the tools to lead teams through transitions smoothly and maintain employee morale during periods of change.',
    cost: {
      price: '€1,500',
      unit: 'per session',
    },
    type: 'buy',
  },
  {
    title: 'Conflict Resolution for Managers',
    description:
      'We provide training to equip managers with the skills to identify, address, and resolve conflicts constructively, promoting a harmonious work environment.',
    cost: {
      price: '€1,000',
      unit: 'per workshop',
    },
    type: 'buy',
  },
  {
    title: 'Exit Interviews & Turnover Analysis',
    description:
      'We conduct exit interviews and analyze turnover data to help businesses understand and reduce employee attrition.',
    cost: {
      price: '€750',
      unit: 'per analysis',
    },
    type: 'buy',
  },
  {
    title: 'Management Skills Training',
    description:
      'Our training empowers middle managers with the skills to manage teams effectively, from communication and delegation to conflict resolution and performance management.',
    cost: {
      price: '€1,500',
      unit: 'per session',
    },
    type: 'buy',
  },
  {
    title: 'Leadership Communication Skills',
    description:
      'Our programs foster collaboration, teamwork, and effective communication, ensuring your leaders can motivate and unite teams toward common goals.',
    cost: {
      price: '€1,000',
      unit: 'per training session',
    },
    type: 'buy',
  },
  {
    title: 'Performance Management & Appraisal',
    description:
      'Our programs help leaders understand how to conduct effective performance reviews, set clear goals, and provide feedback that promotes continuous improvement.',
    cost: {
      price: '€1,200',
      unit: 'per session',
    },
    type: 'buy',
  },
  {
    title: 'Emotional Intelligence for Leaders',
    description:
      'Develop emotionally intelligent leaders who can understand and manage emotions to build stronger relationships and navigate workplace challenges effectively.',
    cost: {
      price: '€1,200',
      unit: 'per workshop',
    },
    type: 'buy',
  },
  {
    title: 'Coaching & Mentoring Programs',
    description:
      'We offer customized coaching and mentoring programs for leaders at all levels, fostering personal growth and the development of high-potential employees.',
    cost: {
      from: true,
      price: '€1,500',
      unit: 'per program',
    },
    type: 'order',
  },
  {
    title: 'Succession Planning & Talent Development',
    description:
      'We assist in building strong leadership pipelines, helping organizations identify and nurture future leaders to ensure long-term organizational success.',
    cost: {
      price: '€1,800',
      unit: 'per strategy',
    },
    type: 'buy',
  },
];

export function LeadershipManagementTraining() {
  return (
    <ProductTemplate
      title="Leadership & Management Training"
      products={products}
      number={7}
    />
  );
}
