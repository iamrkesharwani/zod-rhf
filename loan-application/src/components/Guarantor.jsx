import { ShieldCheck, User, Phone, Mail, CreditCard } from 'lucide-react';
import { Briefcase, MapPin, AlertCircle } from 'lucide-react';

import { useFormContext } from 'react-hook-form';

import ErrorMsg from '../utils/ErrorMsg';

function Guarantor() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const watchHaveAGuarantor = watch('guarantor.haveAGuarantor');

  return (
    <section className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="icon-bg bg-teal-600">
          <ShieldCheck className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Guarantor Details
          </h2>
          <p className="text-slate-600 mt-1">Provide guarantor information</p>
        </div>
      </div>

      {/* Guarantor Requirement Check */}
      <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-teal-600 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-teal-700 mb-2">
              Do you have a guarantor?
            </h3>
            <p className="text-sm text-teal-800 mb-4">
              A guarantor shall be required based on your loan amount and credit
              profile. They should have stable income and good credit history.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              <label
                className={`multi-button  hover:border-teal-400 hover:bg-teal-100 ${
                  watchHaveAGuarantor === 'Yes'
                    ? 'border-green-500 text-green-500 bg-green-100'
                    : 'border-teal-400 text-teal-700 bg-white'
                }`}
              >
                <input
                  type="radio"
                  value="Yes"
                  className="sr-only"
                  {...register('guarantor.haveAGuarantor')}
                />
                <span className="text-sm font-bold select-none">Yes</span>
              </label>
              <label
                className={`multi-button hover:border-teal-400 hover:bg-teal-100 ${
                  watchHaveAGuarantor === 'No'
                    ? 'border-red-500 text-red-500 bg-red-100'
                    : 'border-teal-400 text-teal-700 bg-white'
                }`}
              >
                <input
                  type="radio"
                  value="No"
                  className="sr-only"
                  {...register('guarantor.haveAGuarantor')}
                />
                <span className="text-sm font-bold select-none">No</span>
              </label>
            </div>

            {errors?.guarantor?.haveAGuarantor && (
              <ErrorMsg err={errors.guarantor.haveAGuarantor.message} />
            )}
          </div>
        </div>
      </div>

      {/* Guarantor Details Form */}
      {watchHaveAGuarantor === 'Yes' && (
        <div className="main-section border-teal-200">
          <h3 className="section-header mb-5">
            <User className="w-5 h-5 text-teal-600" />
            Guarantor Personal Information
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="input-label">
                <User className="w-4 h-4 text-teal-600" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register('guarantor.guarName')}
                type="text"
                placeholder="Ankit Kesharwani"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarName && (
                <ErrorMsg err={errors.guarantor.guarName.message} />
              )}
            </div>

            <div>
              <label className="input-label">
                Relationship with Applicant
                <span className="text-red-500">*</span>
              </label>
              <select
                {...register('guarantor.relWithApplicant')}
                className="input-field focus:border-teal-500"
              >
                <option value="">Select relationship</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="spouse">Spouse</option>
                <option value="friend">Friend</option>
                <option value="businessPartner">Business Partner</option>
                <option value="other">Other</option>
              </select>
              {errors?.guarantor?.relWithApplicant && (
                <ErrorMsg err={errors.guarantor.relWithApplicant.message} />
              )}
            </div>

            <div>
              <label className="input-label">
                <Phone className="w-4 h-4 text-teal-600" />
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                {...register('guarantor.guarPhone')}
                type="tel"
                placeholder="+91-1234567890"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarPhone && (
                <ErrorMsg err={errors.guarantor.guarPhone.message} />
              )}
            </div>

            <div>
              <label className="input-label">
                <Mail className="w-4 h-4 text-teal-600" />
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                {...register('guarantor.guarEmail')}
                type="text"
                placeholder="ankit@email.com"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarEmail && (
                <ErrorMsg err={errors.guarantor.guarEmail.message} />
              )}
            </div>

            <div className="col-span-2">
              <label className="input-label">
                <MapPin className="w-4 h-4 text-teal-600" />
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('guarantor.guarAddress')}
                rows={3}
                placeholder="Complete residential address"
                className="input-field focus:border-teal-500 resize-none"
              />
              {errors?.guarantor?.guarAddress && (
                <ErrorMsg err={errors.guarantor.guarAddress.message} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Guarantor Employment Details */}
      {watchHaveAGuarantor === 'Yes' && (
        <div className="main-section border-teal-200">
          <h3 className="section-header mb-5">
            <Briefcase className="w-5 h-5 text-teal-600" />
            Guarantor Employment & Income
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="input-label">
                Employer Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register('guarantor.guarEmployerName')}
                type="text"
                placeholder="XYZ Corporation"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarEmployerName && (
                <ErrorMsg err={errors.guarantor.guarEmployerName.message} />
              )}
            </div>

            <div>
              <label className="input-label">
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                {...register('guarantor.guarDesignation')}
                type="text"
                placeholder="Senior Analyst"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarDesignation && (
                <ErrorMsg err={errors.guarantor.guarDesignation.message} />
              )}
            </div>

            <div>
              <label className="input-label">
                Monthly Income (₹) <span className="text-red-500">*</span>
              </label>
              <input
                {...register('guarantor.guarMonthlyIncome')}
                type="number"
                placeholder="80,000"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarMonthlyIncome && (
                <ErrorMsg err={errors.guarantor.guarMonthlyIncome.message} />
              )}
            </div>

            <div>
              <label className="input-label">
                Years of Employment <span className="text-red-500">*</span>
              </label>
              <input
                {...register('guarantor.guarYearEmp')}
                type="number"
                placeholder="5"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarYearEmp && (
                <ErrorMsg err={errors.guarantor.guarYearEmp.message} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Guarantor Credit Information */}
      {watchHaveAGuarantor === 'Yes' && (
        <div className="main-section border-teal-200">
          <h3 className="section-header mb-5">
            <CreditCard className="w-5 h-5 text-teal-600" />
            Guarantor Credit Information
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="input-label">
                Credit Score (CIBIL) <span className="text-red-500">*</span>
              </label>
              <input
                {...register('guarantor.guarCreditScore')}
                type="number"
                placeholder="780"
                min="300"
                max="900"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarCreditScore && (
                <ErrorMsg err={errors.guarantor.guarCreditScore.message} />
              )}
            </div>

            <div>
              <label className="input-label">Existing Loan EMI (₹)</label>
              <input
                {...register('guarantor.guarExistingLoanEmi')}
                type="number"
                placeholder="10,000"
                className="input-field focus:border-teal-500"
              />
              {errors?.guarantor?.guarExistingLoanEmi && (
                <ErrorMsg err={errors.guarantor.guarExistingLoanEmi.message} />
              )}
            </div>
          </div>

          {/* Guarantor Consent */}
          <div className="mt-6 p-5 bg-teal-50 border-2 border-teal-200 rounded-xl">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                {...register('guarantor.guarConsentSchema')}
                type="checkbox"
                className="w-5 h-5 mt-1 text-teal-600 rounded border-2 border-teal-300"
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-teal-900">
                  Guarantor Consent
                </p>
                <p className="text-xs text-teal-700 mt-1">
                  I confirm that the guarantor has agreed to guarantee this loan
                  and understands their legal obligations.
                </p>
              </div>
            </label>
            {errors?.guarantor?.guarConsentSchema && (
              <ErrorMsg err={errors.guarantor.guarConsentSchema.message} />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Guarantor;
