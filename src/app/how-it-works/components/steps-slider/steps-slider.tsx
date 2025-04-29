'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
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

const slides = [
  {
    title: 'Book Your Consultation – Understanding Your Business Needs',
    desc: (
      <>
        <Text color="primary" size="lg">
          The first step in our process is to understand your business deeply.
          During our initial consultation, we take the time to get to know your
          unique challenges, goals, and current HR practices.
        </Text>
        <Text color="primary" size="lg">
          This collaborative session allows us to pinpoint the areas needing
          immediate attention and map out how to support your business’s
          success.
        </Text>
      </>
    ),
    list: [
      'Comprehensive Business Assessment: We learn about your industry, company culture, team dynamics, and HR pain points to ensure a comprehensive understanding of your business.',
      'Identify Key HR Challenges: Whether you’re dealing with high turnover, recruitment struggles, or compliance issues, we help identify the root causes.',
      'Clarify Business Goals: We align HR initiatives with your overall business objectives, ensuring HR strategies directly support your growth plans.',
      'Tailored Consultation: This is a bespoke, tailored session for your business needs.\n',
    ],
  },
  {
    title: 'Develop a Custom HR Strategy – Tailored to Your Business Vision',
    desc: (
      <>
        <Text color="primary" size="lg">
          Once we understand your business needs, we develop a custom HR
          strategy. We work with your team to design an HR roadmap that aligns
          with your business goals, company culture, and future aspirations.
        </Text>
        <Text color="primary" size="lg">
          This strategy focuses on key HR areas such as talent acquisition,
          employee engagement, leadership development, and more.
        </Text>
      </>
    ),
    list: [
      'HR Strategy Design: We design a comprehensive HR strategy that aligns with your company’s needs, whether it’s improving recruitment, reducing turnover, or enhancing workplace culture.',
      'Targeted Solutions for Growth:  Our strategy includes actionable steps to address your most pressing HR challenges, with clear timelines and measurable objectives.',
      'Integration with Business Goals: The HR strategy seamlessly integrates with your business goals, ensuring that every HR initiative supports your company’s broader objectives.',
      'Focus Areas: Depending on your needs, we’ll focus on recruitment, employee development, compliance, benefits, or other crucial HR areas.\n',
    ],
  },
  {
    title: 'Implement Your HR Strategy – Bringing Your Vision to Life',
    desc: (
      <>
        <Text color="primary" size="lg">
          With the HR strategy in place, we move into the implementation phase,
          where our team works closely with yours to implement the plan.
        </Text>
        <Text color="primary" size="lg">
          This is where we bring the HR solutions to life, ensuring everything
          runs smoothly, and the changes positively impact your workforce.
        </Text>
      </>
    ),
    list: [
      'Hands-On Support: Our experts manage the execution of the plan, from recruitment to employee development programs and leadership training.',
      'Seamless Integration:  We ensure the HR strategy is integrated into your existing systems and processes, minimizing disruptions.',
      'Onboarding & Communication: We ensure smooth communication and proper onboarding for new HR processes, ensuring your team adapts quickly to the changes.',
      'Support for Every Stage: From talent acquisition to training, we are here to help at every implementation stage.\n',
    ],
  },
  {
    title:
      'Ongoing Monitoring & Continuous Improvement – Tracking Your Progress',
    desc: (
      <>
        <Text color="primary" size="lg">
          We don’t stop at implementation. Our job is to ensure that your HR
          solutions continue to work effectively so we monitor progress and make
          ongoing adjustments.
        </Text>
        <Text color="primary" size="lg">
          We believe in the power of continuous improvement, adapting HR
          solutions as your business evolves.
        </Text>
      </>
    ),
    list: [
      'Continuous Feedback Loop: We regularly track and assess the impact of HR solutions, ensuring they are achieving the desired results.',
      'Quarterly Progress Reviews:  Regularly scheduled check-ins allow us to review the success of the HR strategy and identify areas for further optimization.',
      'Real-time Adjustments:  As your business grows and your HR needs change, we make data-driven adjustments to keep the strategy relevant and effective.',
      'Measurable Results: We provide reports that detail each initiative’s success, including key metrics like employee satisfaction, turnover rates, and recruitment success.',
    ],
  },
  {
    title: 'Reporting & Data-Driven Insights – Making Informed Decisions',
    desc: (
      <Text color="primary" size="lg">
        Our approach emphasizes the importance of data. We provide actionable
        insights and comprehensive reports to ensure that your HR strategies
        continually evolve with your business’s needs.
      </Text>
    ),
    list: [
      'Comprehensive HR Reports: Receive detailed reports covering each solution’s key performance indicators (KPIs), progress, and effectiveness.',
      'Data-Driven Insights: Our reports provide the insights necessary for making strategic HR decisions, helping you refine your HR operations and strategies.',
      'Feedback Analysis: We collect feedback from your employees to understand the changes’ effectiveness and ensure employee satisfaction.',
      'Ongoing Improvement: With these insights, we ensure that your business adapts to changing HR needs and achieves long-term success.',
    ],
  },
  {
    title: 'Scaling & Future-Proofing – Evolving with Your Business',
    desc: (
      <>
        <Text color="primary" size="lg">
          As your business grows, your HR needs will evolve. Our approach
          ensures that your HR strategy scales with your company, ensuring
          long-term success.
        </Text>
        <Text color="primary" size="lg">
          We provide future-proof HR solutions to prepare your organization for
          tomorrow’s challenges.
        </Text>
      </>
    ),
    list: [
      'Scalable HR Solutions:  We make sure that as your workforce expands, your HR strategies grow with it, ensuring the smooth integration of new talent and processes.',
      'Preparing for Future HR Needs: We anticipate future HR challenges and ensure your organization is ready for change, whether scaling, restructuring, or entering new markets.',
      'Long-Term Partnership: Our relationship with you doesn’t end once the strategy is implemented. We are your long-term HR partner, committed to helping your business evolve.',
    ],
  },
];

function NextBtn() {
  const swiper = useSwiper();

  return (
    <button className="steps-next-btn" onClick={() => swiper.slideNext()}>
      <SnakeLine />
    </button>
  );
}

export function StepsSlider() {
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

  const [isShowDetails, setIsShowDetails] = useState(width > 768);

  return (
    <section className="steps-slide">
      <StepCard
        number={number}
        title={title}
        desc={desc}
        onMore={() => setIsShowDetails(!isShowDetails)}
      />
      {isShowDetails && <DetailsCard list={list} />}
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
