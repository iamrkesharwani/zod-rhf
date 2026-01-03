export const checkSectionCompletion = (formData) => {
  const sections = {
    applicantDetails: {
      isComplete:
        formData.applicantDetails?.fullName &&
        formData.applicantDetails?.email &&
        formData.applicantDetails?.phone &&
        formData.applicantDetails?.panNumber,
      name: 'Applicant Details',
    },
    income: {
      isComplete:
        formData.income?.empType &&
        formData.income?.incomeSources[0].annualIncome,
      name: 'Income Information',
    },
    creditHistory: {
      isComplete: formData.creditHistory?.creditScore,
      name: 'Credit History',
    },
    assetLiability: {
      isComplete: formData.assetLiability?.hasAssetsOrLiabilities !== '',
      name: 'Assets & Liabilities',
    },
    loanDetails: {
      isComplete:
        formData.loanDetails?.loanAmount &&
        formData.loanDetails?.loanTenureMonths,
      name: 'Loan Details',
    },
    document: {
      isComplete:
        formData.document?.panCard &&
        formData.document?.aadhaarCard &&
        formData.document?.bankStatements?.length > 0,
      name: 'Documents',
    },
  };

  const completedSections = Object.values(sections).filter(
    (s) => s.isComplete
  ).length;
  const totalSections = Object.keys(sections).length;
  const completedPercentage = Math.round(
    (completedSections / totalSections) * 100
  );

  return { sections, completedSections, totalSections, completedPercentage };
};

export const calculateFinancialMetrics = (formData) => {
  const creditScore = parseFloat(formData.creditHistory?.creditScore) || 0;
  const annualIncome =
    parseFloat(formData.income?.incomeSources?.[0].annualIncome) || 0;
  const monthlyIncome = annualIncome / 12;

  // Calculate total monthly EMI
  const existingEmi =
    formData.creditHistory?.existingLoans?.reduce(
      (sum, loan) => sum + (parseFloat(loan.monthlyEmi) || 0),
      0
    ) || 0;

  const loanAmount = parseFloat(formData.loanDetails?.loanAmount) || 0;
  const tenureMonths = parseFloat(formData.loanDetails?.loanTenureMonths) || 1;
  const interestRate = parseFloat(formData.loanDetails?.expectInterest) || 10;

  // EMI calculation
  const monthlyRate = interestRate / 12 / 100;
  const newEmi =
    loanAmount > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1)
      : 0;

  const totalEmi = existingEmi + newEmi;
  const emiToIncomeRatio =
    monthlyIncome > 0 ? ((totalEmi / monthlyIncome) * 100).toFixed(1) : '0.0';

  // Calculate total assets
  const totalAssets =
    (formData.assetLiability?.realEstate?.reduce(
      (sum, asset) => sum + (parseFloat(asset.estimatedValue) || 0),
      0
    ) || 0) +
    (formData.assetLiability?.vehicles?.reduce(
      (sum, asset) => sum + (parseFloat(asset.estimatedValue) || 0),
      0
    ) || 0) +
    (formData.assetLiability?.bankDeposits?.reduce(
      (sum, asset) => sum + (parseFloat(asset.amount) || 0),
      0
    ) || 0);

  const loanToAssetRatio =
    totalAssets > 0 ? ((loanAmount / totalAssets) * 100).toFixed(1) : '0.0';

  // Calculate debt to income
  const totalDebt =
    formData.creditHistory?.existingLoans?.reduce(
      (sum, loan) => sum + (parseFloat(loan.outstandingAmount) || 0),
      0
    ) || 0;
  const debtToIncome =
    annualIncome > 0 ? ((totalDebt / annualIncome) * 100).toFixed(1) : '0.0';

  return { creditScore, emiToIncomeRatio, loanToAssetRatio, debtToIncome };
};
