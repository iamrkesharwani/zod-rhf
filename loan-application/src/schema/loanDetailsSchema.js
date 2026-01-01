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
    .min(1, { message: 'Enter the amount you are looking for loan' }),

  loanTenure: z
    .string()
    .trim()
    .min(1, { message: 'Tenure is a mandatory field' }),

  expectInterest: z
    .string()
    .trim()
    .min(1, { message: 'Enter your expected interest rate percentage (p.a.)' }),

  loanPurpose: z
    .string()
    .min(1, { message: 'Enter purpose of your loan' })
    .min(50, { message: 'At least 50 characters is required' }),
});
