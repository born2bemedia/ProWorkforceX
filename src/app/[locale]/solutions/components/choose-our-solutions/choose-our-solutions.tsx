'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/styles';
import { Headline } from '@/shared/ui/components/headline';
import { Text } from '@/shared/ui/kit/text';

import st from './choose-our-solutions.module.scss';

export function ChooseOurSolutions() {
  const t = useTranslations('solutions.chooseOurSolutions');

  const benefits = [
    {
      value: '75%',
      desc: t('0'),
      imgUrl: '/images/solutions/09-2.jpg',
    },
    {
      value: '180',
      over: true,
      desc: t('1'),
      variant: 'gray',
    },
    {
      value: '85%',
      desc: t('2'),
      variant: 'secondary',
      mask: true,
    },
    {
      value: '4,000+',
      desc: t('3'),
      imgUrl: '/images/solutions/09-1.jpg',
    },
    {
      value: '3x',
      desc: t('4'),
      variant: 'gray',
      mask: true,
    },
  ];

  return (
    <section className={st.layout}>
      <Headline
        title={
          <>
            {t('title.0')} <br className={st.br} />
            {t('title.1')}
          </>
        }
        description={t('desc')}
        number={9}
        align="center"
      />
      <section className={st.cards}>
        {benefits.map(item => (
          <Card key={item.value} {...item} />
        ))}
      </section>
    </section>
  );
}

function Card({
  over,
  variant,
  mask,
  desc,
  imgUrl,
  value,
}: {
  value: string;
  desc: string;
  imgUrl?: string;
  over?: boolean;
  variant?: string;
  mask?: boolean;
}) {
  const t = useTranslations('solutions.chooseOurSolutions');

  return (
    <article
      className={cn(st.cardLayout, {
        [st.greyBg]: variant === 'gray',
        [st.secondaryBg]: variant === 'secondary',
        [st.mask]: mask,
      })}
      style={
        imgUrl
          ? {
              background: `linear-gradient(174deg, rgba(31, 36, 32, 0.00) 13.29%, #1F2420 95.5%), url(${imgUrl}) lightgray 50% / cover no-repeat`,
            }
          : undefined
      }
    >
      <section className={st.cardInner}>
        <div className={st.cardValueLayout}>
          {over && (
            <Text color="primary" size="3xl" className={st.over}>
              {t('over')}
            </Text>
          )}
          <span
            className={cn(
              !imgUrl ? st.cardValuePrimary : st.cardValueWhite,
              st.cardValue,
            )}
          >
            {value}
          </span>
        </div>
        <Text color={imgUrl ? 'white' : 'primary'} size="2xl">
          {desc}
        </Text>
      </section>
    </article>
  );
}
