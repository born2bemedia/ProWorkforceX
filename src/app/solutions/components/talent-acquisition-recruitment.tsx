'use client';

import { SolutionTemplate } from '@/app/solutions/components/solution-template';
import st from '@/app/solutions/components/solution-template/solution-template.module.scss';

const advantages = [
  {
    title: 'Recruitment Strategy Development',
    desc: "We work with you to create a strategy that best fits your company's needs and culture.",
  },
  {
    title: 'Talent Sourcing & Screening',
    desc: 'We assist with sourcing top candidates and screening resumes to deliver high-quality candidates.',
  },
  {
    title: 'Candidate Interviews & Assessments',
    desc: 'Our experts conduct interviews and use assessments to evaluate candidates based on skills, experience, and cultural fit.',
  },
  {
    title: 'Executive Search Services',
    desc: 'We provide high-level executive search for senior and specialized roles to ensure the right leadership for your company.',
  },
  {
    title: 'Job Advertisement & Campaigns',
    desc: 'We create and distribute targeted job ads across multiple platforms to ensure maximum reach.',
  },
  {
    title: 'Recruitment Process Outsourcing (RPO)',
    desc: 'We can manage your entire recruitment process or specific parts depending on your needs.',
  },
  {
    title: 'Employee Referral Programs',
    desc: 'Ensuring new hires seamlessly integrate into your company culture.',
  },
  {
    title: 'Diversity Recruitment Strategies',
    desc: 'We provide strategies to help you build a diverse and inclusive workforce, fostering innovation and creativity.',
  },
  {
    title: 'Temporary & Contract Staffing',
    desc: 'We provide temporary and contract staffing solutions to meet short-term workforce needs or specific project demands.',
  },
  {
    title: 'Campus Recruitment',
    desc: 'We assist in attracting fresh talent by partnering with universities and colleges for campus recruitment events and initiatives.',
  },
];

const images = [
  '/images/solutions/01-1.jpg',
  '/images/solutions/01-2.jpg',
  '/images/solutions/01-3.jpg',
];

export function TalentAcquisitionRecruitment() {
  return (
    <SolutionTemplate
      title={
        <>
          Talent Acquisition & <br className={st.br} />
          Recruitment
        </>
      }
      desc={
        <>
          Finding the right talent is crucial to your business success. We
          provide <br className={st.br} /> comprehensive services to help your
          business attract, hire, and retain the <br className={st.br} /> best
          candidates.
        </>
      }
      number={1}
      advantages={advantages}
      imageUrls={images}
      actionBtnText="Request Recruitment Service"
    />
  );
}
