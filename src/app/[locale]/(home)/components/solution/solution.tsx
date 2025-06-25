'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { SolutionCard } from '@/features/solutions/components';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './solution.module.scss';

export function Solution() {
  const t = useTranslations('home.solutions');

  const solutions = [
    {
      title: t('0.title'),
      desc: t('0.desc'),
    },
    {
      title: t('1.title'),
      desc: t('1.desc'),
    },
    {
      title: t('2.title'),
      desc: t('2.desc'),
    },
    {
      title: t('3.title'),
      desc: t('3.desc'),
    },
    {
      title: t('4.title'),
      desc: t('4.desc'),
    },
    {
      title: t('5.title'),
      desc: t('5.desc'),
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.title}>
        <Title level={2} className={st.titleEl}>
          {t('title')}
        </Title>
        <Text color="primary" size="lg" className={st.textEl}>
          {t('desc')}
        </Text>
      </section>
      <section className={st.solutions}>
        <section className={st.cards}>
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} number={++i} {...solution} />
          ))}
        </section>
        <section className={st.img}>
          <Image
            src="/images/home/solutions.png"
            alt="solutions"
            width={648}
            height={760}
            unoptimized
            style={{ width: '100%', borderRadius: '24px', objectFit: 'cover' }}
          />
        </section>
      </section>
      <Link href="/solutions" className={st.navBtn}>
        <Button variant="primaryInverted" size="md">
          {t('explore')} <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
