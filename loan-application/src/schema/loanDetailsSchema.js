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
});
