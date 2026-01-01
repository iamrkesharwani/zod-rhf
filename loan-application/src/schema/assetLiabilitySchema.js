import { z } from 'zod';

export const assetLiabilitySchema = z.object({
  hasAssetsOrLiabilities: z.enum(['Yes', 'No'], {
    required_error: 'Please specify whether you have assets or liabilities',
  }),
});
