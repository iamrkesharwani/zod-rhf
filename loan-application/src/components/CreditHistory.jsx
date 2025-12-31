import { History, CheckCircle } from 'lucide-react';
import { XCircle, TrendingUp, CreditCard } from 'lucide-react';

function CreditHistory() {
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
              type="number"
              placeholder="750"
              min="300"
              max="900"
              className="input-field focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3">
              Credit Score Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="input-field focus:border-purple-500"
            />
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
            <label className="multi-button bg-white border-slate-200 text-slate-700 hover:border-purple-400 hover:bg-purple-50 gap-2 font-bold">
              <input type="radio" name="hasLoans" className="peer sr-only" />
              <CheckCircle className="w-5 h-5" />
              <span>Yes</span>
            </label>
            <label className="multi-button bg-white border-slate-200 text-slate-700 hover:border-purple-400 hover:bg-purple-50 gap-2 font-bold">
              <input type="radio" name="hasLoans" className="peer sr-only" />
              <XCircle className="w-5 h-5" />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="p-6 border-2 border-dashed border-purple-200 rounded-xl">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="input-label">
                Loan Type <span className="text-red-500">*</span>
              </label>
              <select className="input-field focus:border-purple-500">
                <option value={''}>Select loan type</option>
                <option value={'homeLoan'}>Home Loan</option>
                <option value={'carLoan'}>Car Loan</option>
                <option value={'personalLoan'}>Personal Loan</option>
                <option value={'creditCard'}>Credit Card</option>
                <option value={'educationLoan'}>Education Loan</option>
              </select>
            </div>

            <div>
              <label className="input-label">
                Outstanding Amount (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="500,000"
                className="input-field focus:border-purple-500"
              />
            </div>

            <div>
              <label className="input-label">
                Monthly EMI (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="15,000"
                className="input-field focus:border-purple-500"
              />
            </div>

            <div>
              <label className="input-label">
                Lender Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="HDFC Bank"
                className="input-field focus:border-purple-500"
              />
            </div>
          </div>
        </div>
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
            <p className="text-2xl font-bold text-slate-900">₹15,000</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-amber-200">
            <p className="text-xs font-bold text-slate-600 mb-1">EMI Ratio</p>
            <p className="text-2xl font-bold text-green-600">20%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreditHistory;
