'use client';

import { SolutionTemplate } from '@/app/solutions/components/solution-template';
import st from '@/app/solutions/components/solution-template/solution-template.module.scss';

const advantages = [
  {
    title: 'Executive Leadership Development',
    desc: 'We provide tailored development programs for senior leaders to refine their strategic thinking, decision-making, and leadership skills, ensuring they lead with vision and confidence.',
  },
  {
    title: 'Management Skills Training',
    desc: 'Our training empowers middle managers with the skills to manage teams effectively, from communication and delegation to conflict resolution and performance management.',
  },
  {
    title: 'Emotional Intelligence for Leaders',
    desc: 'Develop emotionally intelligent leaders who can understand and manage emotions to build stronger relationships and navigate workplace challenges effectively.',
  },
  {
    title: 'Change Management Training',
    desc: 'We help leaders navigate organizational changes, equipping them with the tools to lead teams through transitions smoothly and maintain employee morale during periods of change.',
  },
  {
    title: 'Leadership Communication Skills',
    desc: 'Our programs foster collaboration, teamwork, and effective communication, ensuring your leaders can motivate and unite teams toward common goals.',
  },
  {
    title: 'Coaching & Mentoring Programs',
    desc: 'We offer customized coaching and mentoring programs for leaders at all levels, fostering personal growth and the development of high-potential employees.',
  },
  {
    title: 'Conflict Resolution for Managers',
    desc: 'We provide training to equip managers with the skills to identify, address, and resolve conflicts constructively, promoting a harmonious work environment.',
  },
  {
    title: 'Performance Management & Appraisal',
    desc: 'Our programs help leaders understand how to conduct effective performance reviews, set clear goals, and provide feedback that promotes continuous improvement.',
  },
  {
    title: 'Succession Planning & Talent Development',
    desc: 'We assist in building strong leadership pipelines, helping organizations identify and nurture future leaders to ensure long-term organizational success.',
  },
  {
    title: 'Exit Interviews & Turnover Analysis',
    desc: 'We conduct exit interviews and analyze turnover data to help businesses understand and reduce employee attrition.',
  },
];

const images = [
  '/images/solutions/07-1.jpg',
  '/images/solutions/07-2.jpg',
  '/images/solutions/07-3.jpg',
];

export function LeadershipTraining() {
  return (
    <SolutionTemplate
      title={
        <>
          Leadership & <br className={st.br} /> Management Training
        </>
      }
      desc={
        <>
          Empowering your leaders is the key to cultivating high-performing
          teams <br className={st.br} /> and driving organizational success.
        </>
      }
      number={7}
      advantages={advantages}
      imageUrls={images}
      actionBtnText="Request Leadership Service"
    />
  );
}
