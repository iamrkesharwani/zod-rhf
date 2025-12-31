import { Scale, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { Home, Car, Wallet, DollarSign, XCircle } from 'lucide-react';

function AssetsLiabilities() {
  return (
    <section className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="icon-bg bg-emerald-600">
          <Scale className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Assets & Liabilities
          </h2>
          <p className="text-slate-600 mt-1">
            Complete financial position assessment
          </p>
        </div>
      </div>

      <div className="mb-6">
        <label className="input-label">
          Do you wish to add assets or liabilities?
          <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-4">
          <label className="asset-liab-no">
            <input type="radio" name="assetLiabNo" className="peer sr-only" />
            <TrendingUp className="w-5 h-5" />
            <span>Assets</span>
          </label>
          <label className="asset-liab-no">
            <input type="radio" name="assetLiabNo" className="peer sr-only" />
            <TrendingDown className="w-5 h-5" />
            <span>Liabilities</span>
          </label>
          <label className="asset-liab-no">
            <input type="radio" name="assetLiabNo" className="peer sr-only" />
            <XCircle className="w-5 h-5" />
            <span>No</span>
          </label>
        </div>
      </div>

      {/* Assets */}
      <div className="main-section border-emerald-200">
        <div className="mb-6">
          <h3 className="section-header">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Assets
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="asset-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="asset-icon bg-green-100">
                <Home className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="section-header">Real Estate</h4>
              </div>
            </div>
            <div className="grid gap-3">
              <div>
                <label className="input-label">Property Type</label>
                <select className="input-field focus:border-emerald-500">
                  <option value={''}>Select type</option>
                  <option value={'residential'}>Residential</option>
                  <option value={'commercial'}>Commercial</option>
                  <option value={'land'}>Land</option>
                </select>
              </div>
              <div>
                <label className="input-label">Current Value (₹)</label>
                <input
                  type="number"
                  placeholder="5,000,000"
                  className="input-field focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="asset-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="asset-icon bg-blue-100">
                <Car className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="section-header">Vehicles</h4>
              </div>
            </div>
            <div className="grid gap-3">
              <div>
                <label className="input-label">Vehicle Type</label>
                <input
                  type="text"
                  placeholder="e.g., Honda City 2020"
                  className="input-field focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="input-label">Current Value (₹)</label>
                <input
                  type="number"
                  placeholder="800,000"
                  className="input-field focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="asset-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="asset-icon bg-purple-100">
                <Wallet className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="section-header">Bank Deposits</h4>
              </div>
            </div>
            <div className="grid gap-3">
              <div>
                <label className="input-label">Deposit Type</label>
                <select className="input-field focus:border-emerald-500">
                  <option>Select type</option>
                  <option>Savings Account</option>
                  <option>Fixed Deposit</option>
                  <option>Recurring Deposit</option>
                </select>
              </div>
              <div>
                <label className="input-label">Total Amount (₹)</label>
                <input
                  type="number"
                  placeholder="1,500,000"
                  className="input-field focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="asset-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="asset-icon bg-emerald-100">
                <DollarSign className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="section-header">Investments</h4>
              </div>
            </div>
            <div className="grid gap-3">
              <div>
                <label className="input-label">Investment Type</label>
                <select className="input-field focus:border-emerald-500">
                  <option>Select type</option>
                  <option>Mutual Funds</option>
                  <option>Stocks</option>
                  <option>Bonds</option>
                  <option>Gold</option>
                </select>
              </div>
              <div>
                <label className="input-label">Current Value (₹)</label>
                <input
                  type="number"
                  placeholder="2,000,000"
                  className="input-field focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-emerald-50 border-2 border-emerald-300 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-green-800">Total Assets</p>
              <p className="text-xs text-green-700 mt-1">Sum of all assets</p>
            </div>
            <p className="text-4xl font-bold text-green-700">₹93,00,000</p>
          </div>
        </div>
      </div>

      {/* Liabilities */}
      <div className="main-section border-red-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="section-header">
            <TrendingDown className="w-5 h-5 text-red-600" />
            Liabilities
          </h3>
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-3 bg-red-600 text-white rounded-xl font-bold active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add Liability
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="liability-section">
            <h4 className="section-header mb-1">Outstanding Loan #1</h4>
            <div className="grid gap-3">
              <div>
                <label className="input-label">Loan Type</label>
                <input
                  type="text"
                  placeholder="Home Loan"
                  className="input-field focus:border-red-500"
                />
              </div>
              <div>
                <label className="input-label">Outstanding Amount (₹)</label>
                <input
                  type="number"
                  placeholder="2,500,000"
                  className="input-field focus:border-red-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-red-50 border-2 border-red-300 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-red-800">Total Liabilities</p>
              <p className="text-xs text-red-700 mt-1">
                Sum of all liabilities
              </p>
            </div>
            <p className="text-4xl font-bold text-red-700">₹25,00,000</p>
          </div>
        </div>
      </div>

      {/* Net Worth */}
      <div className="main-section border-indigo-200">
        <h3 className="text-2xl font-bold mb-6 text-center text-emerald-600">
          Net Worth Analysis
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center text-green-600">
            <p className="text-sm font-semibold mb-2">Total Assets</p>
            <p className="text-3xl font-bold">₹93,00,000</p>
          </div>
          <div className="text-center text-red-600">
            <p className="text-sm font-semibold mb-2">Total Liabilities</p>
            <p className="text-3xl font-bold">₹25,00,000</p>
          </div>
          <div className="text-center text-emerald-600">
            <p className="text-sm font-semibold mb-2">Net Worth</p>
            <p className="text-3xl font-bold">₹68,00,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssetsLiabilities;
