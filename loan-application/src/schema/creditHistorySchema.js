import { z } from 'zod';

export const creditHistorySchema = z.object({
  creditScore: z
    .string()
    .trim()
    .min(1, { message: 'Credit score is a required field' })
    .refine((val) => Number(val) > 700, {
      message: 'Credit score should be at least 700',
    })
    .refine((val) => Number(val) < 900, {
      message: 'Credit score cannot exceed more than 900',
    }),

  creditScoreDate: z
    .string()
    .min(1, { message: 'Credit score date should be empty' }),

  hasLoans: z.enum(['yes', 'no'], {
    required_error: 'Please select whether you have existing loans',
  }),

  loanType: z.enum(
    ['homeLoan', 'carLoan', 'personalLoan', 'creditCard', 'educationLoan'],
    { required_error: 'Select a loan type' }
  ),

  outstandingAmount: z
    .string()
    .trim()
    .min(1, { message: 'Outstanding amount cannot be empty' })
    .refine((val) => Number(val) > 1000, {
      message: 'Outstanding amount cannot be less than ₹1,000',
    }),

  monthlyEmi: z
    .string()
    .trim()
    .min(1, { message: 'Monthly EMI field is important to enterF' }),

  lenderName: z
    .string()
    .trim()
    .min(1, { message: 'Lender name is an important field' }),
});
