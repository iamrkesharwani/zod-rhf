import { z } from 'zod';

const personalDetailsSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, { message: 'Full name must be at least 3 characters' }),

  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' }),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, {
      message: 'Enter a valid 10-digit Indian phone number',
    }),

  summary: z.string().trim().min(50, {
    message: 'Professional summary must be at least 50 characters',
  }),
});

const experienceSchema = z
  .object({
    jobTitle: z
      .string()
      .trim()
      .min(3, { message: 'Job title must be at least 3 characters' }),

    company: z
      .string()
      .trim()
      .min(1, { message: 'Company name cannot be empty' }),

    startDate: z.string().min(1, { message: 'Start date is required' }),

    endDate: z.string().optional(),

    isCurrent: z.boolean(),

    workDescription: z.string().trim().min(50, {
      message: 'Work description must be at least 50 characters',
    }),
  })
  .superRefine((data, ctx) => {
    const { startDate, endDate, isCurrent } = data;

    if (!endDate && !isCurrent) {
      ctx.addIssue({
        path: ['endDate'],
        code: 'custom',
        message: 'End date is required if you are not currently working here',
      });
    }

    if (startDate && endDate && startDate > endDate) {
      ctx.addIssue({
        path: ['endDate'],
        code: 'custom',
        message: 'End date must be after start date',
      });
    }

    const today = new Date().toISOString().split('T')[0];

    if (startDate > today) {
      ctx.addIssue({
        path: ['startDate'],
        code: 'custom',
        message: 'Start date cannot be in the future',
      });
    }

    if (endDate && endDate > today) {
      ctx.addIssue({
        path: ['endDate'],
        code: 'custom',
        message: 'End date cannot be in the future',
      });
    }
  });

const resumeSchema = z
  .instanceof(File, { message: 'Resume file is required' })
  .refine((file) => file.type === 'application/pdf')
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: 'Resume must be smaller than 5MB',
  });

export const jobSchema = z.object({
  personalDetails: personalDetailsSchema,

  experiences: z
    .array(experienceSchema)
    .min(1, { message: 'Please add at least one work experience' }),

  skills: z.array(z.string()).min(3, { message: 'Select at least 3 skills' }),

  resume: resumeSchema,
});
