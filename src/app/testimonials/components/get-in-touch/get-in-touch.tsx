'use client';

import { useRequestDialogStore } from '@/features/request-form/services';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './get-in-touch.module.scss';

export function GetInTouch() {
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title>Get in Touch to Learn More</Title>
        <Text color="primary" size="lg">
          Are you ready to advance your HR strategy?{' '}
          <strong>Contact us today</strong> to learn more about how
          ProWorkforceX can help you optimize your HR functions and drive
          business success.
        </Text>
      </section>
      <Button variant="primaryInverted" size="md" onClick={() => setOpen(true)}>
        Request a Consultation <ArrowTopRight />
      </Button>
    </section>
  );
}
