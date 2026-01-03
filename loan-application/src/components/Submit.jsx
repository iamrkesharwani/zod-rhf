import { Download, Save, RotateCcw, Send, Upload } from 'lucide-react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

import { useFormContext } from 'react-hook-form';

function Submit({ setCurrentStep }) {
  const { reset, getValues, setValue } = useFormContext();
  const [message, setMessage] = useState({ text: '', type: 'success' });

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: 'success' }), 3000);
  };

  const saveDraft = () => {
    const formData = getValues();
    localStorage.setItem('savedForm', JSON.stringify(formData));
    showMessage('Draft saved!', 'success');
  };

  const loadDraft = () => {
    const saved = localStorage.getItem('savedForm');
    if (saved) {
      const formData = JSON.parse(saved);
      for (const key of Object.keys(formData)) {
        setValue(key, formData[key]);
      }
      showMessage('Draft loaded!', 'success');
    } else {
      showMessage('No saved draft found', 'error');
    }
  };

  const downloadForm = () => {
    const formData = getValues();
    const text = JSON.stringify(formData, null, 2);
    const file = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = 'loan-application.txt';
    link.click();
    showMessage('Downloaded!', 'success');
  };

  const resetForm = () => {
    const confirm = window.confirm('Delete all form data?');
    if (confirm) {
      reset();
      localStorage.removeItem('savedForm');
      showMessage('Form reset!', 'success');
    }
  };

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

      {message.text && (
        <div
          className={`mb-6 p-4 rounded-xl font-medium flex items-center justify-center gap-2 ${
            message.type === 'error'
              ? 'bg-red-50 border border-red-200 text-red-800'
              : 'bg-green-50 border border-green-200 text-green-800'
          }`}
        >
          {message.type === 'error' ? (
            <XCircle className="w-5 h-5" />
          ) : (
            <CheckCircle className="w-5 h-5" />
          )}
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-4 gap-4 mb-6">
        <button
          type="button"
          className="submit-buttons border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
          onClick={saveDraft}
        >
          <Save className="w-8 h-8 transition-transform" />
          <span>Save Draft</span>
        </button>

        <button
          type="button"
          className="submit-buttons border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400"
          onClick={loadDraft}
        >
          <Upload className="w-8 h-8" />
          <span>Load Draft</span>
        </button>

        <button
          type="button"
          className="submit-buttons border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400"
          onClick={downloadForm}
        >
          <Download className="w-8 h-8" />
          <span>Download PDF</span>
        </button>

        <button
          type="button"
          className="submit-buttons border-red-300 text-red-700 hover:bg-red-50 hover:border-red-400"
          onClick={resetForm}
        >
          <RotateCcw className="w-8 h-8" />
          <span>Reset Form</span>
        </button>
      </div>
    </section>
  );
}

export default Submit;
