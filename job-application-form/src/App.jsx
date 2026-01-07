import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { jobSchema } from './schema/jobSchema';
import { useState } from 'react';

import StepIndicator from './components/StepIndicator';
import PersonalDetails from './components/PersonalDetails';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Validation from './components/Validation';
import Step from './components/Step';
import Submit from './components/Submit';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm({
    resolver: zodResolver(jobSchema),
    mode: 'onChange',
    defaultValues: {
      personalDetails: {
        fullName: '',
        email: '',
        phone: '',
        summary: '',
      },
      experiences: [
        {
          jobTitle: '',
          company: '',
          startDate: '',
          endDate: '',
          isCurrent: false,
          workDescription: '',
        },
      ],
      skills: [],
      resume: undefined,
    },
  });

  const submitForm = (data) => {
    console.log(data);
    alert('Form submitted successfully');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitForm)}>
        <div className="min-h-screen bg-indigo-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-slate-900 mb-3">
                Resume Builder
              </h1>
              <p className="text-slate-600">
                Complete your profile to create an outstanding resume
              </p>
            </div>

            <StepIndicator
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />

            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mt-8">
              <div className="divide-y divide-slate-100">
                {currentStep === 1 && <PersonalDetails />}
                {currentStep === 2 && <WorkExperience />}
                {currentStep === 3 && <Skills />}
                {currentStep === 4 && <Resume />}
                {currentStep === 5 && <Validation />}
              </div>
            </div>

            {currentStep <= 4 && (
              <Step setCurrentStep={setCurrentStep} currentStep={currentStep} />
            )}

            {currentStep === 5 && <Submit setCurrentStep={setCurrentStep} />}

            {currentStep <= 4 && (
              <p className="text-center text-slate-500 text-sm mt-6">
                All fields marked with <span className="text-red-500">*</span>{' '}
                are required
              </p>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default App;
