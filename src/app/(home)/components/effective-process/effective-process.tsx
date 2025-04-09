import { Line } from '@/shared/ui/icons/outline/line';
import { LineMob } from '@/shared/ui/icons/outline/line-mob';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './effective-process.module.scss';

export function EffectiveProcess() {
  return (
    <>
      <div className={st.layout}>
        <section className={st.titleLayout}>
          <Title level={2}>
            Our Simple,
            <br /> Effective Process
          </Title>
          <Text color="gray600">
            We believe in a simple and effective approach <br /> to help you
            meet your career and HR needs:
          </Text>
        </section>
        <section className={st.lineLayout}>
          <div className={st.card}>
            <div className={st.cardNumber}>01</div>
            <div className={st.cardContent}>
              <Title level={3}>Book a Consultation</Title>
              <Text className={st.text}>
                Schedule your initial consultation with one of our HR experts.
                We’ll take time to understand your needs and aspirations.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>02</div>
            <div className={st.cardContent}>
              <Title level={3}>Optimize & Scale</Title>
              <Text className={st.text}>
                Continuous testing, refinement, and execution to ensure
                long-term success.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>03</div>
            <div className={st.cardContent}>
              <Title level={3}>Understand Your Market</Title>
              <Text className={st.text}>
                Every strategy starts with in-depth market research and
                competitor analysis.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>04</div>
            <div className={st.cardContent}>
              <Title level={3}>Define Your Strategy</Title>
              <Text className={st.text}>
                We craft a clear, customized plan based on your goals and
                audience.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>05</div>
            <div className={st.cardContent}>
              <Title level={3}>Define Your Strategy</Title>
              <Text className={st.text}>
                We craft a clear, customized plan based on your goals and
                audience.
              </Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>06</div>
            <div className={st.cardContent}>
              <Title level={3}>Define Your Strategy</Title>
              <Text className={st.text}>
                We craft a clear, customized plan based on your goals and
                audience.
              </Text>
            </div>
          </div>
          <Line className={st.line} />
          <LineMob className={st.lineMob} />
        </section>
      </div>
      <section className={st.btn}>
        <Button size="md" variant="primaryInverted">
          Request More Information <ArrowTopRight />
        </Button>
      </section>
    </>
  );
}
