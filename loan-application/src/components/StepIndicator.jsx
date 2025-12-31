import { Check, User, FileText, ShieldCheck } from 'lucide-react';
import { Briefcase, History, Scale, Upload } from 'lucide-react';

const StepIndicator = ({ currentStep, setCurrentStep }) => {
  const steps = [
    { number: 1, title: 'Applicant Details', icon: User },
    { number: 2, title: 'Income', icon: Briefcase },
    { number: 3, title: 'Credit History', icon: History },
    { number: 4, title: 'Assets & Liabilities', icon: Scale },
    { number: 5, title: 'Loan Details', icon: FileText },
    { number: 6, title: 'Documents', icon: Upload },
    { number: 7, title: 'Guarantor', icon: ShieldCheck },
  ];

  return (
    <div className="relative px-4">
      <div className="relative grid grid-cols-7 gap-4" style={{ zIndex: 2 }}>
        {steps.map((step) => {
          const StepIcon = step.icon;
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div
              key={step.number}
              onClick={() => setCurrentStep(step.number)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={`w-28 h-28 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  isCompleted
                    ? 'bg-emerald-500 shadow-2xl rotate-0'
                    : isCurrent
                    ? 'bg-indigo-600 shadow-2xl'
                    : 'bg-white/10 border-2 border-white/30'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-12 h-12 text-white" strokeWidth={3} />
                ) : (
                  <StepIcon
                    className={`
                      w-12 h-12 transition-colors
                      ${isCurrent ? 'text-white' : 'text-white/40'}
                    `}
                  />
                )}
              </div>
              <div className="mt-4 text-center">
                <p
                  className={`
                    text-sm font-bold transition-colors
                    ${
                      isCompleted
                        ? 'text-emerald-500'
                        : isCurrent
                        ? 'text-indigo-400'
                        : 'text-white/60'
                    }
                  `}
                >
                  {step.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
