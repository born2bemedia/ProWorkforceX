'use client';

import { useTranslations } from 'next-intl';

import { FloatingCards } from '@/shared/ui/components/floating-cards';
import { Headline } from '@/shared/ui/components/headline';
import { CaseIcon, Gear, LineUps, Plates } from '@/shared/ui/icons/yellow';

import st from './why-choose-us.module.scss';

export function WhyChooseUs() {
  const t = useTranslations('testimonials.whyChooseUs');

  const items = [
    {
      category: t('0.category'),
      title: t('0.title'),
      desc: t('0.desc'),
      icon: <Gear />,
    },
    {
      category: t('1.category'),
      title: t('1.title'),
      desc: t('1.desc'),
      icon: <Plates />,
    },
    {
      category: t('2.category'),
      title: t('2.title'),
      desc: t('2.desc'),
      icon: <LineUps />,
    },
    {
      category: t('3.category'),
      title: t('3.title'),
      desc: t('3.desc'),
      icon: <CaseIcon />,
    },
  ];

  return (
    <section className={st.layout}>
      <Headline
        title={t('title')}
        description={
          <>
            {t('desc.0')}
            <br className={st.br} />
            {t('desc.1')}
            <br className={st.br} />
            {t('desc.2')}
            <br className={st.br} />
            {t('desc.3')}
          </>
        }
        number={2}
      />
      <FloatingCards items={items} />
    </section>
  );
}
