import {
  Benefits,
  CareerJourney,
  EffectiveProcess,
  Hero,
  LetsBuildFuture,
  PackagesAndPricing,
  ServicesInDetail,
  Solution,
  WhatClientsSay,
  WhyChoose,
} from './components';

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Solution />
      <WhyChoose />
      <EffectiveProcess />
      <ServicesInDetail />
      <WhatClientsSay />
      <PackagesAndPricing />
      <CareerJourney />
      <LetsBuildFuture />
    </>
  );
}
