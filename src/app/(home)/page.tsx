import { RequestDialog, RequestForm } from '@/features/request-form/components';

import {
  Benefits,
  CareerJourney,
  EffectiveProcess,
  Hero,
  LetsBuildFuture,
  PackagesAndPricing,
  ServicesInDetail,
  Solution,
  WhyChoose,
} from './components';
import st from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Solution />
      <WhyChoose />
      <EffectiveProcess />
      <ServicesInDetail />
      <PackagesAndPricing />
      <CareerJourney />
      <LetsBuildFuture />
      <RequestDialog>
        <RequestForm className={st.layout} />
      </RequestDialog>
    </>
  );
}
