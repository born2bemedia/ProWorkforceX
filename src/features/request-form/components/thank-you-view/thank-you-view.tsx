'use client';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { useRequestDialogStore } from '../../services';
import st from './thank-you-view.module.scss';

export function ThankYouView() {
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <div className={st.title}>
        <Title level={3}>
          Thank you for choosing <br /> ProWorkforceX!
        </Title>
        <Text size="lg" color="primary">
          Our representative will reach out to you shortly.
        </Text>
      </div>
      <Button
        variant="primaryInverted"
        size="md"
        onClick={() => setOpen(false)}
        fullWidth
      >
        Continue
        <ArrowTopRight />
      </Button>
    </section>
  );
}
