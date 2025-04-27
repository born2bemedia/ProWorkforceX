import { Hero } from '@/shared/ui/components/hero';

import {
  DownloadPricing,
  EmployeeBenefitsOptimization,
  EmployeeDevelopment,
  EmployeeEngagement,
  HRCompliance,
  LeadershipManagementTraining,
  Packages,
  PricingTitle,
  RiskManagement,
  TalentAcquisitionRecruitment,
  WorkplaceConflictResolution,
} from '@/app/pricing-and-packages/components';

export default function PackagesAndPricing() {
  return (
    <>
      <Hero
        chipText="Packages & Pricing"
        title="Discover Our Premium HR Packages & Pricing"
        text="ProWorkforceX offers comprehensive and customizable HR solutions to meet your business’s unique needs. Whether you’re looking for one-time expert services or ongoing HR support, our pricing models are transparent and tailored to ensure maximum value."
        imageUrl="/images/packages-and-pricing/hero.jpg"
      />
      <Packages />
      <PricingTitle />
      <TalentAcquisitionRecruitment />
      <EmployeeBenefitsOptimization />
      <EmployeeDevelopment />
      <WorkplaceConflictResolution />
      <HRCompliance />
      <EmployeeEngagement />
      <LeadershipManagementTraining />
      <RiskManagement />
      <DownloadPricing />
    </>
  );
}
