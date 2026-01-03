import { z } from 'zod';

const realEstateSchema = z.object({
  propertyType: z.string().min(1, { message: 'Property type is required' }),
  currentValue: z
    .string()
    .min(1, { message: 'Current value is required' })
    .refine((val) => Number(val) > 150000, {
      message: 'Value should be ₹1,50,000',
    }),
});

const vehicleSchema = z.object({
  vehicleType: z.string().min(1, { message: 'Vehicle type is required' }),
  currentValue: z
    .string()
    .min(1, { message: 'Current value is required' })
    .refine((val) => Number(val) > 10000, {
      message: 'Value should be at least ₹10,000',
    }),
});

const bankDepositSchema = z.object({
  depositType: z.string().min(1, 'Deposit type is required'),
  currentValue: z
    .string()
    .min(1, 'Total amount is required')
    .refine((val) => Number(val) > 1000, {
      message: 'Value should be at least ₹1,000',
    }),
});

const investmentSchema = z.object({
  investmentType: z.string().min(1, 'Investment type is required'),
  currentValue: z
    .string()
    .min(1, 'Current value is required')
    .refine((val) => Number(val) > 1000, {
      message: 'Value should be at least ₹1,000',
    }),
});

const loanLiabilitySchema = z.object({
  loanType: z.string().min(1, 'Loan type is required'),
  outstandingAmount: z
    .string()
    .min(1, 'Outstanding amount is required')
    .refine((val) => Number(val) > 1000, {
      message: 'Value should be at least ₹1,000',
    }),
});

const creditCardLiabilitySchema = z.object({
  creditCardType: z.string().min(1, 'Credit card type is required'),
  outstandingAmount: z
    .string()
    .min(1, 'Outstanding amount is required')
    .refine((val) => Number(val) > 1000, {
      message: 'Value should be at least ₹1,000',
    }),
});

const baseSchema = z.object({
  hasAssetsOrLiabilities: z.string().min(1, {
    message: 'Please specify whether you have assets or liabilities?',
  }),
});

const noAssetsSchema = z.object({
  hasAssetsOrLiabilities: z.literal('No'),
  realEstate: z.array(realEstateSchema).optional(),
  vehicles: z.array(vehicleSchema).optional(),
  bankDeposits: z.array(bankDepositSchema).optional(),
  investments: z.array(investmentSchema).optional(),
  loans: z.array(loanLiabilitySchema).optional(),
  creditCards: z.array(creditCardLiabilitySchema).optional(),
});

const yesAssetsSchema = z
  .object({
    hasAssetsOrLiabilities: z.literal('Yes'),
    realEstate: z.array(realEstateSchema).optional(),
    vehicles: z.array(vehicleSchema).optional(),
    bankDeposits: z.array(bankDepositSchema).optional(),
    investments: z.array(investmentSchema).optional(),
    loans: z.array(loanLiabilitySchema).optional(),
    creditCards: z.array(creditCardLiabilitySchema).optional(),
  })
  .refine(
    (data) => {
      const hasAssets =
        (data.realEstate && data.realEstate.length > 0) ||
        (data.vehicles && data.vehicles.length > 0) ||
        (data.bankDeposits && data.bankDeposits.length > 0) ||
        (data.investments && data.investments.length > 0);

      const hasLiabilities =
        (data.loans && data.loans.length > 0) ||
        (data.creditCards && data.creditCards.length > 0);

      return hasAssets || hasLiabilities;
    },
    {
      message: 'Add at least one asset or liability',
      path: ['root'],
    }
  );

export const assetLiabilitySchema = baseSchema.and(
  z.discriminatedUnion('hasAssetsOrLiabilities', [
    noAssetsSchema,
    yesAssetsSchema,
  ])
);
