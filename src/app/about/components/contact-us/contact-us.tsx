'use client';

import { useRequestDialogStore } from '@/features/request-form/services';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-us.module.scss';

export function ContactUs() {
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <section className={st.personBg}>
        <div className={st.text}>
          <Text size="lg" color="primary">
            Please complete the service form to request personalized advice or
            to start using our services. Our team will contact you shortly.
          </Text>
        </div>
      </section>
      <section className={st.contactForm}>
        <div className={st.contactTitle}>
          <Title level={2}>Contact Us</Title>
          <Text size="lg" color="primary">
            We’re here to help you take the next step in optimizing your
            business’s workforce. Whether you have questions about our services
            or are ready to start, ProWorkforceX is here to help you achieve
            your HR goals. <br />
            <br />
            Please complete the form below to request a consultation, and our
            team will contact you shortly.
          </Text>
        </div>
        <Button
          className={st.button}
          variant="primaryInverted"
          size="md"
          onClick={() => setOpen(true)}
        >
          Request a Consultation <ArrowTopRight />
        </Button>
      </section>
    </section>
  );
}
