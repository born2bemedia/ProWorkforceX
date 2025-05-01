import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/phone';

export const orderFormSchema = z.object({
  fullName: z.string().min(1, { message: 'Please enter a full name' }),
  email: z.string().min(1, { message: 'Please enter a email address' }),
  phone: z
    .string()
    .nonempty('Phone is required')
    .refine(isPhoneValid, 'Invalid phone number format'),
  companyName: z.string().optional(),
  website: z.string().optional(),
  budget: z.string().nonempty('Please provide your budget'),
});

export type OrderFormSchema = z.infer<typeof orderFormSchema>;
