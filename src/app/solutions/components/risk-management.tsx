'use client';

import { SolutionTemplate } from '@/app/solutions/components/solution-template';
import st from '@/app/solutions/components/solution-template/solution-template.module.scss';

const advantages = [
  {
    title: 'Labor Law Compliance Audits',
    desc: 'We conduct thorough audits to ensure your company’s HR practices comply with local, state, and federal labor laws, helping you avoid costly legal issues.',
  },
  {
    title: 'HR Policies & Procedure Development',
    desc: 'We help create and implement comprehensive HR policies and procedures that align with legal standards and best practices, ensuring compliance and consistency across your organization.',
  },
  {
    title: 'Workplace Safety Compliance',
    desc: 'Our team assists businesses in meeting health and safety regulations, ensuring that their workplaces are safe and compliant with OSHA and other relevant safety standards.',
  },
  {
    title: 'Employee Rights Protection',
    desc: 'We guide businesses in implementing practices that protect employee rights, including fair treatment, non-discriminatory policies, and equal opportunities.',
  },
  {
    title: 'Disciplinary & Grievance Procedures',
    desc: 'We help businesses develop transparent, fair, and legally sound disciplinary procedures, ensuring that all actions are taken in line with legal requirements and organizational values.',
  },
  {
    title: 'Data Protection & Privacy Compliance',
    desc: 'We guide data protection laws, including GDPR compliance, helping businesses protect sensitive employee information and avoid data breaches.',
  },
  {
    title: 'Anti-Discrimination & Equal Employment',
    desc: 'Our services ensure that your organization has effective anti-discrimination policies, promoting an inclusive and equitable work environment for all employees.',
  },
  {
    title: 'Employee Benefits Compliance',
    desc: 'We assist in ensuring that your employee benefits programs comply with relevant tax, legal, and healthcare regulations, safeguarding your company and employees.',
  },
  {
    title: 'Internal Investigations & Reporting',
    desc: 'We offer expertise in conducting internal investigations of employee misconduct, harassment, or workplace disputes, ensuring fairness and compliance with laws.',
  },
  {
    title: 'Legal HR Documentation',
    desc: 'We help you draft and review essential HR documents such as employment contracts, non-disclosure agreements, and severance packages to ensure they are legally compliant.',
  },
];

const images = [
  '/images/solutions/08-1.jpg',
  '/images/solutions/08-2.jpg',
  '/images/solutions/08-3.jpg',
];

export function RiskManagement() {
  return (
    <SolutionTemplate
      title={
        <>
          HR Compliance & Risk <br className={st.br} /> Management
        </>
      }
      desc={
        <>
          Helping businesses navigate complex labor laws, minimize risks, and{' '}
          <br className={st.br} /> implement compliant HR policies.
        </>
      }
      number={8}
      advantages={advantages}
      imageUrls={images}
      actionBtnText="Request Risk Management Service"
    />
  );
}
