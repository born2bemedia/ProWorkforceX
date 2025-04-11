'use client';

import Image from 'next/image';

import { Headline } from '@/shared/ui/components/headline';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './by-the-numbers.module.scss';

const stats = [
  {
    title: '85%',
    desc: 'of clients report a successful career transition within 3 months of using our services.',
  },
  {
    imgUrl: '/images/about-us/stats/1.png',
  },
  { title: '200+', desc: 'resumes polished and optimized for job seekers.' },
  {
    imgUrl: '/images/about-us/stats/2.png',
  },
  {
    title: '90%',
    desc: 'of clients who used our Workplace Conflict Resolution service reported a positive outcome.',
  },
  {
    title: '5,000+',
    desc: 'hours of career coaching provided to individuals seeking professional growth.',
  },
  {
    imgUrl: '/images/about-us/stats/3.png',
  },
  {
    title: '1,000+',
    desc: 'employees have benefited from our Employee Benefits Optimization program, saving an average of €1,800 annually.',
  },
];

export function ByTheNumbers() {
  return (
    <section className={st.layout}>
      <Headline
        title={
          <>
            By the Numbers <br /> ProWorkforceX in Action
          </>
        }
        description="We believe in measurable impact. Here’s a glimpse of how we’ve helped individuals just like you:"
        number={3}
      />
      <section className={st.cards}>
        <div className={st.row}>
          {stats
            .slice(0, 5)
            .map(stat =>
              stat?.title && stat.desc ? (
                <Card key={stat.title} title={stat.title} desc={stat.desc} />
              ) : (
                <Image
                  className={st.img}
                  key={stat.imgUrl}
                  src={stat.imgUrl ?? ''}
                  alt="img"
                  width={180}
                  height={180}
                />
              ),
            )}
        </div>

        <div className={st.row}>
          {stats
            .slice(5)
            .map(stat =>
              stat?.title && stat.desc ? (
                <Card key={stat.title} title={stat.title} desc={stat.desc} />
              ) : (
                <Image
                  className={st.img}
                  key={stat.imgUrl}
                  src={stat.imgUrl ?? ''}
                  alt="img"
                  width={180}
                  height={180}
                />
              ),
            )}
        </div>
      </section>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <article className={st.cardLayout}>
      <Title level={2}>{title}</Title>
      <Text color="primary" size="lg">
        {desc}
      </Text>
    </article>
  );
}
