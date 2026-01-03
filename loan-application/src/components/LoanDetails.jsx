import { FileText, DollarSign } from 'lucide-react';
import { Percent, TrendingUp, AlertCircle } from 'lucide-react';

import { useFormContext } from 'react-hook-form';

import ErrorMsg from '../utils/ErrorMsg';

function LoanDetails() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedLoanType = watch('loanDetails.loanType');
  const watchLoanAmount = watch('loanDetails.loanAmount');
  const watchExpectInterest = watch('loanDetails.expectInterest');
  const watchLoanTenureMonths = watch('loanDetails.loanTenureMonths');

  const calculateEMI = () => {
    const p = parseFloat(watchLoanAmount);
    const r = parseFloat(watchExpectInterest) / 100 / 12;
    const n = parseFloat(watchLoanTenureMonths);

    if (!p || !r || !n || isNaN(p) || isNaN(r) || isNaN(n)) {
      return {
        monthlyEMI: 0,
        totalAmount: 0,
        totalInterest: 0,
      };
    }

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - p;

    return {
      monthlyEMI: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
    };
  };

  const { monthlyEMI, totalAmount, totalInterest } = calculateEMI();

  return (
    <section className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="icon-bg bg-blue-600">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Loan Details</h2>
          <p className="text-slate-600 mt-1">Specify your loan requirements</p>
        </div>
      </div>

      {/* Loan Type */}
      <div className="main-section border-blue-200">
        <label className="section-header mb-5">
          Loan Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Home Loan',
            'Personal Loan',
            'Car Loan',
            'Business Loan',
            'Education Loan',
            'Gold Loan',
          ].map((loan) => {
            const isSelected = selectedLoanType === loan;
            return (
              <label
                key={loan}
                className={`multi-button bg-white hover:border-blue-400 hover:bg-blue-50 gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-br from-blue-50 to-blue-50 border-blue-400'
                    : 'border-slate-200 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  value={loan}
                  className="peer sr-only"
                  {...register('loanDetails.loanType')}
                />
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-900">{loan}</p>
                </div>
              </label>
            );
          })}
          {errors?.loanDetails?.loanType && (
            <ErrorMsg err={errors.loanDetails.loanType.message} />
          )}
        </div>
      </div>

      {/* Loan Amount */}
      <div className="main-section border-blue-200">
        <h3 className="section-header mb-5">
          <DollarSign className="w-5 h-5 text-blue-600" />
          Loan Amount & Duration
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="input-label">
              Requested Loan Amount (₹) <span className="text-red-500">*</span>
            </label>
            <input
              {...register('loanDetails.loanAmount')}
              type="number"
              placeholder="2,000,000"
              className="input-field focus:border-blue-500"
            />
            {errors?.loanDetails?.loanAmount && (
              <ErrorMsg err={errors.loanDetails.loanAmount.message} />
            )}
          </div>

          <div>
            <label className="input-label">
              Loan Tenure (Months) <span className="text-red-500">*</span>
            </label>
            <input
              {...register('loanDetails.loanTenureMonths')}
              type="number"
              placeholder="24"
              className="input-field focus:border-blue-500"
            />
            {errors?.loanDetails?.loanTenureMonths && (
              <ErrorMsg err={errors.loanDetails.loanTenureMonths.message} />
            )}
          </div>

          <div>
            <label className="input-label">
              Expected Interest Rate (% p.a.)
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                {...register('loanDetails.expectInterest')}
                type="number"
                placeholder="8.5"
                step="0.1"
                className="input-field focus:border-blue-500"
              />
              <Percent className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              {errors?.loanDetails?.expectInterest && (
                <ErrorMsg err={errors.loanDetails.expectInterest.message} />
              )}
            </div>
          </div>

          <div>
            <label className="input-label">Preferred Disbursement Date</label>
            <input
              {...register('loanDetails.prefDisbursementDate')}
              type="date"
              className="input-field focus:border-blue-500"
            />
            {errors?.loanDetails?.prefDisbursementDate && (
              <ErrorMsg err={errors.loanDetails.prefDisbursementDate.message} />
            )}
          </div>
        </div>

        {/* EMI Calculator */}
        {watchLoanAmount && watchExpectInterest && watchLoanTenureMonths && (
          <div className="mt-8 p-6 bg-indigo-50 border-2 border-blue-300 rounded-xl">
            <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Estimated EMI Breakdown
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="input-label">Monthly EMI</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{monthlyEMI.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="input-label">Total Interest</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{totalInterest.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="input-label">Total Payable</p>
                <p className="text-2xl font-bold text-orange-600">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Loan Purpose */}
      <div className="main-section border-blue-200">
        <h3 className="section-header mb-5">
          Purpose of Loan <span className="text-red-500">*</span>
        </h3>
        <textarea
          rows={4}
          placeholder="Describe the purpose for which you need this loan..."
          className="input-field focus:border-blue-500 resize-none"
          {...register('loanDetails.loanPurpose')}
        />
        <div className="flex items-center justify-between">
          <div>
            {errors?.loanDetails?.loanPurpose && (
              <ErrorMsg err={errors.loanDetails.loanPurpose.message} />
            )}
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Minimum 50 characters required
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoanDetails;
