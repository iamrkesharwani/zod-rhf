import { useFieldArray } from 'react-hook-form';
import { Home, Car, Wallet, DollarSign } from 'lucide-react';
import { CreditCard, Landmark } from 'lucide-react';

export const useAssetsLiabilityConfig = (control) => {
  const realEstate = useFieldArray({
    control,
    name: 'assetLiability.realEstate',
  });
  const vehicles = useFieldArray({
    control,
    name: 'assetLiability.vehicles',
  });
  const bankDeposits = useFieldArray({
    control,
    name: 'assetLiability.bankDeposits',
  });
  const investments = useFieldArray({
    control,
    name: 'assetLiability.investments',
  });
  const loans = useFieldArray({
    control,
    name: 'assetLiability.loans',
  });
  const creditCards = useFieldArray({
    control,
    name: 'assetLiability.creditCards',
  });

  const assetTypes = [
    {
      id: 'realEstate',
      label: 'Real Estate',
      icon: Home,
      color: 'green',
      fields: realEstate.fields,
      append: () => realEstate.append({ propertyType: '', currentValue: '' }),
      remove: realEstate.remove,
    },
    {
      id: 'vehicles',
      label: 'Vehicles',
      icon: Car,
      color: 'blue',
      fields: vehicles.fields,
      append: () => vehicles.append({ vehicleType: '', currentValue: '' }),
      remove: vehicles.remove,
    },
    {
      id: 'bankDeposits',
      label: 'Bank Deposits',
      icon: Wallet,
      color: 'purple',
      fields: bankDeposits.fields,
      append: () => bankDeposits.append({ depositType: '', currentValue: '' }),
      remove: bankDeposits.remove,
    },
    {
      id: 'investments',
      label: 'Investments',
      icon: DollarSign,
      color: 'emerald',
      fields: investments.fields,
      append: () =>
        investments.append({ investmentType: '', currentValue: '' }),
      remove: investments.remove,
    },
  ];

  const liabilityTypes = [
    {
      id: 'loans',
      label: 'Loans',
      icon: Landmark,
      color: 'orange',
      fields: loans.fields,
      append: () => loans.append({ loanType: '', outstandingAmount: '' }),
      remove: loans.remove,
    },
    {
      id: 'creditCards',
      label: 'Credit Cards',
      icon: CreditCard,
      color: 'red',
      fields: creditCards.fields,
      append: () =>
        creditCards.append({ creditCardType: '', outstandingAmount: '' }),
      remove: creditCards.remove,
    },
  ];

  return { assetTypes, liabilityTypes };
};
