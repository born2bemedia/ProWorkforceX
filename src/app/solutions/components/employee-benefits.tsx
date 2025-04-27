'use client';

import { SolutionTemplate } from '@/app/solutions/components/solution-template';
import st from '@/app/solutions/components/solution-template/solution-template.module.scss';

const advantages = [
  {
    title: 'Comprehensive Benefits Analysis',
    desc: 'We conduct a full analysis of your current benefits packages to identify areas for improvement.',
  },
  {
    title: 'Benefits Benchmarking',
    desc: 'We compare your benefits packages with industry standards and offer guidance on adjustments to stay competitive.',
  },
  {
    title: 'Custom Benefits Design',
    desc: 'We tailor benefits programs to your company’s goals and budget, ensuring employee satisfaction.',
  },
  {
    title: 'Employee Wellness Programs',
    desc: 'We design and implement wellness programs that improve employees’ physical and mental health.',
  },
  {
    title: 'Retirement Plans & Pension Schemes',
    desc: 'We assist in developing retirement solutions that ensure employees’ future financial security and align with your business needs.',
  },
  {
    title: 'Healthcare & Insurance Plans',
    desc: 'We provide expert advice on creating comprehensive healthcare and insurance plans for your workforce.',
  },
  {
    title: 'Paid Time Off & Leave Policies',
    desc: 'We help create fair and transparent leave policies that balance company needs with employee well-being.',
  },
  {
    title: 'Flexible Working Arrangements',
    desc: 'We help implement flexible working policies, including remote, flextime, and compressed workweeks.',
  },
  {
    title: 'Performance-Based Benefits',
    desc: 'We help design performance-based incentives and bonuses to motivate and reward employees for their contributions.',
  },
  {
    title: 'Employee Recognition Programs',
    desc: 'We assist in creating employee recognition programs to acknowledge and celebrate achievements and milestones.',
  },
];

const images = [
  '/images/solutions/02-1.jpg',
  '/images/solutions/02-2.jpg',
  '/images/solutions/02-3.jpg',
];

export function EmployeeBenefits() {
  return (
    <SolutionTemplate
      title={
        <>
          Employee Benefits <br className={st.br} /> Optimization
        </>
      }
      desc={
        <>
          Optimizing your employee benefits packages to attract and retain top{' '}
          <br className={st.br} />
          talent while maintaining cost-effectiveness.
        </>
      }
      number={2}
      advantages={advantages}
      imageUrls={images}
      actionBtnText="Request Benefits Service"
      reverse
    />
  );
}
