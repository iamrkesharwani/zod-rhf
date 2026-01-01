import { z } from 'zod';

const MAX_10_MB = 10 * 1024 * 1024;
const MAX_5_MB = 5 * 1024 * 1024;

export const documentSchema = z.object({
  bankStatements: z
    .array(z.instanceof(File))
    .min(1, { message: 'Bank statement is required' })
    .refine((files) => files.every((file) => file.type === 'application/pdf'), {
      message: 'Bank statements must be PDF files',
    })
    .refine((files) => files.every((file) => file.size <= MAX_10_MB), {
      message: 'Each bank statement must be less than 10 MB',
    }),

  panCard: z
    .instanceof(File, { message: 'PAN card is required' })
    .refine(
      (file) =>
        ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type),
      { message: 'PAN card must be PDF, JPG, or PNG' }
    )
    .refine((file) => file.size <= MAX_5_MB, {
      message: 'PAN card must be less than 5 MB',
    }),

  aadhaarCard: z
    .instanceof(File, { message: 'Aadhaar card is required' })
    .refine(
      (file) =>
        ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type),
      { message: 'Aadhaar card must be PDF, JPG, or PNG' }
    )
    .refine((file) => file.size <= MAX_5_MB, {
      message: 'Aadhaar card must be less than 5 MB',
    }),

  incomeProofs: z
    .array(z.instanceof(File))
    .min(1, { message: 'At least one income proof is required' })
    .refine((files) => files.every((file) => file.type === 'application/pdf'), {
      message: 'Income proof must be PDF files',
    })
    .refine((files) => files.every((file) => file.size <= MAX_5_MB), {
      message: 'Each income proof must be less than 10 MB',
    }),

  additionalDocs: z
    .array(z.instanceof(File))
    .optional()
    .refine(
      (files) => !files || files.every((file) => file.size <= MAX_10_MB),
      { message: 'Each additional document must be less than 10 MB' }
    ),
});
