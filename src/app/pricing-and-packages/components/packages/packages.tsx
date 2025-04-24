'use client';

import { TabContent, Tabs } from '@/shared/ui/kit/tabs';
import { Title } from '@/shared/ui/kit/title';

import { OneTimePurchase } from '../one-time-purchase';
import { SubscriptionPurchase } from '../subscription-purchase';
import st from './packages.module.scss';

const tabs = [
  {
    id: 'one-time',
    label: 'One-Time Purchase',
    value: 'one-time',
    component: OneTimePurchase,
  },
  {
    id: 'subscription',
    label: 'Subscription',
    value: 'subscription',
    component: SubscriptionPurchase,
  },
];

export function Packages() {
  return (
    <section className={st.layout}>
      <section className={st.heading}>
        <Title level={2}>Packages</Title>
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
