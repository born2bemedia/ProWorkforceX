'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './heading.module.scss';

export function Heading() {
  return (
    <section className={st.layout}>
      <Title className={st.title}>
        Insights and Trends for Business Success
      </Title>
      <Text color="primary" size="lg">
        We offer more than just HR solutions — we craft a transformative journey
        designed to optimize your workforce and maximize your organizational
        success. From the first consultation to continuous support, we work with
        your team to build an HR strategy that drives sustainable growth,
        ensures compliance, and fosters a high-performing culture.
        <br />
        <br /> Explore how we work with you every step of the way to elevate
        your business and employee experience.
      </Text>
    </section>
  );
}
