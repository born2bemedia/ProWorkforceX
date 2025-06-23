'use client';

import { useTranslations } from 'next-intl';

import { TabContent, Tabs } from '@/shared/ui/kit/tabs';
import { Title } from '@/shared/ui/kit/title';

import { OneTimePurchase } from '../one-time-purchase';
import { SubscriptionPurchase } from '../subscription-purchase';
import st from './packages.module.scss';

export function Packages() {
  const t = useTranslations('pricingAndPackages.packages');

  const tabs = [
    {
      id: 'one-time',
      label: t('oneTime'),
      value: 'one-time',
      component: OneTimePurchase,
    },
    {
      id: 'subscription',
      label: t('subscription'),
      value: 'subscription',
      component: SubscriptionPurchase,
    },
  ];
  return (
    <section className={st.layout}>
      <section className={st.heading}>
        <Title level={2}>{t('packages')}</Title>
        <Tabs values={tabs}>
          {tabs.map(({ id, component: Comp }) => (
            <TabContent key={id} id={id}>
              <Comp />
            </TabContent>
          ))}
        </Tabs>
      </section>
    </section>
  );
}
