'use client';

import { FloatingCards } from '@/shared/ui/components/floating-cards';
import { Headline } from '@/shared/ui/components/headline';
import { CaseIcon, Gear, LineUps, Plates } from '@/shared/ui/icons/yellow';

import st from './why-choose-us.module.scss';

const items = [
  {
    category: 'Customization',
    title: 'Tailored Solutions for Every Business',
    desc: 'We understand that each business has unique challenges, and we provide bespoke HR strategies to address these specific needs.',
    icon: <Gear />,
  },
  {
    category: 'Coverage',
    title: 'Comprehensive Support Across All HR Areas',
    desc: 'From talent acquisition to compliance, we offer a full suite of services to optimize your HR functions, ensuring that every aspect of your business is covered.',
    icon: <Plates />,
  },
  {
    category: 'Impact',
    title: 'Proven Results with Measurable Impact',
    desc: 'Our clients consistently report measurable improvements in recruitment efficiency, employee retention, and workplace harmony.',
    icon: <LineUps />,
  },
  {
    category: 'Expertise',
    title: 'Industry Expertise',
    desc: 'Our HR professionals bring decades of experience, ensuring you get top-tier advice and solutions based on the latest industry trends and best practices.',
    icon: <CaseIcon />,
  },
];

export function WhyChooseUs() {
  return (
    <section className={st.layout}>
      <Headline
        title="Why Choose Us"
        description={
          <>
            Our clients trust ProWorkforceX because of our{' '}
            <br className={st.br} /> unwavering commitment to success. But there
            are <br className={st.br} /> other reasons why businesses keep
            coming back to <br className={st.br} /> us for HR solutions:
          </>
        }
        number={2}
      />
      <FloatingCards items={items} />
    </section>
  );
}
