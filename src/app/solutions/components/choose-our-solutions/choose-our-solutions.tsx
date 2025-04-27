'use client';

import { cn } from '@/shared/lib/styles';
import { Headline } from '@/shared/ui/components/headline';
import { Text } from '@/shared/ui/kit/text';

import st from './choose-our-solutions.module.scss';

const benefits = [
  {
    value: '75%',
    desc: 'of organizations see a noticeable improvement in team performance within 6 months of adopting our HR solutions.',
    imgUrl: '/images/solutions/09-2.jpg',
  },
  {
    value: '180',
    over: true,
    desc: 'businesses have successfully streamlined their hiring processes, significantly reducing recruitment time and cost.',
    variant: 'gray',
  },
  {
    value: '85%',
    desc: 'of clients who implemented our conflict resolution strategies reported a harmonious work environment and better team collaboration.',
    variant: 'secondary',
    mask: true,
  },
  {
    value: '4,000+',
    desc: 'consulting hours have empowered businesses to optimize HR functions, saving time and enhancing employee satisfaction.',
    imgUrl: '/images/solutions/09-1.jpg',
  },
  {
    value: '3x',
    desc: 'reduction in turnover rates for businesses that adopted our career development and mentoring programs.',
    variant: 'gray',
    mask: true,
  },
];

export function ChooseOurSolutions() {
  return (
    <section className={st.layout}>
      <Headline
        title={
          <>
            Why Choose Our <br className={st.br} /> Solutions?
          </>
        }
        description={
          <>
            At ProWorkforceX, we focus on delivering results that speak for
            themselves. <br className={st.br} /> Here’s how we’ve helped
            businesses thrive:
          </>
        }
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
              Over
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
