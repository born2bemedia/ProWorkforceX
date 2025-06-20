'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './heading.module.scss';

export function Heading() {
  return (
    <section className={st.layout}>
      <Title>A Transformative HR Journey for Your Business</Title>
      <div className={st.text}>
        <Text color="primary" size="xl">
          We offer more than just HR solutions — we craft a transformative
          journey designed to optimize your workforce and maximize your
          organizational success.
        </Text>
        <Text color="primary" size="xl">
          From the first consultation to continuous support, we work with your
          team to build an HR strategy that drives sustainable growth, ensures
          compliance, and fosters a high-performing culture.
        </Text>
      </div>
    </section>
  );
}
