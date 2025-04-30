import type { JSX } from 'react';

import {
  EffectiveConflictResolution,
  FutureOfCareer,
  NavigatingEmployeeBenefits,
  WorkLifeBalance,
} from '@/features/articles/components';

export const articlesComponents: Record<string, JSX.Element> = {
  'the-future-of-career-development': <FutureOfCareer />,
  'effective-conflict-resolution': <EffectiveConflictResolution />,
  'navigating-employee-benefits': <NavigatingEmployeeBenefits />,
  'work-life-balance': <WorkLifeBalance />,
};
