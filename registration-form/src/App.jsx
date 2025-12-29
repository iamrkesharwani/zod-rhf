import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import AccountDetails from './components/AccountDetails';
import NavigationButtons from './components/NavigationButtons';
import PersonalInfo from './components/PersonalInfo';
import Preferences from './components/Preferences';
import ProgressIndicator from './components/ProgressIndicator';
import ReviewSummary from './components/ReviewSummary';
import SubmitButton from './components/SubmitButton';

import { registrationSchema } from './schema/registrationSchema';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm({
    resolver: zodResolver(registrationSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      confirmPassword: '',
      interests: [],
      notifications: {
        email: false,
        sms: false,
        push: false,
      },
    },
  });

  const onSubmit = (data) => {
    console.log('Final data:', data);
    alert('Registration complete');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="text-4xl font-bold text-blue-600 mb-12 text-center">
            Registration Form
          </div>
          <div className="max-w-3xl mx-auto">
            <ProgressIndicator currentStep={currentStep} />
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {currentStep === 0 && <PersonalInfo />}
              {currentStep === 1 && <AccountDetails />}
              {currentStep === 2 && <Preferences />}
              {currentStep === 3 && <ReviewSummary />}
              {currentStep < 3 && (
                <NavigationButtons
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {currentStep === 3 && (
                <SubmitButton setCurrentStep={setCurrentStep} />
              )}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default App;
