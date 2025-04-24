'use client';

import type { ProductDef } from '@/features/product/lib';

import { ProductTemplate } from './product-template';

const products: ProductDef[] = [
  {
    title: 'Conflict Diagnosis & Prevention',
    description:
      'We help identify potential conflict areas within your organization and prevent issues before they escalate.',
    cost: {
      price: '€750',
      unit: 'per assessment',
    },
    type: 'buy',
  },
  {
    title: 'Employee Relations Strategy',
    description:
      'We help you develop an employee relations strategy that fosters positive workplace dynamics and addresses grievances promptly.',
    cost: {
      price: '€1,500',
      unit: 'per strategy development',
    },
    type: 'buy',
  },
  {
    title: 'Team Building & Conflict Prevention',
    description:
      'We organize team-building exercises and workshops to promote collaboration and reduce the likelihood of conflicts.',
    cost: {
      price: '€1,500',
      unit: 'per workshop',
    },
    type: 'buy',
  },
  {
    title: 'Employee Mediation Programs',
    description:
      'We offer long-term mediation programs to support employees in resolving ongoing conflicts and building stronger working relationships.',
    cost: {
      from: true,
      price: '€1,500',
      unit: 'per program',
    },
    type: 'order',
  },
  {
    title: 'Mediation Services',
    description:
      'Our trained mediators facilitate productive discussions to resolve conflicts and disputes between employees.',
    cost: {
      price: '€1,200',
      unit: 'per mediation session',
    },
    type: 'buy',
  },
  {
    title: 'Disciplinary Action Procedures',
    description:
      'We assist in developing fair and consistent disciplinary policies and ensure compliance with legal requirements.',
    cost: {
      price: '€750',
      unit: 'per procedure development',
    },
    type: 'buy',
  },
  {
    title: 'Resolution of Workplace Grievances',
    description:
      'We guide businesses in establishing clear channels for employees to raise concerns and grievances, resolving them efficiently.',
    cost: {
      price: '€800',
      unit: 'per system implementation',
    },
    type: 'buy',
  },
  {
    title: 'Conflict Management Training',
    description:
      'We train managers and employees on conflict resolution techniques to address issues professionally and effectively.',
    cost: {
      price: '€1,000',
      unit: 'per training session',
    },
    type: 'buy',
  },
  {
    title: 'Workplace Harassment Prevention',
    description:
      'We offer training and policy development to prevent harassment and create a respectful workplace culture.',
    cost: {
      from: true,
      price: '€1,000',
      unit: 'per program',
    },
    type: 'order',
  },
  {
    title: 'Restorative Justice Practices',
    description:
      'We implement restorative practices to help resolve conflicts by repairing relationships and rebuilding trust.',
    cost: {
      price: '€1,200',
      unit: 'per program',
    },
    type: 'buy',
  },
];

export function WorkplaceConflictResolution() {
  return (
    <ProductTemplate
      title="Workplace Conflict Resolution"
      products={products}
      number={4}
    />
  );
}
