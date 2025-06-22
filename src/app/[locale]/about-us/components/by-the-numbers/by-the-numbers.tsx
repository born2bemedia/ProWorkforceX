'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Headline } from '@/shared/ui/components/headline';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './by-the-numbers.module.scss';

export function ByTheNumbers() {
  const t = useTranslations('aboutUs.byTheNumbers');

  const stats = [
    {
      title: '85%',
      desc: t('0'),
    },
    {
      imgUrl: '/images/about-us/stats/1.png',
    },
    {
      title: '200+',
      desc: t('1'),
    },
    {
      imgUrl: '/images/about-us/stats/2.png',
    },
    {
      title: '90%',
      desc: t('2'),
    },
    {
      title: '5,000+',
      desc: t('3'),
    },
    {
      imgUrl: '/images/about-us/stats/3.png',
    },
    {
      title: '1,000+',
      desc: t('4'),
    },
  ];

  return (
    <section className={st.layout}>
      <Headline
        title={
          <>
            {t('title.0')} <br /> {t('title.1')}
          </>
        }
        description={t('desc')}
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
