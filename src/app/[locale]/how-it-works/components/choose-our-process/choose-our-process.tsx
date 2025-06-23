'use client';

import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { cn } from '@/shared/lib/styles';
import { IconCard } from '@/shared/ui/components/icon-card';
import {
  ArrowTopRight,
  ChampIcon,
  GraphUp,
  HandshakeIcon,
  PersonsIcon,
  RoadIcon,
} from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Title } from '@/shared/ui/kit/title';

import st from './choose-our-process.module.scss';

export function ChooseOurProcess() {
  const t = useTranslations('howItWorks.chooseOurProcess');
  const { setOpen } = useRequestDialogStore();

  const reasons = [
    {
      icon: <ChampIcon />,
      title: t('0.title'),
      desc: t('0.desc'),
    },
    {
      icon: <PersonsIcon />,
      title: t('1.title'),
      desc: t('1.desc'),
    },
    {
      icon: <HandshakeIcon />,
      title: t('2.title'),
      desc: t('2.desc'),
    },
    {
      icon: <GraphUp />,
      title: t('3.title'),
      desc: t('3.desc'),
    },
    {
      icon: <RoadIcon />,
      title: t('4.title'),
      desc: t('4.desc'),
    },
  ];

  return (
    <section className={st.layout}>
      <Title className={st.title}>{t('title')}</Title>
      <section className={st.cards}>
        <div className={cn(st.row, st.firstRow)}>
          {reasons.slice(0, 3).map(({ desc, title, icon }) => (
            <IconCard key={title} title={title} text={desc} icon={icon} />
          ))}
        </div>
        <div className={cn(st.row, st.secondRow)}>
          {reasons.slice(3, 5).map(({ desc, title, icon }) => (
            <IconCard key={title} title={title} text={desc} icon={icon} />
          ))}
        </div>
      </section>
      <Button
        variant="primaryInverted"
        size="md"
        className={st.btn}
        onClick={() => setOpen(true)}
      >
        {t('getStarted')} <ArrowTopRight />
      </Button>
    </section>
  );
}
