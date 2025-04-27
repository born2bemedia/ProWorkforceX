'use client';

import { SolutionTemplate } from '@/app/solutions/components/solution-template';
import st from '@/app/solutions/components/solution-template/solution-template.module.scss';

const advantages = [
  {
    title: 'Conflict Diagnosis & Prevention',
    desc: 'We help identify potential conflict areas within your organization and prevent issues before they escalate.',
  },
  {
    title: 'Mediation Services',
    desc: 'Our trained mediators facilitate productive discussions to resolve conflicts and disputes between employees.',
  },
  {
    title: 'Conflict Management Training',
    desc: 'We train managers and employees on conflict resolution techniques to address issues professionally and effectively.',
  },
  {
    title: 'Employee Relations Strategy',
    desc: 'We help you develop an employee relations strategy that fosters positive workplace dynamics and addresses grievances promptly.',
  },
  {
    title: 'Disciplinary Action Procedures',
    desc: 'We assist in developing fair and consistent disciplinary policies and ensure compliance with legal requirements.',
  },
  {
    title: 'Workplace Harassment Prevention',
    desc: 'We offer training and policy development to prevent harassment and create a respectful workplace culture.',
  },
  {
    title: 'Team Building & Conflict Prevention',
    desc: 'We organize team-building exercises and workshops to promote collaboration and reduce the likelihood of conflicts.',
  },
  {
    title: 'Resolution of Workplace Grievances',
    desc: 'We guide businesses in establishing clear channels for employees to raise concerns and grievances, resolving them efficiently.',
  },
  {
    title: 'Restorative Justice Practices',
    desc: 'We implement restorative practices to help resolve conflicts by repairing relationships and rebuilding trust.',
  },
  {
    title: 'Employee Mediation Programs',
    desc: 'We offer long-term mediation programs to support employees in resolving ongoing conflicts and building stronger working relationships.',
  },
];

const images = [
  '/images/solutions/04-1.jpg',
  '/images/solutions/04-2.jpg',
  '/images/solutions/04-3.jpg',
];

export function WorkplaceConflictResolution() {
  return (
    <SolutionTemplate
      title={
        <>
          Workplace <br className={st.br} /> Conflict Resolution
        </>
      }
      desc={
        <>
          Ensuring a harmonious work environment with our conflict resolution
          <br className={st.br} /> services designed to address and resolve
          disputes effectively.
        </>
      }
      number={4}
      advantages={advantages}
      imageUrls={images}
      actionBtnText="Request Conflict Service"
      reverse
    />
  );
}
