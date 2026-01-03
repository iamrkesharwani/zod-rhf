import { Upload, File, CheckCircle, FileText, Image, X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import ErrorMsg from '../utils/ErrorMsg';

function DocumentUpload() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const bankStatements = watch('document.bankStatements') || [];
  const panCard = watch('document.panCard');
  const aadhaarCard = watch('document.aadhaarCard');
  const incomeProofs = watch('document.incomeProofs') || [];
  const additionalDocs = watch('document.additionalDocs') || [];

  const identityDocs = [
    { label: 'PAN Card', name: 'panCard', file: panCard },
    {
      label: 'Aadhaar Card',
      name: 'aadhaarCard',
      file: aadhaarCard,
    },
  ];

  const handleFileChange = (fieldName, event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const fullFieldName = `document.${fieldName}`;
    const allowsMultiple = [
      'bankStatements',
      'incomeProofs',
      'additionalDocs',
    ].includes(fieldName);

    if (allowsMultiple) {
      const alreadyUploaded = watch(fullFieldName) || [];
      const newFilesToAdd = Array.from(files);
      const allFiles = [...alreadyUploaded, ...newFilesToAdd];
      setValue(fullFieldName, allFiles, { shouldValidate: true });
    } else {
      const singleFile = files[0];
      setValue(fullFieldName, singleFile, { shouldValidate: true });
    }
  };

  const removeFile = (fieldName, index = null) => {
    const fullFieldName = `document.${fieldName}`;
    if (index !== null) {
      const currentFiles = watch(fullFieldName) || [];
      const filesAfterRemoval = currentFiles.filter((_, i) => i !== index);
      setValue(fullFieldName, filesAfterRemoval, { shouldValidate: true });
    } else {
      setValue(fullFieldName, null, { shouldValidate: true });
    }
  };

  return (
    <section className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="icon-bg bg-purple-600">
          <Upload className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Document Upload</h2>
          <p className="text-slate-600 mt-1">
            Upload required documents for verification
          </p>
        </div>
      </div>

      {/* Bank Statement */}
      <div className="main-section border-purple-200">
        <h3 className="section-header mb-5">
          <FileText className="w-5 h-5 text-purple-600" />
          Bank Statements <span className="text-red-500">*</span>
        </h3>

        <div className="upload-area">
          <label className="upload-label">
            <input
              accept="application/pdf"
              onChange={(e) => handleFileChange('bankStatements', e)}
              type="file"
              multiple
              className="sr-only"
            />
            <div className="icon-bg bg-purple-100">
              <Upload className="w-10 h-10 text-purple-600" />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-900 mb-2">
                Upload Bank Statements
              </p>
              <p className="text-sm text-slate-600 mb-1">
                Drag and drop or click to browse
              </p>
              <p className="text-xs text-slate-500">
                PDF only • Max 10MB per file
              </p>
            </div>
          </label>
        </div>

        {errors?.document?.bankStatements && (
          <ErrorMsg err={errors.document.bankStatements.message} />
        )}

        <div className="mt-6 space-y-3">
          {bankStatements.map((file, index) => (
            <div key={index} className="file-bg">
              <div className="flex items-center gap-4">
                <div className="asset-icon bg-emerald-100">
                  <File className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {file.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {(file.size / 2024 / 2024).toFixed(2)} MB • Uploaded
                    successfully
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <button
                  type="button"
                  className="x-button"
                  onClick={() => removeFile('bankStatements', index)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Identity Documents */}
      <div className="main-section border-purple-200">
        <h3 className="section-header mb-5">
          <Image className="w-5 h-5 text-purple-600" />
          Identity Proof <span className="text-red-500">*</span>
        </h3>

        <div className="grid grid-cols-2 gap-6">
          {identityDocs.map(({ label, name, file }) => (
            <div key={name} className="upload-pad">
              <h4 className="input-label">{label}</h4>
              <div className="upload-area">
                <label className="flex flex-col items-center cursor-pointer">
                  <input
                    type="file"
                    className="sr-only"
                    accept="application/pdf,image/jpeg,image/png"
                    onChange={(e) => handleFileChange(name, e)}
                  />
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    Upload {label}
                  </p>
                  <p className="text-xs text-slate-500">
                    JPG, PNG or PDF • Max 5MB
                  </p>
                </label>
              </div>

              {errors?.document?.[name] && (
                <ErrorMsg err={errors.document[name].message} />
              )}

              {file && (
                <div className="mt-4">
                  <div className="file-bg">
                    <div className="flex items-center gap-4">
                      <div className="asset-icon bg-emerald-100">
                        <File className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          {file.name}
                        </p>
                        <p className="text-xs text-slate-600">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <button
                        onClick={() => removeFile(name)}
                        type="button"
                        className="x-button"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Income Proof */}
      <div className="main-section border-purple-200">
        <h3 className="section-header mb-5">
          <FileText className="w-5 h-5 text-purple-600" />
          Income Proof <span className="text-red-500">*</span>
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {['Salary Slips', 'Form 16 / ITR', 'Offer Letter'].map((docType) => (
            <div key={docType} className="upload-pad">
              <h4 className="input-label">{docType}</h4>
              <div className="upload-area">
                <label className="flex flex-col items-center cursor-pointer">
                  <input
                    type="file"
                    className="sr-only"
                    accept="application/pdf"
                    onChange={(e) => handleFileChange('incomeProofs', e)}
                  />
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-700 mb-1">
                    Upload {docType}
                  </p>
                  <p className="text-xs text-slate-500">PDF • 5MB</p>
                </label>
              </div>
            </div>
          ))}
        </div>

        {errors?.document?.incomeProofs && (
          <ErrorMsg err={errors.document.incomeProofs.message} />
        )}

        {incomeProofs.length > 0 && (
          <div className="mt-6 space-y-3">
            {incomeProofs.map((file, index) => (
              <div key={index} className="file-bg">
                <div className="flex items-center gap-4">
                  <div className="asset-icon bg-emerald-100">
                    <File className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-600">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeFile('incomeProofs', index)}
                    type="button"
                    className="x-button"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Additional Documents */}
      <div className="main-section border-purple-200">
        <h3 className="section-header mb-5">
          <FileText className="w-5 h-5 text-purple-600" />
          Additional Documents (Optional)
        </h3>

        <div className="upload-area">
          <label className="upload-label">
            <input
              type="file"
              multiple
              className="sr-only"
              onChange={(e) => handleFileChange('additionalDocs', e)}
            />
            <Upload className="w-10 h-10 text-slate-400 mx-auto" />
            <div>
              <p className="font-semibold text-slate-900 mb-2">
                Upload Supporting Documents
              </p>
              <p className="text-sm text-slate-600 mb-1">
                Property papers, investment proof, etc.
              </p>
              <p className="text-xs text-slate-500">
                Multiple files allowed • Max 10MB each
              </p>
            </div>
          </label>
        </div>

        {errors?.document?.additionalDocs && (
          <ErrorMsg err={errors.document.additionalDocs.message} />
        )}

        <div className="mt-6 space-y-3">
          {additionalDocs.map((file, index) => (
            <div key={index} className="file-bg">
              <div className="flex items-center gap-4">
                <div className="asset-icon bg-emerald-100">
                  <File className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {file.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB • Uploaded
                    successfully
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <button
                  type="button"
                  className="x-button"
                  onClick={() => {
                    removeFile('additionalDocs', index);
                  }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DocumentUpload;
