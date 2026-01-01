import { z } from 'zod';

import { applicantDetailSchema } from './applicantDetailSchema';
import { incomeSchema } from './IncomeSchema';
import { creditHistorySchema } from './creditHistorySchema';
import { assetLiabilitySchema } from './assetLiabilitySchema';
import { loanDetailsSchema } from './loanDetailsSchema';
import { guarantorSchema } from './guarantorSchema';
import { summaryConsentSchema } from './summaryConsentSchema';
import { documentSchema } from './documentSchema';

export const loanSchema = z.object({
  applicantDetails: applicantDetailSchema,
  income: incomeSchema,
  creditHistory: creditHistorySchema,
  assetLiability: assetLiabilitySchema,
  loanDetails: loanDetailsSchema,
  document: documentSchema,
  guarantor: guarantorSchema,
  summaryConsent: summaryConsentSchema,
});
