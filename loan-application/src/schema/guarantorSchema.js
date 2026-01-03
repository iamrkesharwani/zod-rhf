import { z } from 'zod';

const baseSchema = z.object({
  haveAGuarantor: z
    .string()
    .min(1, { message: 'Select "Yes" or "No" to continue' }),
});

const guarantorDetailsSchema = {
  guarName: z
    .string()
    .trim()
    .nonempty({ message: 'Guarantor name is required' })
    .min(3, { message: 'Guarantor name must be at least 3 characters long' }),

  relWithApplicant: z
    .string()
    .min(1, { message: 'Select a relation with the applicant' }),

  guarPhone: z
    .string()
    .trim()
    .nonempty({ message: 'Phone number is required' })
    .regex(/^[6-9]\d{9}$/, {
      message: 'Enter a valid 10-digit mobile number',
    }),

  guarEmail: z
    .string()
    .trim()
    .nonempty({ message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' })
    .max(100, {
      message: 'Email cannot exceed 100 characters',
    }),

  guarAddress: z
    .string()
    .trim()
    .nonempty({ message: 'Address is required' })
    .min(10, {
      message: 'Address must be at least 10 characters',
    })
    .max(500, {
      message: 'Address cannot exceed 500 characters',
    }),

  guarEmployerName: z
    .string()
    .trim()
    .nonempty({ message: 'Employer name is required' })
    .min(3, { message: 'Employer name must be at least 3 characters' }),

  guarDesignation: z
    .string()
    .trim()
    .nonempty({ message: 'Designation is required' })
    .min(3, { message: 'Designation must be at least 3 characters' }),

  guarMonthlyIncome: z
    .string()
    .trim()
    .nonempty({ message: 'Monthly income is required' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter a valid income amount',
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 20000, {
      message: 'Monthly income must be at least ₹20,000',
    }),

  guarYearEmp: z
    .string()
    .trim()
    .nonempty({ message: 'Enter the years of employment of the guarantor' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter valid years of employment',
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 1, 'At least 1 year of employment is required'),

  guarCreditScore: z
    .string()
    .trim()
    .nonempty({ message: 'Credit score is a required field' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter a valid credit score',
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 700, {
      message: 'Credit score should be at least 700',
    })
    .refine((val) => val <= 900, {
      message: 'Credit score cannot exceed more than 900',
    }),

  guarExistingLoanEmi: z
    .string()
    .nonempty({ message: 'Guarantor existing EMI is required' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter a valid EMI',
    }),

  guarConsentSchema: z.boolean().refine((val) => val === true, {
    message: 'Guarantor consent is required to continue',
  }),
};

const noGuarantorSchema = z.object({
  haveAGuarantor: z.literal('No'),
});

const withGuarantorSchema = z.object({
  haveAGuarantor: z.literal('Yes'),
  ...guarantorDetailsSchema,
});

export const guarantorSchema = baseSchema.and(
  z.discriminatedUnion('haveAGuarantor', [
    noGuarantorSchema,
    withGuarantorSchema,
  ])
);
