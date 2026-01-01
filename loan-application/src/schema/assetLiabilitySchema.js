import { z } from 'zod';

export const assetLiabilitySchema = z.object({
  propType: z
    .enum(['Assets', 'Liabilities', 'No'], {
      required_error: 'Select at least one option',
    })
    .refine(
      (val) => {
        if (val.includes('No')) {
          return val.length === 1;
        }
        return true;
      },
      { message: '"No" cannot be selected with Assets or Liabilities' }
    ),
});
