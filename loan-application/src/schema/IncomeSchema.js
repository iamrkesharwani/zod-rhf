import { z } from 'zod';

const incomeSourceSchema = z.object({
  incomeType: z
    .enum([
      'salary',
      'businessIncome',
      'rentalIncome',
      'investmentReturns',
      'other',
    ])
    .or(z.literal(''))
    .refine((val) => val !== '', { message: 'Please select your income type' }),

  annualIncome: z
    .string()
    .trim()
    .nonempty({ message: 'Annual income is required' })
    .refine(
      (val) =>
        !Number.isNaN(Number(val), {
          message: 'Please enter a valid income amount',
        })
    )
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: 'Income must be greater than zero' })
    .refine((val) => val >= 240000, {
      message: 'Annual income must be at least ₹2,40,000',
    }),

  proofOfIncome: z.string().trim().optional().or(z.literal('')),
});

const salarySchema = {
  employerName: z
    .string()
    .trim()
    .nonempty({ message: 'Employer name is required' })
    .min(3, { message: 'Employer name must be at least 3 characters' }),

  designation: z
    .string()
    .trim()
    .nonempty({ message: 'Designation is required' })
    .min(3, { message: 'Designation must be at least 3 characters' }),

  dateOfJoining: z
    .string()
    .nonempty({ message: 'Date of joining is required' })
    .refine(
      (val) => {
        const doj = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return doj < today;
      },
      { message: 'Date of joining cannot be in the future' }
    ),
};

const empTypeSchema = z.object({
  empType: z.string().min(1, { message: 'Select an income type to continue' }),
});

const forSalaried = z.object({
  empType: z.literal('Salaried'),
  incomeSources: z.array(incomeSourceSchema).min(1, {
    message: 'At least one income source is required',
  }),
  ...salarySchema,
});

const forBusinessOwner = z.object({
  empType: z.literal('Business Owner'),
  incomeSources: z.array(incomeSourceSchema).min(1, {
    message: 'At least one income source is required',
  }),
});

const forSelfEmployed = z.object({
  empType: z.literal('Self-Employed'),
  incomeSources: z.array(incomeSourceSchema).min(1, {
    message: 'At least one income source is required',
  }),
});

export const incomeSchema = empTypeSchema.and(
  z.discriminatedUnion('empType', [
    forSalaried,
    forBusinessOwner,
    forSelfEmployed,
  ])
);
