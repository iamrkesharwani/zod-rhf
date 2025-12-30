import { useState } from 'react';
import StepIndicator from './components/StepIndicator';
import ApplicantDetails from './components/ApplicantDetails';
import Step from './components/Step';
import Submit from './components/Submit';
import IncomeEmployment from './components/IncomeEmployment';
import CreditHistory from './components/CreditHistory';
import AssetsLiabilities from './components/AssetsLiabilities';
import LoanDetails from './components/LoanDetails';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-3">
            Loan Application
          </h1>
          <p className="text-blue-200">
            Complete financial profiling with risk assessment
          </p>
        </div>

        <StepIndicator currentStep={currentStep} />

        <div className="bg-white/95 rounded-3xl border overflow-hidden mt-10">
          <div>
            {currentStep === 1 && <ApplicantDetails />}
            {currentStep === 2 && <IncomeEmployment />}
            {currentStep === 3 && <CreditHistory />}
            {currentStep === 4 && <AssetsLiabilities />}
            {currentStep === 5 && <LoanDetails />}
            {/* <DocumentUploadStep /> */}
            {/* <GuarantorStep /> */}
            {/* <ApprovalSummary /> */}
            {currentStep < 8 && (
              <Step currentStep={currentStep} setCurrentStep={setCurrentStep} />
            )}

            {currentStep === 9 && <Submit setCurrentStep={setCurrentStep} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
