import { Upload, File, CheckCircle, FileText, Image, X } from 'lucide-react';

function DocumentUpload() {
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
            <input type="file" className="sr-only" />
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

        <div className="mt-6 space-y-3">
          <div className="file-bg">
            <div className="flex items-center gap-4">
              <div className="asset-icon bg-emerald-100">
                <File className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Bank_Statement_Jan_Jun_2024.pdf
                </p>
                <p className="text-xs text-slate-600">
                  8.2 MB • Uploaded successfully
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <button className="x-button">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Identity Documents */}
      <div className="main-section border-purple-200">
        <h3 className="section-header mb-5">
          <Image className="w-5 h-5 text-purple-600" />
          Identity Proof <span className="text-red-500">*</span>
        </h3>

        <div className="grid grid-cols-2 gap-6">
          {['PAN Card', 'Aadhaar Card'].map((doc) => (
            <div className="upload-pad">
              <label>
                <input type="file" className="sr-only" />
                <h4 className="input-label">{doc}</h4>
                <div className="upload-area">
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    Upload {doc}
                  </p>
                  <p className="text-xs text-slate-500">
                    JPG, PNG or PDF • Max 5MB
                  </p>
                </div>
              </label>

              <div className="mt-6 space-y-3">
                <div className="file-bg">
                  <div className="flex items-center gap-4">
                    <div className="asset-icon bg-emerald-100">
                      <File className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {doc}.pdf
                      </p>
                      <p className="text-xs text-slate-600">
                        2.0 MB • Uploaded successfully
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <button className="x-button">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Salary Slips', 'Form 16 / ITR', 'Offer Letter'].map((doc) => (
            <div key={doc} className="upload-pad">
              <label>
                <input type="file" className="sr-only" />
                <h4 className="input-label">{doc}</h4>
                <div className="upload-area">
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-slate-700 mb-1">
                    Upload
                  </p>
                  <p className="text-xs text-slate-500">PDF • 5MB</p>
                </div>
              </label>

              <div className="mt-6 space-y-3">
                <div className="file-bg">
                  <div className="flex items-center gap-4">
                    <div className="asset-icon bg-emerald-100">
                      <File className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {doc}.pdf
                      </p>
                      <p className="text-xs text-slate-600">2.0 MB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="x-button">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Documents */}
      <div className="main-section border-purple-200">
        <h3 className="section-header mb-5">
          <FileText className="w-5 h-5 text-purple-600" />
          Additional Documents (Optional)
        </h3>

        <div className="upload-area">
          <label className="upload-label">
            <input type="file" className="sr-only" />
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
        <div className="mt-6 space-y-3">
          <div className="file-bg">
            <div className="flex items-center gap-4">
              <div className="asset-icon bg-emerald-100">
                <File className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Additional_document.pdf
                </p>
                <p className="text-xs text-slate-600">
                  7.0 MB • Uploaded successfully
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <button className="x-button">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocumentUpload;
