'use client';

import { useTranslations } from 'next-intl';

import { FloatingCards } from '@/shared/ui/components/floating-cards';
import {
  GiftIcon,
  GraphUp,
  HarmonyIcon,
  PersonsIcon,
} from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-team.module.scss';

export function OurTeam() {
  const t = useTranslations('aboutUs.ourTeam');

  const items = [
    {
      category: 'Growth',
      icon: <GraphUp />,
      title: t('0.title'),
      desc: t('0.desc'),
    },
    {
      category: 'Benefits',
      icon: <GiftIcon />,
      title: t('1.title'),
      desc: t('1.desc'),
    },
    {
      category: 'Harmony',
      icon: <HarmonyIcon />,
      title: t('2.title'),
      desc: t('2.desc'),
    },
    {
      category: 'Guidance',
      icon: <PersonsIcon />,
      title: t('3.title'),
      desc: t('3.desc'),
    },
  ];

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={2}>{t('title')}</Title>
        <Text color="primary" size="lg">
          {t('desc')}
        </Text>
      </section>
      <FloatingCards items={items} />
    </section>
  );
}
