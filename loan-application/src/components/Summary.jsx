import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { TrendingUp, UserCheck, FileText } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import ErrorMsg from '../utils/ErrorMsg';
import { checkSectionCompletion } from '../utils/summaryCalculations';

function Summary() {
  const {
    watch,
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  const formData = watch();

  const { sections, completedSections, totalSections, completedPercentage } =
    checkSectionCompletion(formData);

  const documentIssues = [];
  if (
    !formData.document?.bankStatements ||
    formData.document.bankStatements.length === 0
  ) {
    documentIssues.push('Bank statements missing');
  }
  if (!formData.document?.panCard) {
    documentIssues.push('PAN card missing');
  }
  if (!formData.document?.aadhaarCard) {
    documentIssues.push('Aadhaar card missing');
  }

  const issuesCount = totalSections - completedSections;

  return (
    <section className="p-10 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-indigo-500 mb-4">
          <UserCheck className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Application Readiness Summary
        </h2>
        <p className="text-blue-200">
          Review your application status before final submission
        </p>
      </div>

      {/* Status Card */}
      <div className="main-section border-blue-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              Application Status
            </h3>
            <p className="text-slate-600">
              {issuesCount === 0
                ? 'All sections completed!'
                : `${issuesCount} section${issuesCount > 1 ? 's' : ''} need${
                    issuesCount === 1 ? 's' : ''
                  } attention`}
            </p>
          </div>
          <div className="text-right">
            <div
              className={`text-4xl font-bold ${
                completedPercentage === 100
                  ? 'text-green-600'
                  : completedPercentage >= 75
                  ? 'text-amber-600'
                  : 'text-red-600'
              }`}
            >
              {completedPercentage}%
            </div>
            <p className="text-sm text-slate-600 mt-1">Complete</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-4 bg-slate-200 rounded-full mb-6">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${completedPercentage}%` }}
          />
        </div>

        <div className="space-y-3">
          {Object.entries(sections).map(([key, section]) => (
            <div
              key={key}
              className={`summary-checklist ${
                section.isComplete
                  ? 'border-green-200 bg-green-50'
                  : 'border-red-200 bg-red-50'
              }`}
            >
              <div className="flex items-center gap-4">
                {section.isComplete ? (
                  <CheckCircle className="summary-checkicon" />
                ) : (
                  <XCircle className="summary-xicon" />
                )}
                <div>
                  <p className="summary-subtitle">{section.name}</p>
                  <p className="summary-item">
                    {section.isComplete
                      ? 'All required fields completed'
                      : 'Required fields incomplete'}
                  </p>
                </div>
              </div>
              <span
                className={
                  section.isComplete
                    ? 'summary-completed'
                    : 'summary-incomplete'
                }
              >
                {section.isComplete ? 'Complete' : 'Incomplete'}
              </span>
            </div>
          ))}

          {documentIssues.length > 0 && (
            <div className="summary-checklist border-amber-200 bg-amber-50">
              <div className="flex items-center gap-4">
                <AlertTriangle className="summary-alerticon" />
                <div>
                  <p className="summary-subtitle">Document Upload</p>
                  {documentIssues.map((issue, idx) => (
                    <p key={idx} className="summary-item">
                      {issue}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Final Checklist */}
      <div className="bg-blue-500 rounded-2xl p-8">
        <div className="flex items-start gap-4">
          <FileText className="w-8 h-8 text-white mt-1" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Before You Submit
            </h3>
            <div className="space-y-3">
              <label className="summary-check-label">
                <input
                  {...register('summaryConsent.confirmAccuracy')}
                  type="checkbox"
                  className="summary-checkbox"
                  onClick={() => setTimeout(() => trigger('summaryConsent'), 0)}
                />
                <span className="text-white text-sm">
                  I confirm that all information provided is accurate and
                  complete
                </span>
              </label>
              <label className="summary-check-label">
                <input
                  {...register('summaryConsent.authorizeVerification')}
                  type="checkbox"
                  className="summary-checkbox"
                  onClick={() => setTimeout(() => trigger('summaryConsent'), 0)}
                />
                <span className="text-white text-sm">
                  I authorize verification of the information provided
                </span>
              </label>
              <label className="summary-check-label">
                <input
                  {...register('summaryConsent.agreeToTerms')}
                  type="checkbox"
                  className="summary-checkbox"
                  onClick={() => setTimeout(() => trigger('summaryConsent'), 0)}
                />
                <span className="text-white text-sm">
                  I agree to the terms and conditions of the loan agreement
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {errors?.summaryConsent?.consentMessage && (
        <div className="mt-4">
          <ErrorMsg err={errors.summaryConsent.consentMessage.message} />
        </div>
      )}
    </section>
  );
}

export default Summary;
