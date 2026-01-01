import { z } from 'zod';

export const summaryConsentSchema = z
  .object({
    confirmAccuracy: z.boolean(),
    authorizeVerification: z.boolean(),
    agreeToTerms: z.boolean(),
  })
  .superRefine((data, ctx) => {
    const pending = [];

    if (!data.confirmAccuracy) {
      pending.push('confirm information accuracy');
    }

    if (!data.authorizeVerification) {
      pending.push('authorize verification');
    }

    if (!data.agreeToTerms) {
      pending.push('agree to terms and conditions');
    }

    if (pending.length === 3) {
      ctx.addIssue({
        code: 'custom',
        path: ['consentMessage'],
        message: 'All confirmations are required',
      });
      return;
    }

    if (pending.length > 0) {
      const message =
        pending.length === 1
          ? `Please ${pending[0]}`
          : `Please ${pending[0]} and ${pending[1]}`;

      ctx.addIssue({
        code: 'custom',
        path: ['consentMessage'],
        message: message,
      });
    }
  });
