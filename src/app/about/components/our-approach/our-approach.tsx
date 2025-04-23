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
          We understand that HR needs are constantly evolving. That’s why we
          stay ahead of the curve with innovative HR solutions, including talent
          acquisition, employee benefits management, conflict resolution, and
          leadership development. <br />
          <br /> Our team of experienced HR professionals is dedicated to
          helping your business succeed. Whether you’re improving your
          recruitment processes, navigating workplace issues, or optimizing
          employee benefits, we’re here to guide you every step of the way.
        </Text>
      </section>
    </section>
  );
}
