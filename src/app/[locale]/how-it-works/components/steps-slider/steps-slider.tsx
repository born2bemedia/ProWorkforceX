'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { useWindow } from '@/shared/lib/hooks';
import { List } from '@/shared/ui/components/list';
import { SnakeLine } from '@/shared/ui/icons/green';
import { Text } from '@/shared/ui/kit/text';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './steps-slider.scss';

function NextBtn() {
  const swiper = useSwiper();

  return (
    <button className="steps-next-btn" onClick={() => swiper.slideNext()}>
      <SnakeLine />
    </button>
  );
}

export function StepsSlider() {
  const t = useTranslations('howItWorks.stepsOfTheWay');

  const slides = [
    {
      title: t('0.title'),
      desc: (
        <>
          <Text color="primary" size="lg">
            {t('0.desc.0')}
          </Text>
          <Text color="primary" size="lg">
            {t('0.desc.1')}
          </Text>
        </>
      ),
      list: [t('0.list.0'), t('0.list.1'), t('0.list.2'), t('0.list.3')],
    },
    {
      title: t('1.title'),
      desc: (
        <>
          <Text color="primary" size="lg">
            {t('1.desc.0')}
          </Text>
          <Text color="primary" size="lg">
            {t('1.desc.1')}
          </Text>
        </>
      ),
      list: [t('1.list.0'), t('1.list.1'), t('1.list.2'), t('1.list.3')],
    },
    {
      title: t('2.title'),
      desc: (
        <>
          <Text color="primary" size="lg">
            {t('2.desc.0')}
          </Text>
          <Text color="primary" size="lg">
            {t('2.desc.1')}
          </Text>
        </>
      ),
      list: [t('2.list.0'), t('2.list.1'), t('2.list.2'), t('2.list.3')],
    },
    {
      title: t('3.title'),
      desc: (
        <>
          <Text color="primary" size="lg">
            {t('3.desc.0')}
          </Text>
          <Text color="primary" size="lg">
            {t('3.desc.1')}
          </Text>
        </>
      ),
      list: [t('3.list.0'), t('3.list.1'), t('3.list.2'), t('3.list.3')],
    },
    {
      title: t('4.title'),
      desc: (
        <Text color="primary" size="lg">
          {t('4.desc.0')}
        </Text>
      ),
      list: [t('4.list.0'), t('4.list.1'), t('4.list.2'), t('4.list.3')],
    },
    {
      title: t('5.title'),
      desc: (
        <>
          <Text color="primary" size="lg">
            {t('5.desc.0')}
          </Text>
          <Text color="primary" size="lg">
            {t('5.desc.1')}
          </Text>
        </>
      ),
      list: [t('5.list.0'), t('5.list.1'), t('5.list.2')],
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      loop
      // autoplay={{
      //   delay: 3000,
      // }}
      navigation={false}
      modules={[EffectFade, Navigation, Autoplay]}
      className="steps-slider"
    >
      {slides.map(({ title, list, desc }, i) => (
        <SwiperSlide key={title}>
          <Slide number={++i} title={title} desc={desc} list={list} />
        </SwiperSlide>
      ))}
      <NextBtn />
      <MobileBtns />
    </Swiper>
  );
}

function Slide({
  list,
  number,
  desc,
  title,
}: {
  number: number;
  title: string;
  desc: ReactNode;
  list: string[];
}) {
  const { width } = useWindow();

  const [isShowDetails, setIsShowDetails] = useState(false);

  return (
    <section className="steps-slide">
      <StepCard
        number={number}
        title={title}
        desc={desc}
        onMore={() => setIsShowDetails(!isShowDetails)}
      />
      {width >= 768 || isShowDetails ? <DetailsCard list={list} /> : null}
    </section>
  );
}

function StepCard({
  title,
  number,
  desc,
  onMore,
}: {
  number: number;
  title: string;
  desc: ReactNode;
  onMore: () => void;
}) {
  return (
    <article className="step-card">
      <section>
        <div className="top-step-card">
          <span className="step-number">
            <Text color="primary" size="xl">
              Step {number}
            </Text>
          </span>
          <button className="step-more" onClick={onMore}>
            <Text color="secondary">More</Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
            >
              <path
                d="M6.75 7.12988L1.5 1.42618L6.75 7.12988ZM6.75 7.12988L12 1.42618L6.75 7.12988Z"
                fill="#DFF56B"
              />
              <path
                d="M1.5 1.42618L6.75 7.12988L12 1.42618"
                stroke="#DFF56B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <Text color="primary" weight={500} size="3xl">
          {title}
        </Text>
      </section>
      <section>{desc}</section>
    </article>
  );
}

function DetailsCard({ list }: { list: string[] }) {
  return (
    <article className="details-card">
      <List values={list} gap={20} />
    </article>
  );
}

function MobileBtns() {
  const swiper = useSwiper();

  return (
    <section className="steps-mobile-btns">
      <button onClick={() => swiper.slidePrev()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
        >
          <rect x="0.5" width="48" height="48" rx="24" fill="#E6E6E4" />
          <rect x="0.5" width="48" height="48" rx="24" fill="#F6F6F4" />
          <path
            d="M27.5 13L16.5 23.5L27.5 34"
            stroke="#C4C4C2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button onClick={() => swiper.slideNext()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
        >
          <rect
            x="48.5"
            y="48"
            width="48"
            height="48"
            rx="24"
            transform="rotate(-180 48.5 48)"
            fill="#E6E6E4"
          />
          <rect
            x="48.5"
            y="48"
            width="48"
            height="48"
            rx="24"
            transform="rotate(-180 48.5 48)"
            fill="#093224"
          />
          <path
            d="M21.5 35L32.5 24.5L21.5 14"
            stroke="#DFF56B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
