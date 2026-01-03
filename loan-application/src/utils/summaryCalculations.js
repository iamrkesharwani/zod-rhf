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
