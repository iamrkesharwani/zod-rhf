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

  const toggleLiabilityType = (typeId) => {
    if (selectedLiabilityTypes.includes(typeId)) {
      setSelectedLiabilityTypes(
        selectedLiabilityTypes.filter((id) => id !== typeId)
      );
    } else {
      setSelectedLiabilityTypes([...selectedLiabilityTypes, typeId]);
      const liabilityType = liabilityTypes.find((t) => t.id === typeId);
      if (liabilityType && liabilityType.fields.length === 0) {
        liabilityType.append();
      }
    }
  };

  const colorStyles = {
    green: 'border-green-400 bg-green-50',
    blue: 'border-blue-400 bg-blue-50',
    purple: 'border-purple-400 bg-purple-50',
    emerald: 'border-emerald-400 bg-emerald-50',
    orange: 'border-orange-400 bg-orange-50',
    red: 'border-red-400 bg-red-50',
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
            className={`multi-button hover:border-green-400 hover:bg-green-50 gap-2 font-bold ${
              hasAssetsOrLiabilities === 'Yes'
                ? 'border-green-400 bg-green-50 text-green-700'
                : 'bg-white border-slate-200 text-slate-700'
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
            className={`multi-button hover:border-red-400 hover:bg-red-50 gap-2 font-bold ${
              hasAssetsOrLiabilities === 'No'
                ? 'border-red-400 bg-red-50 text-red-700'
                : 'bg-white border-slate-200 text-slate-700'
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
                    className={`flex justify-center items-center gap-2 py-1 rounded-xl border-2 transition-all ${
                      isSelected
                        ? colorStyles[type.color]
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className={`asset-icon`}>
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
                              onClick={assetTypes[0].append}
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
                                    .propertyType.message
                                }
                              />
                            )}
                          </div>
                          <div>
                            <label className="input-label">
                              Current Value (₹)
                            </label>
                            <input
                              {...register(
                                `assetLiability.realEstate.${index}.currentValue`
                              )}
                              className="input-field focus:border-emerald-500"
                              type="number"
                              placeholder="₹50,00,000"
                            />
                            {errors?.assetLiability?.realEstate?.[index]
                              ?.currentValue && (
                              <ErrorMsg
                                err={
                                  errors.assetLiability.realEstate[index]
                                    .currentValue.message
                                }
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {selectedAssetTypes.includes('vehicles') &&
                  assetTypes[1].fields.map((field, index) => {
                    const Icon = assetTypes[1].icon;
                    return (
                      <div key={field.id} className="asset-section">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="asset-icon bg-blue-100">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h4 className="section-header">
                              Vehicle #{index + 1}
                            </h4>
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={assetTypes[1].append}
                              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => assetTypes[1].remove(index)}
                              className="x-button"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <div>
                            <label className="input-label">Vehicle Type</label>
                            <input
                              type="text"
                              placeholder="e.g., Honda City 2020"
                              className="input-field focus:border-blue-500"
                              {...register(
                                `assetLiability.vehicles.${index}.vehicleType`
                              )}
                            />
                            {errors?.assetLiability?.vehicles?.[index]
                              ?.vehicleType && (
                              <ErrorMsg
                                err={
                                  errors.assetLiability.vehicles[index]
                                    .vehicleType.message
                                }
                              />
                            )}
                          </div>
                          <div>
                            <label className="input-label">
                              Current Value (₹)
                            </label>
                            <input
                              type="number"
                              placeholder="₹8,00,000"
                              className="input-field focus:border-blue-500"
                              {...register(
                                `assetLiability.vehicles.${index}.currentValue`
                              )}
                            />
                            {errors?.assetLiability?.vehicles?.[index]
                              .currentValue && (
                              <ErrorMsg
                                err={
                                  errors.assetLiability.vehicles[index]
                                    .currentValue.message
                                }
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {selectedAssetTypes.includes('bankDeposits') &&
                  assetTypes[2].fields.map((field, index) => {
                    const Icon = assetTypes[2].icon;
                    return (
                      <div key={field.id} className="asset-section">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="asset-icon bg-purple-100">
                              <Icon className="w-5 h-5 text-purple-600" />
                            </div>
                            <h4 className="section-header">
                              Bank Deposit #{index + 1}
                            </h4>
                          </div>
                          <div className="grid gap-2">
                            <button
                              type="button"
                              onClick={assetTypes[2].append}
                              className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 active:scale-95"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => assetTypes[2].remove(index)}
                              className="x-button"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <div>
                            <label className="input-label">Deposit Type</label>
                            <select
                              className="input-field focus:border-purple-500"
                              {...register(
                                `assetLiability.bankDeposits.${index}.depositType`
                              )}
                            >
                              <option value="">Select type</option>
                              <option value="savings">Savings Account</option>
                              <option value="fixed">Fixed Deposit</option>
                              <option value="recurring">
                                Recurring Deposit
                              </option>
                            </select>
                            {errors?.assetLiability?.bankDeposits?.[index]
                              .depositType && (
                              <ErrorMsg
                                err={
                                  errors.assetLiability.bankDeposits[index]
                                    .depositType.message
                                }
                              />
                            )}
                          </div>
                          <div>
                            <label className="input-label">
                              Total Amount (₹)
                            </label>
                            <input
                              className="input-field focus:border-purple-500"
                              type="number"
                              placeholder="₹1,500,000"
                              {...register(
                                `assetLiability.bankDeposits.${index}.totalAmount`
                              )}
                            />
                            {errors?.assetLiability?.bankDeposits?.[index]
                              ?.totalAmount && (
                              <ErrorMsg
                                err={
                                  errors.assetLiability.bankDeposits[index]
                                    .totalAmount.message
                                }
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {selectedAssetTypes.includes('investments') &&
                  assetTypes[3].fields.map((field, index) => {
                    const Icon = assetTypes[3].icon;
                    return (
                      <div key={field.id} className="asset-section">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="asset-icon bg-emerald-100">
                              <Icon className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h4 className="section-header">
                              Investment #{index + 1}
                            </h4>
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={assetTypes[3].append}
                              className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 active:scale-95"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => assetTypes[3].remove(index)}
                              className="x-button"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <div>
                            <label className="input-label">
                              Investment Type
                            </label>
                            <select
                              className="input-field focus:border-emerald-500"
                              {...register(
                                `assetLiability.investments.${index}.investmentType`
                              )}
                            >
                              <option value="">Select type</option>
                              <option value="mutualFunds">Mutual Funds</option>
                              <option value="stocks">Stocks</option>
                              <option value="bonds">Bonds</option>
                              <option value="gold">Gold</option>
                            </select>
                            {errors?.assetLiability?.investments?.[index]
                              ?.investmentType && (
                              <ErrorMsg
                                err={
                                  errors.assetLiability.investments
                                    .investmentType.message
                                }
                              />
                            )}
                          </div>
                          <div>
                            <label className="input-label">
                              Current Value (₹)
                            </label>
                            <input
                              type="number"
                              className="input-field focus:border-emerald-500"
                              placeholder="₹2,000,000"
                              {...register(
                                `assetLiability.investments.${index}.currentValue`
                              )}
                            />
                            {errors?.assetLiability?.investments?.[index]
                              ?.currentValue && (
                              <ErrorMsg
                                err={
                                  errors.assetLiability.investments[index]
                                    .currentValue.message
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

            {selectedAssetTypes.length > 0 && (
              <div className="p-6 bg-emerald-50 border-2 border-emerald-300 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-green-800">Total Assets</p>
                    <p className="text-xs text-green-700 mt-1">
                      Sum of all assets
                    </p>
                  </div>
                  <p className="text-4xl font-bold text-green-700">
                    ₹93,00,000
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Liabilities */}
          <div className="main-section border-red-200">
            <div className="mb-6">
              <h3 className="section-header">
                <TrendingDown className="w-5 h-5 text-red-600" />
                Liabilities
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                Select liability types to add
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {liabilityTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedLiabilityTypes.includes(type.id);

                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => toggleLiabilityType(type.id)}
                    className={`flex justify-center items-center gap-2 py-1 rounded-xl border-2 transition-all ${
                      isSelected
                        ? colorStyles[type.color]
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className={`asset-icon`}>
                      <Icon className={`w-5 h-5 text-${type.color}-600`} />
                    </div>
                    <span className="font-semibold text-sm">{type.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {selectedLiabilityTypes.includes('loans') &&
                liabilityTypes[0].fields.map((field, index) => {
                  const Icon = liabilityTypes[0].icon;
                  return (
                    <div key={field.id} className="liability-section">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="asset-icon bg-orange-100">
                            <Icon className="w-5 h-5 text-orange-600" />
                          </div>
                          <h4 className="section-header">Loan #{index + 1}</h4>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={liabilityTypes[0].append}
                            className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 active:scale-95"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => liabilityTypes[0].remove(index)}
                            className="x-button"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <div>
                          <label className="input-label">Loan Type</label>
                          <input
                            type="text"
                            placeholder="Home Loan"
                            className="input-field focus:border-orange-500"
                            {...register(
                              `assetLiability.loans.${index}.loanType`
                            )}
                          />
                          {errors?.assetLiability?.loans?.[index]?.loanType && (
                            <ErrorMsg
                              err={
                                errors.assetLiability.loans[index].loanType
                                  .message
                              }
                            />
                          )}
                        </div>
                        <div>
                          <label className="input-label">
                            Outstanding Amount (₹)
                          </label>
                          <input
                            type="number"
                            className="input-field focus:border-orange-500"
                            placeholder="₹2,50,000"
                            {...register(
                              `assetLiability.loans.${index}.outstandingAmount`
                            )}
                          />
                          {errors?.assetLiability?.loans?.[index]
                            ?.outstandingAmount && (
                            <ErrorMsg
                              err={
                                errors.assetLiability.loans[index]
                                  .outstandingAmount.message
                              }
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

              {selectedLiabilityTypes.includes('creditCards') &&
                liabilityTypes[1].fields.map((field, index) => {
                  const Icon = liabilityTypes[1].icon;
                  return (
                    <div key={field.id} className="liability-section">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="asset-icon bg-red-100">
                            <Icon className="w-5 h-5 text-red-600" />
                          </div>
                          <h4 className="section-header">
                            Credit Card #{index + 1}
                          </h4>
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={liabilityTypes[1].append}
                            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 active:scale-95"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => liabilityTypes[1].remove(index)}
                            className="x-button"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <div>
                          <label className="input-label">
                            Credit Card Type
                          </label>
                          <input
                            type="text"
                            placeholder="Home Loan"
                            className="input-field focus:border-red-500"
                            {...register(
                              `assetLiability.creditCards.${index}.creditCardType`
                            )}
                          />
                          {errors?.assetLiability?.creditCards?.[index]
                            ?.creditCardType && (
                            <ErrorMsg
                              err={
                                errors.assetLiability.creditCards[index]
                                  .creditCardType.message
                              }
                            />
                          )}
                        </div>
                        <div>
                          <label className="input-label">
                            Outstanding Amount (₹)
                          </label>
                          <input
                            type="number"
                            className="input-field focus:border-red-500"
                            placeholder="₹50,000"
                            {...register(
                              `assetLiability.creditCards.${index}.outstandingAmount`
                            )}
                          />
                          {errors?.assetLiability?.creditCards?.[index]
                            ?.outstandingAmount && (
                            <ErrorMsg
                              err={
                                errors.assetLiability.creditCards[index]
                                  .outstandingAmount.message
                              }
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {selectedLiabilityTypes.length > 0 && (
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
            )}
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
