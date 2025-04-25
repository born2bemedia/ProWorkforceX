'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './hero.module.scss';

export function Hero() {
  return (
    <section className={st.layout}>
      <Card />
      <div className={st.imgLayout}>
        <Image
          src="/images/contact-us/hero.jpg"
          alt="hero-img"
          fill
          unoptimized
        />
      </div>
    </section>
  );
}

function Card() {
  return (
    <section className={st.cardLayout}>
      <Title>Get in Touch with ProWorkforceX</Title>
      <Text className={st.text}>
        We’d love to hear from you! Whether you have questions about our
        services, want to request a consultation, or need additional
        information, we are here to help. Contact us via phone or email, or use
        the contact form below.
      </Text>
      <Link href="#contact-form">
        <Button variant="primaryInverted">
          Contact us <ArrowTopRight />
        </Button>
      </Link>
    </section>
  );
}
