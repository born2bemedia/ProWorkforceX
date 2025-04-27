import { Hero } from '@/shared/ui/components/hero';

import {
  ChooseOurSolutions,
  EmployeeBenefits,
  EmployeeDevelopment,
  EmployeeEngagement,
  ExplorePricing,
  HowItWorks,
  HRCompliance,
  LeadershipTraining,
  RiskManagement,
  TalentAcquisitionRecruitment,
  WorkplaceConflictResolution,
} from './components';
import st from './page.module.scss';

export default function Solutions() {
  return (
    <>
      <Hero
        chipText="Solutions"
        title="Transform Your Business with Innovative HR Solutions"
        text={
          <>
            At ProWorkforceX, we understand that every business has unique
            challenges and opportunities when managing human resources. That’s
            why we don’t believe in a one-size-fits-all approach. Instead, we
            craft innovative, tailor-made HR solutions that align directly with
            your company’s culture, goals, and growth ambitions. <br />
            <br className={st.brMobile} />
            Whether you’re looking to attract top talent, enhance employee
            performance, streamline your HR processes, or build a strong company
            culture, we provide the strategic support your business needs at
            every stage. Our end-to-end HR services are designed to meet your
            current needs and adapt and evolve with your organization’s changing
            demands.
          </>
        }
        imageUrl="/images/solutions/hero.jpg"
        className={st.heroMobile}
      />
      <TalentAcquisitionRecruitment />
      <EmployeeBenefits />
      <EmployeeDevelopment />
      <WorkplaceConflictResolution />
      <HRCompliance />
      <EmployeeEngagement />
      <LeadershipTraining />
      <RiskManagement />
      <ChooseOurSolutions />
      <HowItWorks />
      <ExplorePricing />
    </>
  );
}
