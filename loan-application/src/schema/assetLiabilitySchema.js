import { z } from 'zod';

export const assetLiabilitySchema = z.object({
  propType: z.enum(['Assets', 'Liabilities', 'No'], {
    required_error: 'Select an option to continue',
  }),
});
