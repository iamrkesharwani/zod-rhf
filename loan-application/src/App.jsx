import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import StepIndicator from './components/StepIndicator';
import ApplicantDetails from './components/ApplicantDetails';
import IncomeEmployment from './components/IncomeEmployment';
import CreditHistory from './components/CreditHistory';
import AssetsLiabilities from './components/AssetsLiabilities';
import LoanDetails from './components/LoanDetails';
import DocumentUpload from './components/DocumentUpload';
import Step from './components/Step';
import Submit from './components/Submit';
import Guarantor from './components/Guarantor';
import Summary from './components/Summary';
import { loanFormConfig } from './utils/loanFormConfig';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm(loanFormConfig);

  const formSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(formSubmit)}>
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

            <StepIndicator
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />

            <div className="bg-white/95 rounded-3xl border overflow-hidden mt-10">
              <div>
                {currentStep === 1 && <ApplicantDetails />}
                {currentStep === 2 && <IncomeEmployment />}
                {currentStep === 3 && <CreditHistory />}
                {currentStep === 4 && <AssetsLiabilities />}
                {currentStep === 5 && <LoanDetails />}
                {currentStep === 6 && <DocumentUpload />}
                {currentStep === 7 && <Guarantor />}
                {currentStep === 8 && <Summary />}

                {currentStep < 8 && (
                  <Step
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                  />
                )}

                {currentStep === 8 && (
                  <Submit setCurrentStep={setCurrentStep} />
                )}

                {currentStep < 8 && (
                  <p className="text-center text-slate-500 text-sm py-6">
                    All fields marked with{' '}
                    <span className="text-red-500">*</span> are required
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default App;
