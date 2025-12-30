import { ArrowLeft, ArrowRight } from 'lucide-react';

function Step({ currentStep, setCurrentStep }) {
  return (
    <section className="p-10">
      <div className="flex items-center justify-between mb-8">
        <button
          disabled={currentStep === 1}
          type="button"
          className={`flex items-center gap-3 px-6 py-4 text-slate-700 font-bold ${
            currentStep === 1
              ? 'cursor-not-allowed opacity-50'
              : 'active:scale-95'
          }`}
          onClick={() =>
            setCurrentStep((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          <ArrowLeft className="w-5 h-5" />
          Previous Step
        </button>

        <button
          type="button"
          className="flex items-center gap-3 px-6 py-4 bg-indigo-600 text-white rounded-xl transition font-bold active:scale-95"
          onClick={() => setCurrentStep((prev) => prev + 1)}
        >
          Next Step
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default Step;
