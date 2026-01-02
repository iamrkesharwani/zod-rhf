import { z } from 'zod';

export const loanDetailsSchema = z.object({
  loanType: z.enum(
    [
      'Home Loan',
      'Personal Loan',
      'Car Loan',
      'Business Loan',
      'Education Loan',
      'Gold Loan',
    ],
    { required_error: 'Select the purpose of loan' }
  ),

  loanAmount: z
    .string()
    .trim()
    .nonempty( { message: 'Enter the amount you are looking for loan' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter a valid loan amount',
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 50000, {
      message: 'Loan amount must be at least ₹50,000',
    })
    .refine((val) => val <= 10000000, {
      message: 'Loan amount cannot exceed ₹1 crore',
    }),

  loanTenureYears: z
    .string()
    .trim()
    .nonempty( { message: 'Tenure is a mandatory field' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter a valid loan tenure',
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 3, {
      message: 'Loan tenure must be at least 3 months',
    })
    .refine((val) => val >= 120, {
      message: 'Loan tenure cannot exceed 10 years',
    }),

  expectInterest: z
    .string()
    .trim()
    .nonempty( { message: 'Enter your expected interest rate percentage (p.a.)' })
    .refine((val) => !Number.isNaN(Number(val)), 'Enter a valid interest rate')
    .transform((val) => Number(val))
    .refine((val) => val >= 5, 'Interest rate must be at least 5%')
    .refine((val) => val <= 100, 'Interest rate cannot exceed 100%'),

  prefDisbursementDate: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: 'Enter a valid disbursement date',
    })
    .refine((val) => !val || new Date(val) >= new Date(), {
      message: 'Disbursement date cannot be in the past',
    }),

  loanPurpose: z
    .string()
    .nonempty( { message: 'Enter purpose of your loan' })
    .min(50, { message: 'At least 50 characters is required' })
    .max(500, 'Loan purpose cannot exceed 500 characters'),
});
