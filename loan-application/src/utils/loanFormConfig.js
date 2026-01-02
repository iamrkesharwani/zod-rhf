import { zodResolver } from '@hookform/resolvers/zod';
import { loanSchema } from '../schema/loanSchema';

export const loanFormConfig = {
  resolver: zodResolver(loanSchema),
  mode: 'onChange',
  defaultValues: {
    applicantDetails: {
      fullName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      panNumber: '',
      aadhaarNumber: '',
      address: '',
      city: '',
      pinCode: '',
      maritalStatus: '',
    },
    income: {
      empType: '',
      employerName: '',
      designation: '',
      dateOfJoining: '',
      incomeSources: [
        {
          incomeType: '',
          annualIncome: '',
          proofOfIncome: '',
        },
      ],
    },
    creditHistory: {
      creditScore: '',
      creditScoreDate: '',
      hasLoans: '',
      existingLoans: [
        { loanType: '', outstandingAmount: '', monthlyEmi: '', lenderName: '' },
      ],
    },
    assetLiability: {
      hasAssetsOrLiabilities: '',
      realEstate: [],
      vehicles: [],
      bankDeposits: [],
      investments: [],
      loans: [],
      creditCards: [],
    },
    loanDetails: {
      loanType: '',
      loanAmount: '',
      loanTenureYears: '',
      expectInterest: '',
      prefDisbursementDate: '',
      loanPurpose: '',
    },
    document: {
      bankStatements: [],
      panCard: '',
      aadhaarCard: '',
      incomeProofs: [],
      additionalDocs: [],
    },
    guarantor: {
      haveAGuarantor: '',
      guarName: '',
      relWithApplicant: '',
      guarPhone: '',
      guarEmail: '',
      guarAddress: '',
      guarEmployerName: '',
      guarDesignation: '',
      guarMonthlyIncome: '',
      guarYearEmp: '',
      guarCreditScore: '',
      guarConsentSchema: false,
    },
    summaryConsent: {
      confirmAccuracy: false,
      authorizeVerification: false,
      agreeToTerms: false,
    },
  },
};
