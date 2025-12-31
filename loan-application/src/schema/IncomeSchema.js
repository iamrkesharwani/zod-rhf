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
          !isNaN(Number(val) && Number(val) > 0, {
            message: 'Please enter a valid income amount',
          })
      )
      .refine((val) => Number(val) >= 20000, {
        message: 'Monthly income must be at least ₹20,000',
      }),
  })
  .superRefine((data, ctx) => {
    const today = new Date().toISOString().split('T')[0];
    const doj = new Date(data.dateOfJoining);

    if (today > doj) {
      ctx.addIssue({
        path: ['dateOfJoining'],
        code: 'custom',
        message: "Joining must be before today's date",
      });
    }
  });
