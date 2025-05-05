'use client';

import { List } from '@/shared/ui/components/list';
import { Avatar } from '@/shared/ui/kit/avatar';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './case-study.module.scss';

export function CaseStudy({
  number,
  heading,
  meta,
}: {
  number: number;
  heading: string;
  meta: {
    background: { desc: string };
    solution: { desc: string; list: string[] };
    results: { list: string[] };
    testimonial: {
      desc: string;
      name: string;
      position: string;
      company: string;
      avatarUrl: string;
    };
  };
}) {
  return (
    <>
      <Divider />
      <section>
        <span className={st.chip}>
          <Text color="primary" weight={500} size="2xl">
            Case Study {number}
          </Text>
        </span>
        <Title level={5} className={st.heading}>
          {heading}
        </Title>
        <section className={st.cards}>
          <BackgroundCard {...meta.background} />
          <SolutionCard {...meta.solution} />
          <ResultsCard {...meta.results} />
          <TestimonialCard {...meta.testimonial} />
        </section>
      </section>
    </>
  );
}

function BackgroundCard({ desc }: { desc: string }) {
  return (
    <article className={st.backgroundCard}>
      <Text color="primary" weight={500} size="3xl">
        Background
      </Text>
      <Text color="primary" size="lg">
        {desc}
      </Text>
    </article>
  );
}

function ResultsCard({ list }: { list: string[] }) {
  return (
    <article className={st.grayCard}>
      <Text color="primary" weight={500} size="3xl">
        Results
      </Text>
      <List values={list} />
    </article>
  );
}

function SolutionCard({ list, desc }: { desc: string; list: string[] }) {
  return (
    <article className={st.grayCard}>
      <section className={st.solutionTitle}>
        <Text color="primary" weight={500} size="3xl">
          Solution
        </Text>
        <Text color="primary" size="lg">
          {desc}
        </Text>
      </section>
      <List values={list} />
    </article>
  );
}

function TestimonialCard({
  desc,
  name,
  avatarUrl,
  company,
  position,
}: {
  desc: string;
  name: string;
  position: string;
  company: string;
  avatarUrl: string;
}) {
  return (
    <article className={st.secondaryCard}>
      <section className={st.solutionTitle}>
        <Text color="primary" weight={500} size="3xl">
          Testimonial
        </Text>
        <Text color="primary" size="lg">
          {desc}
        </Text>
      </section>
      <section className={st.cardPerson}>
        <Avatar src={avatarUrl} />
        <div className={st.cardPersonName}>
          <Text color="primary" weight={500} size="2xl">
            {name}
          </Text>
          <div className={st.cardPersonPosition}>
            <Text color="primary" size="lg">
              {position}
            </Text>
            <Text color="primary" size="lg">
              •
            </Text>
            <Text color="primary" size="lg">
              {company}
            </Text>
          </div>
        </div>
      </section>
    </article>
  );
}
