'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './our-approach.module.scss';

export function OurApproach() {
  return (
    <section className={st.layout}>
      <section className={st.imgLayout}>
        <Image
          className={st.img}
          src="/images/about-us/our-approach.png"
          alt="our-approach"
          fill
        />
      </section>
      <section className={st.titleLayout}>
        <Title level={2}>Our Approach</Title>
        <Text color="primary" size="lg" className={st.text}>
          We understand that career development and HR needs are evolving
          rapidly. We stay ahead of the curve with innovative solutions,
          including career coaching, resume optimization, workplace conflict
          resolution, and employee benefits management. <br />
          <br /> Our expert team consists of seasoned HR professionals
          passionate about helping you succeed. Whether you’re a job seeker, an
          employee looking to optimize your benefits, or someone facing
          workplace challenges, ProWorkforceX guides you every step.
        </Text>
      </section>
    </section>
  );
}
