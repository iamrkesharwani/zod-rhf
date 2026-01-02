import { z } from 'zod';

const baseCreditSchema = z.object({
  creditScore: z
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
      message: 'Credit score cannot exceed 900',
    }),

  creditScoreDate: z
    .string()
    .nonempty({ message: 'Credit score date is required' })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'Enter a valid date',
    }),
});

const existingLoanSchema = z.object({
  loanType: z
    .enum([
      'homeLoan',
      'carLoan',
      'personalLoan',
      'creditCard',
      'educationLoan',
    ])
    .or(z.literal(''))
    .refine((val) => val !== '', { message: 'Select a loan type' }),

  outstandingAmount: z
    .string()
    .trim()
    .nonempty({ message: 'Outstanding amount cannot be empty' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter a valid outstanding amount',
    })
    .transform((val) => Number(val))
    .refine((val) => val >= 1000, {
      message: 'Outstanding amount must be at least ₹1,000',
    }),

  monthlyEmi: z
    .string()
    .trim()
    .nonempty({ message: 'Monthly EMI field is a required field' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter a valid EMI',
    })
    .transform((val) => Number(val))
    .refine((val) => val > 0, 'EMI must be greater than zero'),

  lenderName: z
    .string()
    .trim()
    .nonempty({ message: 'Lender name is an important field' }),
});

const hasLoansSchema = z.object({
  hasLoans: z.string().min(1, { message: 'Select "Yes" or "No" to continue' }),
});

const noLoanSchema = z.object({
  hasLoans: z.literal('No'),
});

const withLoanSchema = z.object({
  hasLoans: z.literal('Yes'),
  existingLoans: z
    .array(existingLoanSchema)
    .min(1, { message: 'Please add at least one loan' }),
});

export const creditHistorySchema = baseCreditSchema
  .and(hasLoansSchema)
  .and(z.discriminatedUnion('hasLoans', [noLoanSchema, withLoanSchema]));
