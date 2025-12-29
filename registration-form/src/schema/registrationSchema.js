import { z } from 'zod';

export const registrationSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: 'Full name must be at least 3 characters' }),
    email: z.string().email({ message: 'Enter a valid email address' }),
    phone: z
      .string()
      .min(10, { message: 'Phone number must be 10 characters' })
      .max(10, { message: 'Phone number must be 10 characters' }),
    username: z
      .string()
      .min(4, { message: 'Username must be at least 3 characters' }),
    password: z
      .string()
      .min(8, { message: 'Password should be at least 8 characters' }),
    confirmPassword: z.string(),
    interests: z
      .array(z.string())
      .min(1, { message: 'Select at least one interest' }),
    notifications: z.object({
      email: z.boolean().optional(),
      sms: z.boolean().optional(),
      push: z.boolean().optional(),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
