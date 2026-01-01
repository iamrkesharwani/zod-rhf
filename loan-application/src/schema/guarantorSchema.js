import { z } from 'zod';

export const guarantorSchema = z.object({
  haveAGuarantor: z.enum(['Yes', 'No'], {
    required_error: 'Select one to continue',
  }),

  guarName: z
    .string()
    .trim()
    .min(1, { message: 'Guarantor name is required' })
    .min(3, { message: 'Guarantor name must be at least 3 characters long' }),

  relWithApplicant: z.enum(
    ['parent', 'sibling', 'spouse', 'friend', 'businessPartner', 'other'],
    { required_error: 'Select a relation with the applicant' }
  ),

  guarPhone: z
    .string()
    .trim()
    .min(1, { message: 'Phone number is required' })
    .regex(/^[6-9]\d{9}$/, {
      message: 'Enter a valid 10-digit mobile number',
    }),

  guarEmail: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' })
    .max(100, {
      message: 'Email cannot exceed 100 characters',
    }),

  guarAddress: z
    .string()
    .trim()
    .min(1, { message: 'Address is required' })
    .min(10, {
      message: 'Address must be at least 10 characters',
    })
    .max(500, {
      message: 'Address cannot exceed 500 characters',
    }),

  guarEmployerName: z
    .string()
    .trim()
    .min(1, { message: 'Employer name is required' })
    .min(3, { message: 'Employer name must be at least 3 characters' }),

  guarDesignation: z
    .string()
    .trim()
    .min(1, { message: 'Designation is required' })
    .min(3, { message: 'Designation must be at least 3 characters' }),

  guarMonthlyIncome: z
    .string()
    .trim()
    .min(1, { message: 'Monthly income is required' })
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: 'Please enter a valid income amount',
    })
    .refine((val) => Number(val) >= 20000, {
      message: 'Monthly income must be at least ₹20,000',
    }),

  guarYearEmp: z
    .string()
    .trim()
    .min(1, { message: 'Enter the years of employment of the guarantor' }),

  guarCreditScore: z
    .string()
    .trim()
    .min(1, { message: 'Credit score is a required field' })
    .refine((val) => Number(val) > 700, {
      message: 'Credit score should be at least 700',
    })
    .refine((val) => Number(val) < 900, {
      message: 'Credit score cannot exceed more than 900',
    }),

  guarConsentSchema: z.boolean().refine((val) => val === true, {
    message: 'Guarantor consent is required to continue',
  }),
});
