'use client';

import { SolutionTemplate } from '@/app/solutions/components/solution-template';
import st from '@/app/solutions/components/solution-template/solution-template.module.scss';

const advantages = [
  {
    title: 'Career Coaching & Counseling',
    desc: 'We provide career coaching services to help employees navigate their career paths and professional development.',
  },
  {
    title: 'Training Needs Analysis',
    desc: 'We assess your company’s training needs to ensure employees receive relevant and impactful learning opportunities.',
  },
  {
    title: 'Leadership & Management Training',
    desc: 'We develop leadership skills across all levels, from emerging managers to senior executives, ensuring effective team leadership.',
  },
  {
    title: 'Skill Development & Certification Programs',
    desc: 'We help implement skill development programs that lead to certifications, enhancing employee competencies.',
  },
  {
    title: 'Mentorship Programs',
    desc: 'We facilitate mentorship programs that pair experienced leaders with emerging talent to foster knowledge transfer.',
  },
  {
    title: 'Succession Planning',
    desc: 'We assist in creating a succession plan to ensure your organization has a strong pipeline of future leaders.',
  },
  {
    title: 'Workplace Learning & Knowledge Sharing',
    desc: 'We help foster a learning culture through internal knowledge-sharing initiatives and learning platforms.',
  },
  {
    title: 'Personalized Employee Growth Plans',
    desc: 'We create individualized growth plans for employees based on their goals, skills, and company needs.',
  },
  {
    title: 'Cross-Training Programs',
    desc: 'We design cross-training initiatives to enhance employee flexibility and promote collaboration across departments.',
  },
  {
    title: 'Feedback & Performance Reviews',
    desc: 'We help implement regular feedback and performance review systems to track employee progress and foster continuous improvement.',
  },
];

const images = [
  '/images/solutions/03-1.jpg',
  '/images/solutions/03-2.jpg',
  '/images/solutions/03-3.jpg',
];

export function EmployeeDevelopment() {
  return (
    <SolutionTemplate
      title={
        <>
          Employee Development & <br className={st.br} /> Career Advancement
        </>
      }
      desc={
        <>
          Investing in your employees’ growth drives long-term business success.
          Our <br className={st.br} /> services help foster a culture of
          learning and development.
        </>
      }
      number={3}
      advantages={advantages}
      imageUrls={images}
      actionBtnText="Request Development Service"
    />
  );
}
