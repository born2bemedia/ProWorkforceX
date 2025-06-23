import type { Metadata } from 'next';

import {
  DownloadPricing,
  EmployeeBenefitsOptimization,
  EmployeeDevelopment,
  EmployeeEngagement,
  Hero,
  HRCompliance,
  LeadershipManagementTraining,
  Packages,
  PricingTitle,
  RiskManagement,
  TalentAcquisitionRecruitment,
  WorkplaceConflictResolution,
} from '@/app/[locale]/pricing-and-packages/components';

export const metadata: Metadata = {
  title:
    'ProWorkforceX Pricing & Packages - Flexible Solutions for Your Business',
  description:
    'Discover our transparent and flexible pricing models. Whether you’re looking for one-time consultations or ongoing HR support, ProWorkforceX offers the right package for your needs.',
  openGraph: {
    title:
      'ProWorkforceX Pricing & Packages - Flexible Solutions for Your Business',
    description:
      'Discover our transparent and flexible pricing models. Whether you’re looking for one-time consultations or ongoing HR support, ProWorkforceX offers the right package for your needs.',
    images: 'https://i.ibb.co/1t2ZCF6J/1024-518.png',
  },
};

export default function PackagesAndPricing() {
  return (
    <>
      <Hero />
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
