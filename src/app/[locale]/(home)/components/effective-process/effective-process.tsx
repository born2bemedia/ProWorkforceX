'use client';

import { useTranslations } from 'next-intl';

import { useRequestDialogStore } from '@/features/request-form/services';

import { Line } from '@/shared/ui/icons/outline/line';
import { LineMob } from '@/shared/ui/icons/outline/line-mob';
import { ArrowTopRight } from '@/shared/ui/icons/yellow';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './effective-process.module.scss';

export function EffectiveProcess() {
  const t = useTranslations('home.effectiveProcess');
  const { setOpen } = useRequestDialogStore();

  return (
    <>
      <div className={st.layout}>
        <section className={st.titleLayout}>
          <Title level={2}>
            {t('title.0')}
            <br /> {t('title.1')}
          </Title>
          <Text color="gray600">{t('desc')}</Text>
        </section>
        <section className={st.lineLayout}>
          <div className={st.card}>
            <div className={st.cardNumber}>01</div>
            <div className={st.cardContent}>
              <Title level={3}>{t('1.title')}</Title>
              <Text className={st.text}>{t('1.desc')}</Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>03</div>
            <div className={st.cardContent}>
              <Title level={3}>{t('2.title')}</Title>
              <Text className={st.text}>{t('2.desc')}</Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>05</div>
            <div className={st.cardContent}>
              <Title level={3}>{t('3.title')}</Title>
              <Text className={st.text}>{t('3.desc')}</Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>06</div>
            <div className={st.cardContent}>
              <Title level={3}>{t('4.title')}</Title>
              <Text className={st.text}>{t('4.desc')}</Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>04</div>
            <div className={st.cardContent}>
              <Title level={3}>{t('5.title')}</Title>
              <Text className={st.text}>{t('5.desc')}</Text>
            </div>
          </div>
          <div className={st.card}>
            <div className={st.cardNumber}>02</div>
            <div className={st.cardContent}>
              <Title level={3}>{t('6.title')}</Title>
              <Text className={st.text}>{t('6.desc')}</Text>
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
          {t('requestMoreInformation')} <ArrowTopRight />
        </Button>
      </section>
    </>
  );
}
