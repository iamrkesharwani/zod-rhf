import { FileText, Upload, CheckCircle, File } from 'lucide-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const Resume = () => {
  const [inputKey, setInputKey] = useState(0);

  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const file = watch('resume');

  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Resume Upload</h2>
          <p className="text-sm text-slate-500">Last step: share resume</p>
        </div>
      </div>

      <label className="block cursor-pointer">
        <input
          type="file"
          key={inputKey}
          accept="application/pdf"
          className="sr-only"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              setValue('resume', selectedFile, { shouldValidate: true });
            }
          }}
        />

        <div className="rounded-2xl p-10 text-center group">
          <div className="flex flex-col items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center">
              <Upload className="w-10 h-10 text-purple-600" />
            </div>

            <div>
              <p className="text-xl font-bold text-slate-900 mb-2">
                Drop your resume here <span className="text-red-500">*</span>
              </p>
              <p className="text-sm text-slate-500 mb-1">or click to browse</p>
              <p className="text-xs text-slate-400">
                Supported format: PDF (max 5MB)
              </p>
            </div>
          </div>
        </div>
      </label>

      {errors.resume && (
        <p className="text-sm text-red-500 mt-2 font-semibold">
          {errors.resume.message}
        </p>
      )}

      {file && (
        <div className="mt-6 p-5 border-2 border-green-200 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
              <File className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{file.name}</p>
              <p className="text-xs text-slate-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB • Uploaded
                successfully
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <button
              onClick={() => {
                setInputKey((prev) => prev + 1);
                setValue('resume', undefined, { shouldValidate: true });
              }}
              type="button"
              className="px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition active:scale-95"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
