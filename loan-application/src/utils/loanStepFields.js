export const loanStepFields = [
  [
    'applicantDetails.fullName',
    'applicantDetails.dateOfBirth',
    'applicantDetails.email',
    'applicantDetails.phone',
    'applicantDetails.panNumber',
    'applicantDetails.aadhaarNumber',
    'applicantDetails.address',
    'applicantDetails.city',
    'applicantDetails.pinCode',
    'applicantDetails.maritalStatus',
  ],

  [
    'income.empType',
    'income.employerName',
    'income.designation',
    'income.dateOfJoining',
    'income.incomeSources',
  ],

  [
    'creditHistory.creditScore',
    'creditHistory.creditScoreDate',
    'creditHistory.hasLoans',
    'creditHistory.existingLoans',
  ],

  ['assetLiability.hasAssetsOrLiabilities'],

  [
    'loanDetails.loanType',
    'loanDetails.loanAmount',
    'loanDetails.loanTenureYears',
    'loanDetails.expectInterest',
    'loanDetails.prefDisbursementDate',
    'loanDetails.loanPurpose',
  ],

  [
    'document.bankStatements',
    'document.panCard',
    'document.aadhaarCard',
    'document.incomeProofs',
    'document.additionalDocs',
  ],

  [
    'guarantor.haveAGuarantor',
    'guarantor.guarName',
    'guarantor.relWithApplicant',
    'guarantor.guarPhone',
    'guarantor.guarEmail',
    'guarantor.guarAddress',
    'guarantor.guarEmployerName',
    'guarantor.guarDesignation',
    'guarantor.guarMonthlyIncome',
    'guarantor.guarYearEmp',
    'guarantor.guarCreditScore',
    'guarantor.guarConsentSchema',
  ],
];
