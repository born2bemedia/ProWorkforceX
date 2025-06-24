import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/phone';

export const createRequestFormSchema = (
  t: ReturnType<typeof useTranslations>,
) =>
  z.object({
    fullName: z.string().min(1, { message: t('fullName') }),
    email: z.string().email({ message: t('email') }),
    phone: z
      .string()
      .nonempty(t('phoneIsRequired'))
      .refine(isPhoneValid, t('phoneInvalid')),
    companyName: z.string().optional(),
    website: z.string().optional(),
    services: z.array(z.string()),
    budget: z.string().nonempty(t('budget')),
    goals: z.string().nonempty(t('goals')),
    jobRoles: z.string().nonempty(t('jobRoles')),
    skills: z.string().nonempty(t('skills')),
    industry: z.string().nonempty(t('industry')),
    careerInterests: z.string().nonempty(t('careerInterests')),
    projectTimeline: z.string().nonempty(t('projectTimeline')),
    contactMethod: z.string().nonempty(t('contactMethod')),
    file: z.instanceof(File).optional(),
  });

export type RequestFormSchema = z.infer<
  ReturnType<typeof createRequestFormSchema>
>;
