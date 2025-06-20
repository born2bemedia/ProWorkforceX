'use client';

import { Headline } from '@/shared/ui/components/headline';

import { CaseStudy } from '../case-study';
import st from './client-stories.module.scss';

export function ClientStories() {
  return (
    <section className={st.layout}>
      <Headline
        title={
          <>
            Client Success Stories: <br className={st.br} /> Real Impact, Real
            Results
          </>
        }
        description={
          <>
            ProWorkforceX&#39;s mission is to provide measurable HR solutions
            <br className={st.br} /> that drive success. Below are a few
            detailed case studies
            <br className={st.br} />
            illustrating how our custom HR strategies have helped businesses
            <br className={st.br} />
            improve their operations, attract top talent, enhance employee
            <br className={st.br} />
            satisfaction, and foster growth.
          </>
        }
        number={5}
      />
      <CaseStudy
        number={1}
        heading="Transforming Recruitment at FastTrack Logistics"
        meta={{
          background: {
            desc: 'FastTrack Logistics is a fast-growing logistics company facing recruitment challenges due to a highly competitive job market. They struggled with lengthy hiring cycles and difficulty sourcing qualified candidates for key operational roles. As a result, they faced high turnover rates, which impacted their ability to scale.',
          },
          results: {
            list: [
              'Reduction in Time-to-Hire: The average time-to-hire decreased by 40%, allowing FastTrack Logistics to quickly onboard critical roles.',
              'Improved Employee Retention: Employee retention rates increased by 30% due to more carefully selected candidates who fit the company’s culture.',
              'Cost Savings: The company saved an estimated €200,000 annually in recruitment costs through more efficient processes.',
            ],
          },
          solution: {
            desc: 'After an in-depth consultation with the ProWorkforceX team, we developed a comprehensive talent acquisition strategy. This included:',
            list: [
              'Streamlined Recruitment Process: We implemented an automated system to manage candidate sourcing and reduce the time-to-hire.',
              'Targeted Sourcing Channels: We leveraged niche job boards, social media platforms, and recruitment agencies to attract highly qualified candidates.',
              'Interview Process Optimization: We optimized the interview process with structured, competency-based interviews to evaluate candidates effectively.',
            ],
          },
          testimonial: {
            desc: 'Working with ProWorkforceX was a game-changer. Their recruitment strategy transformed our hiring process, and we’ve seen immediate improvements in the quality of our hires and employee retention.',
            avatarUrl: '/images/testimonials/anna-p.jpg',
            position: 'HR Director',
            name: 'Anna P.',
            company: 'FastTrack Logistics',
          },
        }}
      />
      <CaseStudy
        number={2}
        heading="Leadership Development at Creative Solutions Inc."
        meta={{
          background: {
            desc: 'Creative Solutions Inc. is a creative agency that faced leadership challenges as they expanded. Many mid-level managers lacked the leadership skills to manage larger teams, leading to communication breakdowns and decreased productivity. The company needed a solution to equip its leaders with the skills to drive team performance and inspire growth.',
          },
          results: {
            list: [
              'Improved Team Productivity: Employee productivity increased by 20% within six months as managers applied newly learned skills to optimize team performance.',
              'Better Employee Morale:  Leadership training improved communication and support within teams, boosting employee satisfaction by 35%.',
              'Leadership Pipeline: A talent pool of future leaders was identified and developed, with three managers promoted to senior leadership roles.',
            ],
          },
          solution: {
            desc: 'ProWorkforceX designed a Leadership & Management Training Program tailored to Creative Solutions’ needs. The program included:',
            list: [
              'Customized Leadership Workshops: We delivered  communication, delegation, and performance management workshops.',
              'Executive Coaching: Senior leaders received one-on-one coaching sessions to refine their decision-making skills and strategic thinking.',
              'Team Collaboration Exercises: We facilitated team-building activities to foster stronger collaboration among managers.',
            ],
          },
          testimonial: {
            desc: 'ProWorkforceX’s leadership training gave us the tools to foster a stronger, more cohesive team. We’ve seen immediate results in productivity and employee satisfaction.',
            company: 'Creative Solutions Inc.',
            name: 'John D.',
            position: 'CEO',
            avatarUrl: '/images/testimonials/john-d.jpg',
          },
        }}
      />
      <CaseStudy
        number={3}
        heading="Employee Benefits Optimization at GlobalTech"
        meta={{
          background: {
            desc: 'GlobalTech is a leading technology firm with over 500 employees. Despite offering competitive salaries, the company struggled with employee retention, as workers felt its benefits packages were outdated compared to industry standards. The company needed to optimize benefits to stay competitive and improve employee satisfaction.',
          },
          results: {
            list: [
              'Reduced Turnover: Employee turnover decreased by 25% within the first year as employees were more satisfied with their benefits.',
              'Increased Employee Satisfaction:  Employee satisfaction with the benefits package increased by 40% based on surveys conducted six months after implementation.',
              'Cost Savings: By optimizing the benefits package, GlobalTech reduced overall benefit costs by 15%, increasing employee retention.',
            ],
          },
          solution: {
            desc: 'ProWorkforceX was tasked with restructuring the employee benefits package. We took a multi-faceted approach to address the gaps:',
            list: [
              'Comprehensive Benefits Review: We audited and compared the current benefits package to industry benchmarks.',
              'Tailored Benefits Design: We designed new benefits offerings aligned with industry standards, including wellness programs, paid parental leave, and retirement planning options.',
              'Benefits Communication Strategy: We created an internal communication strategy to help employees understand and appreciate the new benefits.',
            ],
          },
          testimonial: {
            desc: 'ProWorkforceX completely overhauled our benefits program and helped us build a more attractive employee offering. The impact on retention and satisfaction has been immediate.',
            name: 'Sarah T.',
            position: 'Head of HR',
            company: 'GlobalTech',
            avatarUrl: '/images/testimonials/sarah-t.jpg',
          },
        }}
      />
      <CaseStudy
        number={4}
        heading="Conflict Resolution & Workplace Harmony at SmartRetail"
        meta={{
          background: {
            desc: 'SmartRetail, a rapidly expanding retail chain, faced high workplace conflict, particularly in team interactions between management and staff. Disputes were affecting productivity and morale, leading to a toxic work environment that was starting to impact customer service.',
          },
          solution: {
            desc: 'After consulting with ProWorkforceX, we implemented a Workplace Conflict Resolution Program:',
            list: [
              'Conflict Diagnosis: We identified the root causes of conflict through employee surveys, interviews, and focus groups.',
              'Mediation Services: Our trained mediators conducted sessions to resolve ongoing disputes between employees and management.',
              'Conflict Management Workshops: We provided training on conflict resolution techniques for all employees and managers.',
              'Leadership Support: We worked closely with leadership to ensure they were equipped to manage and prevent conflicts in the future.',
            ],
          },
          results: {
            list: [
              'Improved Team Dynamics: Employee collaboration improved by 30% as conflicts were resolved and communication strengthened.',
              'Increased Productivity:  Productivity increased by 15% as workplace disputes were resolved quickly, leading to a more focused work environment.',
              'Enhanced Customer Service: With improved employee morale, customer satisfaction levels rose by 20%.',
            ],
          },
          testimonial: {
            desc: 'ProWorkforceX’s conflict resolution program helped us turn around our workplace culture. We’ve seen a dramatic improvement in morale and a much more cohesive team.',
            name: 'Michael R.',
            position: 'HR Manager',
            company: 'SmartRetail',
            avatarUrl: '/images/testimonials/michael-r.jpg',
          },
        }}
      />
    </section>
  );
}
