'use client';

import { useRequestDialogStore } from '@/features/request-form/services';

import { ArrowTopRight, CheckIcon } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './why-choose.module.scss';

export function WhyChoose({
  desc,
  title,
  values,
}: {
  title: string;
  desc: string;
  values: { title: string; text: string }[];
}) {
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <Title level={2}>{title}</Title>
      <Text className={st.text} color="primary">
        {desc}
      </Text>
      <section className={st.cardsLayout}>
        {values.slice(0, 3).map(v => (
          <Card key={v.title} {...v} />
        ))}
      </section>
      <section className={st.cardsLayout} style={{ marginTop: '12px' }}>
        {values.slice(3, 5).map(v => (
          <Card key={v.title} {...v} />
        ))}
      </section>
      <Button
        className={st.requestBtn}
        variant="primaryInverted"
        onClick={() => setOpen(true)}
      >
        Request a Consultation
        <ArrowTopRight />
      </Button>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <article className={st.cardLayout}>
      <CheckIcon />
      <section className={st.cardContent}>
        <Title level={3}>{title}</Title>
        <Text color="primary">{text}</Text>
      </section>
    </article>
  );
}
