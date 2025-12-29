import { ArrowLeft, Save, RotateCcw, Send } from 'lucide-react';

const Submit = ({ setCurrentStep }) => {
  return (
    <section className="p-8">
      <div className="grid grid-cols-4 gap-4">
        <button
          type="button"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-white hover:border-blue-400 hover:text-blue-600 transition-all font-semibold active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous Step
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-white hover:border-purple-400 hover:text-purple-600 transition-all font-semibold active:scale-95"
        >
          <Save className="w-5 h-5" />
          <span>Save Draft</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-white hover:border-red-400 hover:text-red-600 transition-all font-semibold active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset Form</span>
        </button>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold active:scale-95"
        >
          <Send className="w-5 h-5" />
          <span>Submit</span>
        </button>
      </div>
    </section>
  );
};

export default Submit;
