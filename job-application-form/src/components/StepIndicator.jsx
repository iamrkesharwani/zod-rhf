import { Check, User, Briefcase, Award, FileText } from 'lucide-react';

const StepIndicator = ({ currentStep, setCurrentStep }) => {
  const steps = [
    { number: 1, title: 'Personal Details', icon: User },
    { number: 2, title: 'Work Experience', icon: Briefcase },
    { number: 3, title: 'Skills', icon: Award },
    { number: 4, title: 'Resume Upload', icon: FileText },
  ];

  return (
    <div className="relative">
      <div className="absolute top-12 left-0 right-0 h-1 bg-slate-200 rounded-full z-0" />

      {/* Steps */}
      <div className="relative flex justify-between" style={{ zIndex: 2 }}>
        {steps.map((step) => {
          const StepIcon = step.icon;
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div
              onClick={() => setCurrentStep(step.number)}
              key={step.number}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={`
                  w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30'
                      : isCurrent
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/40 scale-110'
                      : 'bg-white border-2 border-slate-300'
                  }
                `}
              >
                {isCompleted ? (
                  <Check className="w-10 h-10 text-white" strokeWidth={3} />
                ) : (
                  <StepIcon
                    className={`
                      w-10 h-10 transition-colors
                      ${isCurrent ? 'text-white' : 'text-slate-400'}
                    `}
                  />
                )}
              </div>

              <div className="mt-4 text-center">
                <p
                  className={`
                    text-sm font-semibold transition-colors
                    ${
                      isCurrent
                        ? 'text-blue-600'
                        : isCompleted
                        ? 'text-green-600'
                        : 'text-slate-600'
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
