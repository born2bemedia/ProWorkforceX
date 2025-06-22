import type { Metadata } from 'next';

import {
  ChooseOurSolutions,
  EmployeeBenefits,
  EmployeeDevelopment,
  EmployeeEngagement,
  ExplorePricing,
  Hero,
  HowItWorks,
  HRCompliance,
  LeadershipTraining,
  RiskManagement,
  TalentAcquisitionRecruitment,
  WorkplaceConflictResolution,
} from './components';

export const metadata: Metadata = {
  title: 'ProWorkforceX HR Solutions - Customized Strategies for Your Business',
  description:
    'Explore various HR solutions tailored to your business needs. ProWorkforceX has the expertise to optimize your workforce from recruitment to leadership training.',
  openGraph: {
    title:
      'ProWorkforceX HR Solutions - Customized Strategies for Your Business',
    description:
      'Explore various HR solutions tailored to your business needs. ProWorkforceX has the expertise to optimize your workforce from recruitment to leadership training.',
    images: 'https://i.ibb.co/1t2ZCF6J/1024-518.png',
  },
};

export default function Solutions() {
  return (
    <>
      <Hero />
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
