import { FileText, DollarSign, Calendar } from 'lucide-react';
import { Percent, TrendingUp, AlertCircle } from 'lucide-react';

function LoanDetails() {
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
          ].map((loan) => (
            <label
              key={loan}
              className="multi-button bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50 gap-2"
            >
              <input type="radio" name="loanType" className="peer sr-only" />
              <div className="text-center">
                <p className="text-sm font-bold text-slate-900">{loan}</p>
              </div>
            </label>
          ))}
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
              type="number"
              placeholder="2,000,000"
              className="input-field focus:border-blue-500"
            />
          </div>

          <div>
            <label className="input-label">
              Loan Tenure (Months) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="24"
              className="input-field focus:border-blue-500"
            />
          </div>

          <div>
            <label className="input-label">
              Expected Interest Rate (% p.a.)
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="8.5"
                step="0.1"
                className="input-field focus:border-blue-500"
              />
              <Percent className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="input-label">Preferred Disbursement Date</label>
            <input type="date" className="input-field focus:border-blue-500" />
          </div>
        </div>

        {/* EMI Calculator */}
        <div className="mt-8 p-6 bg-indigo-50 border-2 border-blue-300 rounded-xl">
          <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Estimated EMI Breakdown
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="input-label">Monthly EMI</p>
              <p className="text-2xl font-bold text-blue-600">₹18,444</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="input-label">Total Interest</p>
              <p className="text-2xl font-bold text-blue-600">₹24,26,560</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="input-label">Total Payable</p>
              <p className="text-2xl font-bold text-orange-600">₹44,26,560</p>
            </div>
          </div>
        </div>
      </div>

      {/* Loan Purpose */}
      <div className="main-section border-blue-200">
        <h3 className="section-header mb-5">
          Purpose of Loan <span className="text-red-500">*</span>
        </h3>
        <textarea
          rows={4}
          placeholder="Please describe the purpose for which you need this loan..."
          className="input-field focus:border-blue-500 resize-none"
        />
        <p className="text-xs text-slate-500 mt-2">
          Minimum 50 characters required
        </p>
      </div>

      {/* Affordability Check */}
      <div className="main-section border-amber-200">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="text-lg font-bold text-amber-900 mb-3">
              Affordability Assessment
            </h4>
            <div className="space-y-3">
              <div className="afford-one-section border-amber-200">
                <span className="afford-one-title">Monthly Income</span>
                <span className="text-lg font-bold text-gray-900">₹70,000</span>
              </div>
              <div className="afford-one-section border-amber-200">
                <span className="text-sm font-semibold text-slate-700">
                  Existing EMI
                </span>
                <span className="text-lg font-bold text-red-600">₹15,000</span>
              </div>
              <div className="afford-one-section border-amber-200">
                <span className="afford-one-title">Proposed EMI</span>
                <span className="text-lg font-bold text-blue-600">₹18,444</span>
              </div>
              <div className="afford-one-section border-green-300">
                <span className="afford-one-title">EMI / Income Ratio</span>
                <span className="text-lg font-bold text-green-700">44.6%</span>
              </div>
            </div>
            <p className="text-sm text-amber-800 mt-4">
              ✓ Your EMI ratio is within acceptable limits (below 50%)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanDetails;
