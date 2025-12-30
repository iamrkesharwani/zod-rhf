import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { TrendingUp, UserCheck, FileText } from 'lucide-react';

function Summary() {
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
              3 issues need attention before submission
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-amber-600">78%</div>
            <p className="text-sm text-slate-600 mt-1">Complete</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-4 bg-slate-200 rounded-full mb-6">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: '78%' }}
          />
        </div>

        <div className="space-y-3">
          {/* Completed Section */}
          <div className="summary-checklist border-green-200 bg-green-50">
            <div className="flex items-center gap-4">
              <CheckCircle className="summary-checkicon" />
              <div>
                <p className="summary-subtitle">Applicant Details</p>
                <p className="summary-item">All required fields completed</p>
              </div>
            </div>
            <span className="summary-completed">Complete</span>
          </div>

          {/* Warning Section */}
          <div className="summary-checklist border-amber-200 bg-amber-50">
            <div className="flex items-center gap-4">
              <AlertTriangle className="summary-alerticon" />
              <div>
                <p className="summary-subtitle">Credit History</p>
                <p className="summary-item">Credit score needs verification</p>
              </div>
            </div>
            <span className="summary-warning">Review</span>
          </div>

          {/* Incomplete Section */}
          <div className="summary-checklist border-red-200 bg-red-50">
            <div className="flex items-center gap-4">
              <XCircle className="summary-xicon" />
              <div>
                <p className="summary-subtitle">Document Upload</p>
                <p className="summary-item">Bank statements missing</p>
                <p className="summary-item">PAN card missing</p>
              </div>
            </div>
            <span className="summary-incomplete">Incomplete</span>
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="main-section border-blue-200">
        <h3 className="section-header mb-5">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          Financial Risk Assessment
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <div className="summary-grid-bg">
            <p className="input-label">Credit Score</p>
            <p className="summary-grid-content">750</p>
          </div>

          <div className="summary-grid-bg">
            <p className="input-label">EMI / Income Ratio</p>
            <p className="summary-grid-content">44.6%</p>
          </div>

          <div className="summary-grid-bg">
            <p className="input-label">Loan to Asset Ratio</p>
            <p className="summary-grid-content">21.5%</p>
          </div>

          <div className="summary-grid-bg">
            <p className="input-label">Debt to Income</p>
            <p className="summary-grid-content">36.8%</p>
          </div>
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
                <input type="checkbox" className="summary-checkbox" />
                <span className="text-white text-sm">
                  I confirm that all information provided is accurate and
                  complete
                </span>
              </label>
              <label className="summary-check-label">
                <input type="checkbox" className="summary-checkbox" />
                <span className="text-white text-sm">
                  I authorize verification of the information provided
                </span>
              </label>
              <label className="summary-check-label">
                <input type="checkbox" className="summary-checkbox" />
                <span className="text-white text-sm">
                  I agree to the terms and conditions of the loan agreement
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
