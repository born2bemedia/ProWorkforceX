'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './thank-you-view.module.scss';

export function ThankYouOrderView() {
  return (
    <section className={st.layout}>
      <div className={st.title}>
        <Title level={3}>Thank you for submission!</Title>
        <Text size="lg" color="primary">
          Your request has been successfully received. Our HR experts are
          reviewing your information and will contact you soon to discuss your
          company’s HR needs and provide customized solutions to optimize your
          workforce and operations.
        </Text>
      </div>
    </section>
  );
}
