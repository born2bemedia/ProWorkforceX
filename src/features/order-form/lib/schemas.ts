import type { useTranslations } from 'next-intl';

import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/phone';

export const createOrderFormSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    fullName: z.string().min(1, { message: t('fullName') }),
    email: z.string().min(1, { message: t('email') }),
    phone: z
      .string()
      .nonempty(t('phoneIsRequired'))
      .refine(isPhoneValid, t('phoneInvalid')),
    companyName: z.string().optional(),
    website: z.string().optional(),
    budget: z.string().nonempty(t('budget')),
  });

export type OrderFormSchema = z.infer<ReturnType<typeof createOrderFormSchema>>;
