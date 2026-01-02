import { useState } from 'react';

import { Scale, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { XCircle, CircleCheckBig, X } from 'lucide-react';

import { useFormContext } from 'react-hook-form';
import { useAssetsLiabilityConfig } from '../utils/useAssetsLiabilityConfig';
import ErrorMsg from '../utils/ErrorMsg';

function AssetsLiabilities() {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const [selectedAssetTypes, setSelectedAssetTypes] = useState([]);
  const [selectedLiabilityTypes, setSelectedLiabilityTypes] = useState([]);

  const hasAssetsOrLiabilities = watch('assetLiability.hasAssetsOrLiabilities');
  const { assetTypes, liabilityTypes } = useAssetsLiabilityConfig(control);

  const toggleAssetType = (typeId) => {
    if (selectedAssetTypes.includes(typeId)) {
      setSelectedAssetTypes(selectedAssetTypes.filter((id) => id !== typeId));
    } else {
      setSelectedAssetTypes([...selectedAssetTypes, typeId]);
      const assetType = assetTypes.find((t) => t.id === typeId);
      if (assetType && assetType.fields.length === 0) {
        assetType.append();
      }
    }
  };

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
        <div className="grid grid-cols-2 gap-4">
          <label
            className={`multi-button bg-white border-slate-200 text-slate-700 hover:border-green-400 hover:bg-green-50 gap-2 font-bold ${
              hasAssetsOrLiabilities === 'Yes'
                ? 'border-green-400 bg-green-50 text-green-700'
                : ''
            }`}
          >
            <input
              {...register('assetLiability.hasAssetsOrLiabilities')}
              type="radio"
              value="Yes"
              className="peer sr-only"
            />
            <CircleCheckBig className="w-5 h-5" />
            <span>Yes</span>
          </label>

          <label
            className={`multi-button bg-white border-slate-200 text-slate-700 hover:border-red-400 hover:bg-red-50 gap-2 font-bold ${
              hasAssetsOrLiabilities === 'No'
                ? 'border-red-400 bg-red-50 text-red-700'
                : ''
            }`}
          >
            <input
              {...register('assetLiability.hasAssetsOrLiabilities')}
              type="radio"
              value="No"
              className="peer sr-only"
            />
            <XCircle className="w-5 h-5" />
            <span>No</span>
          </label>
        </div>
        {errors?.assetLiability?.hasAssetsOrLiabilities && (
          <ErrorMsg
            err={errors.assetLiability.hasAssetsOrLiabilities.message}
          />
        )}
      </div>

      {hasAssetsOrLiabilities === 'Yes' && (
        <>
          {/* Assets */}
          <div className="main-section border-emerald-200">
            <div className="mb-6">
              <h3 className="section-header">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Assets
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Select asset types to add
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              {assetTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedAssetTypes.includes(type.id);
                return (
                  <button
                    onClick={() => toggleAssetType(type.id)}
                    type="button"
                    key={type.id}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? `border-${type.color}-400 bg-${type.color}-50`
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className={`asset-icon bg-${type.color}-100`}>
                      <Icon className={`w-5 h-5 text-${type.color}-600`} />
                    </div>
                    <span className="font-semibold text-sm">{type.label}</span>
                  </button>
                );
              })}
            </div>

            {selectedAssetTypes.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedAssetTypes.includes('realEstate') &&
                  assetTypes[0].fields.map((field, index) => {
                    const Icon = assetTypes[0].icon;

                    return (
                      <div key={field.id} className="asset-section">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="asset-icon bg-green-100">
                              <Icon className="w-5 h-5 text-green-600" />
                            </div>
                            <h4 className="section-header">
                              Real Estate #{index + 1}
                            </h4>
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              className="plus-button"
                              onClick={() => assetTypes[0].append()}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              className="x-button"
                              onClick={() => assetTypes[0].remove(index)}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <div>
                            <label className="input-label">Property Type</label>
                            <select
                              {...register(
                                `assetLiability.realEstate.${index}.propertyType`
                              )}
                              className="input-field focus:border-emerald-500"
                            >
                              <option value="">Select type</option>
                              <option value="residential">Residential</option>
                              <option value="commercial">Commercial</option>
                              <option value="land">Land</option>
                            </select>
                            {errors?.assetLiability?.realEstate?.[index]
                              ?.propertyType && (
                              <ErrorMsg
                                err={
                                  errors.assetLiability.realEstate[index]
                                    .propertyType
                                }
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}

            <div className="p-6 bg-emerald-50 border-2 border-emerald-300 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-green-800">Total Assets</p>
                  <p className="text-xs text-green-700 mt-1">
                    Sum of all assets
                  </p>
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
                    <label className="input-label">
                      Outstanding Amount (₹)
                    </label>
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
        </>
      )}

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
