'use client';

import { useTranslations } from 'next-intl';

import { Headline } from '@/shared/ui/components/headline';

import { CaseStudy } from '../case-study';
import st from './client-stories.module.scss';

export function ClientStories() {
  const t = useTranslations('testimonials.clientStories');

  return (
    <section className={st.layout}>
      <Headline
        title={
          <>
            {t('title.0')} <br className={st.br} /> {t('title.1')}
          </>
        }
        description={
          <>
            {t('desc.0')} <br className={st.br} /> {t('desc.1')}
            <br className={st.br} />
            {t('desc.2')} <br className={st.br} />
            {t('desc.3')} <br className={st.br} />
            {t('desc.4')}
          </>
        }
        number={5}
      />
      <CaseStudy
        number={1}
        heading={t('caseStudy1.heading')}
        meta={{
          background: {
            desc: t('caseStudy1.meta.background.desc'),
          },
          results: {
            list: [
              t('caseStudy1.meta.results.list.0'),
              t('caseStudy1.meta.results.list.1'),
              t('caseStudy1.meta.results.list.2'),
            ],
          },
          solution: {
            desc: t('caseStudy1.meta.solution.desc'),
            list: [
              t('caseStudy1.meta.solution.list.0'),
              t('caseStudy1.meta.solution.list.1'),
              t('caseStudy1.meta.solution.list.2'),
            ],
          },
          testimonial: {
            desc: t('caseStudy1.meta.testimonial.desc'),
            position: t('caseStudy1.meta.testimonial.position'),
            name: 'Anna P.',
            company: 'FastTrack Logistics',
            avatarUrl: '/images/testimonials/anna-p.jpg',
          },
        }}
      />
      <CaseStudy
        number={2}
        heading={t('caseStudy2.heading')}
        meta={{
          background: {
            desc: t('caseStudy2.meta.background.desc'),
          },
          results: {
            list: [
              t('caseStudy2.meta.results.list.0'),
              t('caseStudy2.meta.results.list.1'),
              t('caseStudy2.meta.results.list.2'),
            ],
          },
          solution: {
            desc: t('caseStudy2.meta.solution.desc'),
            list: [
              t('caseStudy2.meta.solution.list.0'),
              t('caseStudy2.meta.solution.list.1'),
              t('caseStudy2.meta.solution.list.2'),
            ],
          },
          testimonial: {
            desc: t('caseStudy2.meta.testimonial.desc'),
            position: t('caseStudy2.meta.testimonial.position'),
            name: 'John D.',
            company: 'Creative Solutions Inc.',
            avatarUrl: '/images/testimonials/john-d.jpg',
          },
        }}
      />
      <CaseStudy
        number={3}
        heading={t('caseStudy3.heading')}
        meta={{
          background: {
            desc: t('caseStudy3.meta.background.desc'),
          },
          results: {
            list: [
              t('caseStudy3.meta.results.list.0'),
              t('caseStudy3.meta.results.list.1'),
              t('caseStudy3.meta.results.list.2'),
            ],
          },
          solution: {
            desc: t('caseStudy3.meta.solution.desc'),
            list: [
              t('caseStudy3.meta.solution.list.0'),
              t('caseStudy3.meta.solution.list.1'),
              t('caseStudy3.meta.solution.list.2'),
            ],
          },
          testimonial: {
            desc: t('caseStudy3.meta.testimonial.desc'),
            position: t('caseStudy3.meta.testimonial.position'),
            name: 'Sarah T.',
            company: 'GlobalTech',
            avatarUrl: '/images/testimonials/sarah-t.jpg',
          },
        }}
      />
      <CaseStudy
        number={4}
        heading={t('caseStudy4.heading')}
        meta={{
          background: {
            desc: t('caseStudy4.meta.background.desc'),
          },
          solution: {
            desc: t('caseStudy4.meta.solution.desc'),
            list: [
              t('caseStudy4.meta.solution.list.0'),
              t('caseStudy4.meta.solution.list.1'),
              t('caseStudy4.meta.solution.list.2'),
              t('caseStudy4.meta.solution.list.3'),
            ],
          },
          results: {
            list: [
              t('caseStudy4.meta.results.list.0'),
              t('caseStudy4.meta.results.list.1'),
              t('caseStudy4.meta.results.list.2'),
            ],
          },
          testimonial: {
            desc: t('caseStudy4.meta.testimonial.desc'),
            position: t('caseStudy4.meta.testimonial.position'),
            name: 'Michael R.',
            company: 'SmartRetail',
            avatarUrl: '/images/testimonials/michael-r.jpg',
          },
        }}
      />
    </section>
  );
}
