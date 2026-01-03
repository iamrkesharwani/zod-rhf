import { useFormContext } from 'react-hook-form';

export const useCalculations = () => {
  const { watch } = useFormContext();

  const calculateTotalMonthlyIncome = () => {
    const incomeSources = watch('income.incomeSources') || [];
    const total = incomeSources.reduce((total, source) => {
      const value = parseFloat(source.annualIncome) || 0;
      return total + value;
    }, 0);

    return total / 12;
  };

  const totalMonthlyIncome = calculateTotalMonthlyIncome();

  return {
    totalMonthlyIncome: isNaN(totalMonthlyIncome) ? 0 : totalMonthlyIncome,
  };
};
