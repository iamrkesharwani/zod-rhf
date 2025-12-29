import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const stepField = [
  [
    'personalDetails.fullName',
    'personalDetails.email',
    'personalDetails.phone',
    'personalDetails.summary',
  ],
  ['experiences'],
  ['skills'],
  ['resume'],
];

const Step = ({ currentStep, setCurrentStep }) => {
  const { trigger } = useFormContext();

  const nextStep = async () => {
    const valid = await trigger(stepField[currentStep - 1]);
    if (valid) setCurrentStep((prev) => prev + 1);
  };

  return (
    <section className="p-8">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() =>
            setCurrentStep((prev) => (prev === 1 ? prev : prev - 1))
          }
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold ${
            currentStep === 1
              ? 'opacity-75 text-slate-500 cursor-not-allowed'
              : 'text-slate-700 transition active:scale-95'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Previous Step
        </button>

        <button
          type="button"
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition active:scale-95 font-semibold"
          onClick={nextStep}
        >
          Next Step
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Step;
