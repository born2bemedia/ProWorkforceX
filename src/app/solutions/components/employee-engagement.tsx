'use client';

import { SolutionTemplate } from '@/app/solutions/components/solution-template';
import st from '@/app/solutions/components/solution-template/solution-template.module.scss';

const advantages = [
  {
    title: 'Employee Engagement Surveys',
    desc: 'We design and conduct surveys to gauge employee engagement and identify areas for improvement.',
  },
  {
    title: 'Recognition Programs',
    desc: 'We help create employee recognition programs that reward and acknowledge contributions, enhancing job satisfaction.',
  },
  {
    title: 'Retention Strategy Development',
    desc: 'We assist in developing strategies to retain top talent, including career development plans and competitive compensation.',
  },
  {
    title: 'Workplace Culture Assessment',
    desc: 'We assess your company culture and provide recommendations to create a positive, inclusive, and motivating environment.',
  },
  {
    title: 'Employee Satisfaction Programs',
    desc: 'We develop and implement satisfaction programs that enhance morale and improve employee retention.',
  },
  {
    title: 'Professional Development Opportunities',
    desc: 'We help you create career development initiatives that allow employees to grow within your organization.',
  },
  {
    title: 'Flexible Work Environment Strategies',
    desc: 'We assist in implementing flexible work arrangements to increase job satisfaction and work-life balance.',
  },
  {
    title: 'Employee Feedback Programs',
    desc: 'We help businesses collect and analyze employee feedback to drive improvements in the workplace environment.',
  },
  {
    title: 'Workforce Engagement Initiatives',
    desc: 'We guide you in creating engaging initiatives to enhance employee commitment and productivity.',
  },
  {
    title: 'Exit Interviews & Turnover Analysis',
    desc: 'We conduct exit interviews and analyze turnover data to help businesses understand and reduce employee attrition.',
  },
];

const images = [
  '/images/solutions/06-1.jpg',
  '/images/solutions/06-2.jpg',
  '/images/solutions/06-3.jpg',
];

export function EmployeeEngagement() {
  return (
    <SolutionTemplate
      title={
        <>
          Employee Engagement & <br className={st.br} /> Retention
        </>
      }
      desc="Keeping your workforce motivated, engaged, and committed to your company’s success."
      number={6}
      advantages={advantages}
      imageUrls={images}
      actionBtnText="Request Engagement Service"
      reverse
    />
  );
}
