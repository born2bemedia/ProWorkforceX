'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import {
  ContactLine,
  ContactLineMob,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
} from '@/shared/ui/icons/outline';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-info.module.scss';

export function ContactInfo() {
  const t = useTranslations('contactUs.info');

  return (
    <section className={st.layout}>
      <Title level={2} className={st.title}>
        {t('title')}
      </Title>
      <section className={st.lineLayout}>
        <div className={st.card}>
          <div className={st.cardNumber}>
            <LocationIcon />
          </div>
          <div
            className={st.cardContent}
            style={{ backgroundColor: '#DFF56B' }}
          >
            <Title level={3}>{t('registeredAddress')}</Title>
            <Text className={st.text}>
              2nd Floor College House, 17 King Edwards Road, Ruislip, London,
              United Kingdom, HA4 7AE
            </Text>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>
            <LocationIcon />
          </div>
          <div
            className={st.cardContent}
            style={{ backgroundColor: '#DFF56B' }}
          >
            <Title level={3}>{t('officeAddress')}</Title>
            <Text className={st.text}>
              9 Albert Embankment (Unit C), Lambeth, London, United Kingdom, SE1
              7HD
            </Text>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>
            <PhoneIcon />
          </div>
          <div className={st.cardContent}>
            <Title level={3}>{t('phoneNumber')}</Title>
            <Link href="tel:+447878591056">
              <Text className={st.text}>+447878591056</Text>
            </Link>
          </div>
        </div>
        <div className={st.card}>
          <div className={st.cardNumber}>
            <EmailIcon />
          </div>
          <div className={st.cardContent}>
            <Title level={3}>{t('email')}</Title>
            <Link href="mailto:info@proworkforcex.com">
              <Text className={st.text}>info@proworkforcex.com</Text>
            </Link>
          </div>
        </div>
        <ContactLine className={st.line} />
        <ContactLineMob className={st.lineMob} />
      </section>
    </section>
  );
}
