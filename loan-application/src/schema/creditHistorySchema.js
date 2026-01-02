import { z } from 'zod';

const baseCreditSchema = {
  creditScore: z
    .string()
    .trim()
    .nonempty( { message: 'Credit score is a required field' })
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
    .nonempty( { message: 'Credit score date is required' })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'Enter a valid date',
    }),
};

const hasLoansSchema = z.object({
  hasLoans: z.enum(['Yes', 'No'], {
    required_error: 'Please select whether you have loans',
  }),
});

const noLoanSchema = z.object({
  ...baseCreditSchema,
  hasLoans: z.literal('No'),
});

const withLoanSchema = z.object({
  ...baseCreditSchema,
  hasLoans: z.literal('Yes'),

  loanType: z.enum(
    ['homeLoan', 'carLoan', 'personalLoan', 'creditCard', 'educationLoan'],
    { required_error: 'Select a loan type' }
  ),

  outstandingAmount: z
    .string()
    .trim()
    .nonempty( { message: 'Outstanding amount cannot be empty' })
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
    .nonempty( { message: 'Monthly EMI field is a required field' })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: 'Enter a valid EMI',
    })
    .transform((val) => Number(val))
    .refine((val) => val > 0, 'EMI must be greater than zero'),

  lenderName: z
    .string()
    .trim()
    .nonempty( { message: 'Lender name is an important field' }),
});

export const creditHistorySchema = hasLoansSchema.and(
  z.discriminatedUnion('hasLoans', [noLoanSchema, withLoanSchema])
);
