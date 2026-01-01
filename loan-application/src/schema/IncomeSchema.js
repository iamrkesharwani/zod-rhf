import { z } from 'zod';

export const incomeSchema = z
  .object({
    empType: z.enum(['Salaried', 'Self-Employed', 'Business Owner'], {
      required_error: 'Please select your employment type',
    }),

    employerName: z
      .string()
      .trim()
      .min(1, { message: 'Employer name is required' })
      .min(3, { message: 'Employer name must be at least 3 characters' }),

    designation: z
      .string()
      .trim()
      .min(1, { message: 'Designation is required' })
      .min(3, { message: 'Designation must be at least 3 characters' }),

    dateOfJoining: z
      .string()
      .min(1, { message: 'Date of joining is required' }),

    incomeType: z.enum(
      [
        'salary',
        'businessIncome',
        'rentalIncome',
        'investmentReturns',
        'other',
      ],
      {
        required_error: 'Please select your income type',
      }
    ),

    monthlyIncome: z
      .string()
      .trim()
      .min(1, { message: 'Monthly income is required' })
      .refine(
        (val) =>
          !Number.isNaN(Number(val), {
            message: 'Please enter a valid income amount',
          })
      )
      .transform((val) => Number(val))
      .refine((val) => val > 0, { message: 'Income must be greater than zero' })
      .refine((val) => val >= 20000, {
        message: 'Monthly income must be at least ₹20,000',
      }),
  })
  .superRefine((data, ctx) => {
    const doj = new Date(data.dateOfJoining);
    const today = new Date();

    if (doj > today) {
      ctx.addIssue({
        path: ['dateOfJoining'],
        code: 'custom',
        message: 'Date of joining cannot be in the future',
      });
    }
  });
