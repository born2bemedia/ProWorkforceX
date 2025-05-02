import type { Metadata } from 'next';

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
