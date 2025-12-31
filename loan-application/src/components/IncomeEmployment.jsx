import { Briefcase, Plus, X, DollarSign } from 'lucide-react';
import { Building2, TrendingUp } from 'lucide-react';

function IncomeEmployment() {
  return (
    <section className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="icon-bg bg-indigo-600">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Income & Employment
          </h2>
          <p className="text-slate-600 mt-1">
            Your income sources and employment details
          </p>
        </div>
      </div>

      <div className="mb-8">
        <label className="input-label">
          Employment Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Salaried', 'Self-Employed', 'Business Owner'].map((type) => (
            <label
              key={type}
              className="multi-button bg-white border-slate-200 text-slate-700 hover:border-indigo-400 hover:bg-indigo-50 gap-2"
            >
              <input
                type="radio"
                name="employment"
                value={type}
                className="peer sr-only"
              />
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-bold select-none">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="main-section border-slate-200">
        <h3 className="section-header mb-6">
          <Building2 className="w-5 h-5 text-indigo-600" />
          Salaried Employment Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="input-label">
              Employer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ABC Corporation Ltd."
              className="input-field focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="input-label">
              Designation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Senior Manager"
              className="input-field focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="input-label">
              Date of Joining <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="input-field focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="input-label">Employment Duration</label>
            <input
              type="text"
              placeholder="Auto filled"
              className="input-field cursor-not-allowed bg-slate-100"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 border-2 border-indigo-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="section-header">
            <DollarSign className="w-5 h-5 text-green-600" />
            Income Sources
          </h3>

          <button
            type="button"
            className="flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-xl font-bold active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add Income Source
          </button>
        </div>

        <div className="p-6 border-2 border-slate-200 rounded-xl mb-4">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h4 className="section-header">Income Source #1</h4>
            </div>

            <button type="button" className="x-button">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="input-label">
                Income Type <span className="text-red-500">*</span>
              </label>
              <select className="input-field focus:border-indigo-500">
                <option value={''}>Select income type</option>
                <option value={'salary'}>Salary</option>
                <option value={'businessIncome'}>Business Income</option>
                <option value={'rentalIncome'}>Rental Income</option>
                <option value={'investmentReturns'}>Investment Returns</option>
                <option value={'other'}>Other</option>
              </select>
            </div>

            <div>
              <label className="input-label">
                <TrendingUp className="w-4 h-4 text-green-600" />
                Monthly Income (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="75,000"
                className="input-field focus:border-indigo-500"
              />
            </div>

            <div className="col-span-2">
              <label className="input-label">Proof of Income</label>
              <input
                type="text"
                placeholder="e.g., Latest 3 months salary slips"
                className="input-field focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-emerald-50 border-2 border-emerald-300 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-bold text-emerald-700">
                Total Monthly Income
              </p>
              <p className="text-xs text-emerald-600 mt-1">
                Sum of all income sources
              </p>
            </div>
            <p className="text-3xl font-bold text-emerald-600">₹75,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IncomeEmployment;
