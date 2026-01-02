import { z } from 'zod';

export const applicantDetailSchema = z.object({
  fullName: z
    .string()
    .trim()
    .nonempty({ message: 'Full name is required' })
    .min(3, {
      message: 'Full name must be at least 3 characters',
    })
    .max(100, {
      message: 'Full name cannot exceed 100 characters',
    }),

  dateOfBirth: z
    .string()
    .min(1, { message: 'Date of birth is required' })
    .refine(
      (val) => {
        const dobTimeStamp = Date.parse(val);
        return !isNaN(dobTimeStamp);
      },
      { message: 'Enter a valid date' }
    )
    .refine(
      (val) => {
        const dob = new Date(val);
        const today = new Date();
        return dob <= today;
      },
      { message: 'Date of birth cannot be in the future' }
    )
    .refine(
      (val) => {
        const dob = new Date(val);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < dob.getDate())
        ) {
          age--;
        }
        return age >= 21;
      },
      { message: 'You must be at least 21 years old' }
    ),

  email: z
    .string()
    .trim()
    .nonempty({ message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' })
    .max(100, {
      message: 'Email cannot exceed 100 characters',
    }),

  phone: z
    .string()
    .trim()
    .nonempty({ message: 'Phone number is required' })
    .regex(/^[6-9]\d{9}$/, {
      message: 'Enter a valid 10-digit mobile number',
    }),

  panNumber: z
    .string()
    .trim()
    .nonempty({ message: 'PAN number is required' })
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/i, {
      message: 'Enter a valid PAN number (e.g., ABCDE1234F)',
    })
    .transform((val) => val.toUpperCase()),

  aadhaarNumber: z
    .string()
    .trim()
    .nonempty({ message: 'Aadhaar number is required' })
    .regex(/^[2-9]\d{11}$/, {
      message: 'Enter a valid 12-digit Aadhaar number',
    }),

  address: z
    .string()
    .trim()
    .nonempty({ message: 'Address is required' })
    .min(10, {
      message: 'Address must be at least 10 characters',
    })
    .max(500, {
      message: 'Address cannot exceed 500 characters',
    }),

  city: z
    .string()
    .trim()
    .nonempty({ message: 'City name is required' })
    .min(3, {
      message: 'City name must be at least 3 characters',
    })
    .max(50, {
      message: 'City name cannot exceed 50 characters',
    }),

  pinCode: z
    .string()
    .trim()
    .nonempty({ message: 'PIN code is required' })
    .regex(/^[1-9]\d{5}$/, {
      message: 'Enter a valid 6-digit PIN code',
    }),

  maritalStatus: z
    .string()
    .min(1, { message: 'Select a marital status to continue' }),
});
