'use client';

import { ContactForm as ContactUsForm } from '@/features/request-form/components';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-form.module.scss';

export function ContactForm() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={2} className={st.title}>
          Contact Form
        </Title>
        <Text>Request a Consultation or More Information</Text>
      </section>
      <ContactUsForm />
    </section>
  );
}
