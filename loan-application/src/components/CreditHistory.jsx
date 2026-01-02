import { History, CheckCircle, Plus, X } from 'lucide-react';
import { XCircle, TrendingUp, CreditCard } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import ErrorMsg from '../utils/ErrorMsg';

function CreditHistory() {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'creditHistory.existingLoans',
  });

  const hasLoans = watch('creditHistory.hasLoans');
  const totalMonthlyIncome = watch('income.incomeSources');

  const totalEMI = fields.reduce((curr, _, index) => {
    const emi = watch(`creditHistory.existingLoans.${index}.monthlyEmi`);
    return curr + Number(emi) || 0;
  }, 0);

  const monthlyIncome =
    totalMonthlyIncome?.reduce((prev, curr) => {
      return prev + (Number(curr.annualIncome) || 0) / 12;
    }, 0) || 0;

  const emiRatio =
    monthlyIncome > 0 ? ((totalEMI / monthlyIncome) * 100).toFixed(1) : 0;

  return (
    <section className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="icon-bg bg-purple-600">
          <History className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Credit History Declaration
          </h2>
          <p className="text-slate-600 mt-1">
            Your credit score and existing loan obligations
          </p>
        </div>
      </div>

      <div className="main-section border-purple-100">
        <h3 className="section-header mb-5">
          <TrendingUp className="w-5 h-5 text-purple-600" />
          Credit Score Information
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="input-label">
              Credit Score (CIBIL) <span className="text-red-500">*</span>
            </label>
            <input
              {...register('creditHistory.creditScore')}
              type="number"
              placeholder="750"
              min="300"
              max="900"
              className="input-field focus:border-purple-500"
            />
            {errors?.creditHistory?.creditScore && (
              <ErrorMsg err={errors.creditHistory.creditScore.message} />
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">
              Credit Score Date <span className="text-red-500">*</span>
            </label>
            <input
              {...register('creditHistory.creditScoreDate')}
              type="date"
              className="input-field focus:border-purple-500"
            />
            {errors?.creditHistory?.creditScoreDate && (
              <ErrorMsg err={errors.creditHistory.creditScoreDate.message} />
            )}
          </div>
        </div>
      </div>

      <div className="main-section border-purple-100">
        <h3 className="section-header mb-5">
          <CreditCard className="w-5 h-5 text-purple-600" />
          Existing Loans & Credit
        </h3>

        <div className="mb-6">
          <label className="input-label">
            Do you have any existing loans or credit cards?
            <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label
              className={`multi-button bg-white hover:border-purple-400 hover:bg-purple-50 gap-2 font-bold ${
                hasLoans === 'Yes'
                  ? 'border-purple-400 bg-purple-50 text-purple-700'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              <input
                {...register('creditHistory.hasLoans')}
                type="radio"
                value="Yes"
                className="peer sr-only"
              />
              <CheckCircle className="w-5 h-5" />
              <span>Yes</span>
            </label>
            <label
              className={`multi-button bg-white hover:border-purple-400 hover:bg-purple-50 gap-2 font-bold ${
                hasLoans === 'No'
                  ? 'border-purple-400 bg-purple-50 text-purple-700'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              <input
                {...register('creditHistory.hasLoans')}
                type="radio"
                value="No"
                className="peer sr-only"
              />
              <XCircle className="w-5 h-5" />
              <span>No</span>
            </label>
          </div>
          {errors?.creditHistory?.hasLoans && (
            <ErrorMsg err={errors.creditHistory.hasLoans.message} />
          )}
        </div>

        {hasLoans === 'Yes' && (
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="p-6 border-2 border-dashed border-purple-200 rounded-xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold">Loan #{index + 1}</h4>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="x-button"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="input-label">
                      Loan Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register(
                        `creditHistory.existingLoans.${index}.loanType`
                      )}
                      className="input-field focus:border-purple-500"
                    >
                      <option value={''}>Select loan type</option>
                      <option value={'homeLoan'}>Home Loan</option>
                      <option value={'carLoan'}>Car Loan</option>
                      <option value={'personalLoan'}>Personal Loan</option>
                      <option value={'creditCard'}>Credit Card</option>
                      <option value={'educationLoan'}>Education Loan</option>
                    </select>
                    {errors?.creditHistory?.existingLoans?.[index]
                      ?.loanType && (
                      <ErrorMsg
                        err={
                          errors.creditHistory.existingLoans[index].loanType
                            .message
                        }
                      />
                    )}
                  </div>

                  <div>
                    <label className="input-label">
                      Outstanding Amount (₹){' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register(
                        `creditHistory.existingLoans.${index}.outstandingAmount`
                      )}
                      type="number"
                      placeholder="500,000"
                      className="input-field focus:border-purple-500"
                    />
                    {errors?.creditHistory?.existingLoans?.[index]
                      ?.outstandingAmount && (
                      <ErrorMsg
                        err={
                          errors.creditHistory.existingLoans[index]
                            .outstandingAmount.message
                        }
                      />
                    )}
                  </div>

                  <div>
                    <label className="input-label">
                      Monthly EMI (₹) <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register(
                        `creditHistory.existingLoans.${index}.monthlyEmi`
                      )}
                      type="number"
                      placeholder="15,000"
                      className="input-field focus:border-purple-500"
                    />
                    {errors?.creditHistory?.existingLoans?.[index]
                      ?.monthlyEmi && (
                      <ErrorMsg
                        err={
                          errors.creditHistory.existingLoans[index].monthlyEmi
                            .message
                        }
                      />
                    )}
                  </div>

                  <div>
                    <label className="input-label">
                      Lender Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register(
                        `creditHistory.existingLoans.${index}.lenderName`
                      )}
                      type="text"
                      placeholder="HDFC Bank"
                      className="input-field focus:border-purple-500"
                    />
                    {errors?.creditHistory?.existingLoans?.[index]
                      ?.lenderName && (
                      <ErrorMsg
                        err={
                          errors.creditHistory.existingLoans[index].lenderName
                            .message
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-xl font-bold active:scale-95"
                onClick={() =>
                  append({
                    loanType: '',
                    outstandingAmount: '',
                    monthlyEmi: '',
                    lenderName: '',
                  })
                }
              >
                <Plus className="w-4 h-4" />
                Add Loan
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-orange-50 border-2 border-amber-200 rounded-2xl p-6">
        <h4 className="text-lg font-bold text-amber-800 mb-1">
          EMI to Income Ratio Check
        </h4>
        <p className="text-sm font-semibold text-amber-700 mb-4">
          Your total EMI should not exceed 50% of your monthly income
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl border border-amber-200">
            <p className="text-xs font-bold text-slate-600 mb-1">
              Total Monthly EMI
            </p>
            <p className="text-2xl font-bold text-slate-900">₹{totalEMI}</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-amber-200">
            <p className="text-xs font-bold text-slate-600 mb-1">EMI Ratio</p>
            <p className="text-2xl font-bold text-green-600">{emiRatio}%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreditHistory;
