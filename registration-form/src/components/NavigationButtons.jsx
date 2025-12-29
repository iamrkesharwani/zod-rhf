import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const stepField = [
  ['fullName', 'email', 'phone'],
  ['username', 'password', 'confirmPassword'],
  ['interests'],
];

const NavigationButtons = ({ currentStep, setCurrentStep }) => {
  const { trigger } = useFormContext();

  const nextStep = async () => {
    const valid = await trigger(stepField[currentStep]);
    if (valid) setCurrentStep((prev) => prev + 1);
  };
  
  return (
    <div className="flex justify-between items-center pt-8 mt-8 border-t-2 border-gray-100">
      <button
        type="button"
        disable={currentStep === 0}
        className={`px-8 py-4 flex gap-2.5 items-center font-bold rounded-xl text-slate-600 ${
          currentStep === 0
            ? 'opacity-60 cursor-not-allowed'
            : 'hover:shadow-xl transition active:scale-95'
        }`}
        onClick={() => setCurrentStep((prev) => (prev === 0 ? prev : prev - 1))}
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition" />
        <span>Previous</span>
      </button>

      <button
        type="button"
        className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:shadow-xl transition flex items-center gap-2.5 active:scale-95"
        onClick={nextStep}
      >
        <span className="relative z-10">Next Step</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
      </button>
    </div>
  );
};

export default NavigationButtons;
