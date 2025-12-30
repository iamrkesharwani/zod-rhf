import { Download, Save, RotateCcw, Send, Upload } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

function Submit({ setCurrentStep }) {
  return (
    <section className="p-10">
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          className="flex items-center gap-3 px-6 py-4 text-slate-700 font-bold active:scale-95"
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          <ArrowLeft className="w-5 h-5" />
          Previous Step
        </button>

        <button
          type="submit"
          className="flex items-center gap-3 px-6 py-4 bg-teal-600 text-white rounded-xl transition font-bold active:scale-95"
        >
          <Send className="w-5 h-5" />
          Submit Loan Application
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <button
          type="button"
          className="submit-buttons border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
        >
          <Save className="w-8 h-8 transition-transform" />
          <span>Save Draft</span>
        </button>

        <button
          type="button"
          className="submit-buttons border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400"
        >
          <Upload className="w-8 h-8" />
          <span>Load Draft</span>
        </button>

        <button
          type="button"
          className="submit-buttons border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400"
        >
          <Download className="w-8 h-8" />
          <span>Download PDF</span>
        </button>

        <button
          type="button"
          className="submit-buttons border-red-300 text-red-700 hover:bg-red-50 hover:border-red-400"
        >
          <RotateCcw className="w-8 h-8" />
          <span>Reset Form</span>
        </button>
      </div>
    </section>
  );
}

export default Submit;
