'use client';

import { Stars } from '@/shared/ui/icons/yellow';
import { Text } from '@/shared/ui/kit/text';

import st from './reviews.module.scss';

export function Reviews({
  reviews,
}: {
  reviews: {
    text: string;
    name: string;
    position: string;
    company?: string;
  }[];
}) {
  return (
    <section className={st.cards}>
      {reviews.map(review => (
        <Card key={review.name} {...review} />
      ))}
    </section>
  );
}

function Card({
  name,
  position,
  text,
  company,
}: {
  text: string;
  name: string;
  position: string;
  company?: string;
}) {
  return (
    <article className={st.card}>
      <Stars />
      <Text color="primary" size="lg">
        {text}
      </Text>
      <section className={st.cardReviewer}>
        <Text color="primary" size="3xl" weight={500}>
          {name}
        </Text>
        <div className={st.cardCompany}>
          <Text color="primary" size="lg">
            {position}
          </Text>
          {company && (
            <>
              <Text color="primary" size="lg">
                •
              </Text>
              <Text color="primary" size="lg">
                {company}
              </Text>
            </>
          )}
        </div>
      </section>
    </article>
  );
}
