'use client';

import { useRequestDialogStore } from '@/features/request-form/services';

import { Line } from '@/shared/ui/icons/outline/line';
import { LineMob } from '@/shared/ui/icons/outline/line-mob';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './effective-process.module.scss';

export function EffectiveProcess() {
  const { setOpen } = useRequestDialogStore();

  return (
    <>
      <div className={st.layout}>
        <section className={st.titleLayout}>
          <Title level={2}>
            Our Simple,
            <br /> Effective Process
          </Title>
          <Text color="gray600">
            We follow a streamlined approach to help <br /> your business
            effectively manage its HR <br /> functions:
          </Text>
        </section>
        <section className={st.lineLayout}>
          <div className={st.card}>
            <div className={st.cardNumber}>01</div>
            <div className={st.cardContent}>
              <Title level={3}>Schedule a Consultation</Title>
              <Text className={st.text}>
                Book an initial consultation with one of our HR experts. We’ll
                take the time to understand your business’s unique HR challenges
                and goals.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>03</div>
            <div className={st.cardContent}>
              <Title level={3}>Implement the HR Plan</Title>
              <Text className={st.text}>
                We help you implement the HR strategy and provide ongoing
                support for talent acquisition, employee benefits management,
                and conflict resolution.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>05</div>
            <div className={st.cardContent}>
              <Title level={3}>Regular Follow-ups & Adjustments</Title>
              <Text className={st.text}>
                We track your progress and provide feedback, adapting our
                strategy to ensure your business stays on track toward achieving
                its long-term HR goals.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>06</div>
            <div className={st.cardContent}>
              <Title level={3}>Professional Growth & Networking</Title>
              <Text className={st.text}>
                We help connect your business with valuable professional
                networks, development programs, and new opportunities to ensure
                sustained growth for your workforce.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>04</div>
            <div className={st.cardContent}>
              <Title level={3}>Continuous Support & Development</Title>
              <Text className={st.text}>
                Our partnership doesn’t end with the initial implementation. We
                offer continuous support to help your business evolve and adapt
                to new HR needs.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>02</div>
            <div className={st.cardContent}>
              <Title level={3}>Tailored HR Strategy</Title>
              <Text className={st.text}>
                We develop a customized HR strategy that aligns with your
                company’s needs, ensuring effective recruitment, employee
                development, and workplace management.
              </Text>
            </div>
          </div>
          <Line className={st.line} />
          <LineMob className={st.lineMob} />
        </section>
      </div>
      <section className={st.btn}>
        <Button
          size="md"
          variant="primaryInverted"
          onClick={() => setOpen(true)}
        >
          Request More Information <ArrowTopRight />
        </Button>
      </section>
    </>
  );
}
