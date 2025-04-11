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
    </>
  );
}
