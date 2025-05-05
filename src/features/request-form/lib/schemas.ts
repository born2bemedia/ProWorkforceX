import { z } from '@/shared/lib/forms';
import { isPhoneValid } from '@/shared/lib/phone';

export const requestFormSchema = z.object({
  fullName: z.string().min(1, { message: 'Please enter a full name' }),
  email: z.string().email({ message: 'Please enter a email address' }),
  phone: z
    .string()
    .nonempty('Phone is required')
    .refine(isPhoneValid, 'Invalid phone number format'),
  companyName: z.string().optional(),
  website: z.string().optional(),
  services: z.array(z.string()),
  budget: z.string().nonempty('Please provide your budget'),
  goals: z.string().nonempty('Please provide your Goals & Challenges'),
  jobRoles: z.string().nonempty('Please provide your job roles'),
  skills: z.string().nonempty('Please provide your required skills'),
  industry: z.string().nonempty('Please provide your industry'),
  careerInterests: z.string().nonempty('Please provide your career interests'),
  projectTimeline: z.string().nonempty('Please provide your project timeline'),
  contactMethod: z.string().nonempty('Please provide your Contact Method'),
  file: z.instanceof(File).optional(),
});

export type RequestFormSchema = z.infer<typeof requestFormSchema>;
