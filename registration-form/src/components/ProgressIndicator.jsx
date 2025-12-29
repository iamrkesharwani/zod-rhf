const ProgressIndicator = ({ currentStep }) => {
  const progress = ['Personal Info', 'Account Details', 'Preferences'];

  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="relative">
        <div className="flex items-start justify-between">
          {progress.map((prog, index) => {
            const step = currentStep >= index;
            return (
              <div className="flex flex-col items-center flex-1 relative">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                    step
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  <span className="z-10">{index + 1}</span>
                </div>
                <div className="mt-1 text-center">
                  <p
                    className={`text-xs font-semibold ${
                      step ? 'text-blue-600' : 'text-slate-500'
                    }`}
                  >
                    {prog}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
