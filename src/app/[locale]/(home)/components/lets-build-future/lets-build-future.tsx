'use client';

import Image from 'next/image';

import { useRequestDialogStore } from '@/features/request-form/services';

import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './lets-build-future.module.scss';

export function LetsBuildFuture() {
  const { setOpen } = useRequestDialogStore();

  return (
    <section className={st.layout}>
      <section className={st.content}>
        <Title level={2}>Let’s Build Your Future Together</Title>
        <Text color="primary" className={st.text}>
          Your business’s success is our priority. Whether you’re looking to
          enhance your HR practices, optimize employee development, or get
          tailored advice, ProWorkforceX is here to help you achieve your HR
          objectives. <br />
          <br /> We offer customized HR solutions, employee development
          strategies, and expert guidance to ensure your business reaches its
          full potential. Let’s work together to shape a strong workforce for
          your future.
        </Text>
        <Button
          variant="primaryInverted"
          size="md"
          onClick={() => setOpen(true)}
        >
          Request a Custom Quote <ArrowTopRight />
        </Button>
      </section>
      <section className={st.img}>
        <Image
          src="/images/home/mask.svg"
          alt="mask"
          fill
          style={{
            objectFit: 'cover',
            zIndex: 0,
            WebkitMaskImage: 'linear-gradient(to right, transparent, black)',
            WebkitMaskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to right, transparent, black)',
            maskSize: '100% 100%',
            maskRepeat: 'no-repeat',
          }}
        />
      </section>
    </section>
  );
}
