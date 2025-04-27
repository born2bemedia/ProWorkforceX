'use client';

import { SolutionTemplate } from '@/app/solutions/components/solution-template';
import st from '@/app/solutions/components/solution-template/solution-template.module.scss';

const advantages = [
  {
    title: 'Labor Law Compliance Audits',
    desc: 'We conduct thorough audits to ensure your company complies with all local, state, and federal labor laws.',
  },
  {
    title: 'Employee Rights Protection',
    desc: 'We guide businesses in protecting employee rights and promoting fair treatment in all workplace policies and practices.',
  },
  {
    title: 'Health & Safety Compliance',
    desc: 'We ensure your company adheres to health and safety regulations, reducing workplace accidents and risks.',
  },
  {
    title: 'HR Policies & Procedure Development',
    desc: 'We help you develop clear, compliant HR policies and procedures that align with best practices and legal requirements.',
  },
  {
    title: 'Data Protection & Privacy Compliance',
    desc: 'We offer expert advice on data protection laws, ensuring your company meets GDPR and other privacy regulations.',
  },
  {
    title: 'Risk Mitigation Strategies',
    desc: 'We help businesses identify and mitigate HR-related risks, including employee disputes, compliance violations, and workforce issues.s',
  },
  {
    title: 'Employee Handbook Development',
    desc: 'We create comprehensive employee handbooks outlining workplace rules, expectations, and company policies.',
  },
  {
    title: 'Contract Management & Employee Agreements',
    desc: 'We assist in creating legally compliant contracts and employee agreements that protect your business and your employees.',
  },
  {
    title: 'Workplace Investigations',
    desc: 'We conduct workplace investigations to address potential issues such as harassment, discrimination, or misconduct.',
  },
  {
    title: 'Audit & Compliance Reporting',
    desc: 'We ensure your business fully complies with HR laws and generate necessary reports to maintain compliance standards.',
  },
];

const images = [
  '/images/solutions/05-1.jpg',
  '/images/solutions/05-2.jpg',
  '/images/solutions/05-3.jpg',
];

export function HRCompliance() {
  return (
    <SolutionTemplate
      title={
        <>
          HR Compliance & <br className={st.br} /> Risk Management
        </>
      }
      desc={
        <>
          Maintaining compliance with HR regulations while minimizing risks with
          our <br className={st.br} /> comprehensive support services.
        </>
      }
      number={5}
      advantages={advantages}
      imageUrls={images}
      actionBtnText="Request Compliance Service"
    />
  );
}
