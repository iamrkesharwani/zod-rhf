import { z } from 'zod';

export const applicantDetailSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, { message: 'Full name is required' })
      .min(3, {
        message: 'Full name must be at least 3 characters',
      })
      .max(100, {
        message: 'Full name cannot exceed 100 characters',
      }),

    dateOfBirth: z
      .string()
      .min(1, { message: 'Date of birth is required' })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: 'Enter a valid date',
      }),

    email: z
      .string()
      .trim()
      .min(1, { message: 'Email address is required' })
      .email({ message: 'Please enter a valid email address' })
      .max(100, {
        message: 'Email cannot exceed 100 characters',
      }),

    phone: z
      .string()
      .trim()
      .min(1, { message: 'Phone number is required' })
      .regex(/^[6-9]\d{9}$/, {
        message: 'Enter a valid 10-digit mobile number',
      }),

    panNumber: z
      .string()
      .trim()
      .min(1, { message: 'PAN number is required' })
      .regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, {
        message: 'Enter a valid PAN number (e.g., ABCDE1234F)',
      })
      .transform((val) => val.toUpperCase()),

    aadhaarNumber: z
      .string()
      .trim()
      .min(1, { message: 'Aadhaar number is required' })
      .regex(/^[2-9]\d{11}$/, {
        message: 'Enter a valid 12-digit Aadhaar number',
      }),

    address: z
      .string()
      .trim()
      .min(1, { message: 'Address is required' })
      .min(10, {
        message: 'Address must be at least 10 characters',
      })
      .max(500, {
        message: 'Address cannot exceed 500 characters',
      }),

    city: z
      .string()
      .trim()
      .min(1, { message: 'City name is required' })
      .min(3, {
        message: 'City name must be at least 3 characters',
      })
      .max(50, {
        message: 'City name cannot exceed 50 characters',
      }),

    pinCode: z
      .string()
      .trim()
      .min(1, { message: 'PIN code is required' })
      .regex(/^[1-9]\d{5}$/, {
        message: 'Enter a valid 6-digit PIN code',
      }),

    maritalStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed'], {
      required_error: 'Marital status is required',
    }),
  })
  .superRefine((data, ctx) => {
    const dob = new Date(data.dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age < 21) {
      ctx.addIssue({
        path: ['dateOfBirth'],
        message: 'You must be at least 21 years old',
        code: 'custom',
      });
    }
  });
