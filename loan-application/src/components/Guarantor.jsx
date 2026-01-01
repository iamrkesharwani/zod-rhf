import { ShieldCheck, User, Phone, Mail, CreditCard } from 'lucide-react';
import { Briefcase, MapPin, AlertCircle } from 'lucide-react';

function Guarantor() {
  return (
    <section className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="icon-bg bg-teal-600">
          <ShieldCheck className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Guarantor Details
          </h2>
          <p className="text-slate-600 mt-1">Provide guarantor information</p>
        </div>
      </div>

      {/* Guarantor Requirement Check */}
      <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-teal-600 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-teal-700 mb-2">
              Do you have a guarantor?
            </h3>
            <p className="text-sm text-teal-800 mb-4">
              A guarantor shall be required based on your loan amount and credit
              profile. They should have stable income and good credit history.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              <label className="multi-button bg-teal-50 border-teal-200 text-teal-700 hover:border-teal-400 hover:bg-teal-100">
                <input type="radio" name="hasGuarantor" className="sr-only" />
                <span className="text-sm font-bold select-none">Yes</span>
              </label>
              <label className="multi-button bg-teal-50 border-teal-200 text-teal-700 hover:border-teal-400 hover:bg-teal-100">
                <input type="radio" name="hasGuarantor" className="sr-only" />
                <span className="text-sm font-bold select-none">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantor Details Form */}
      <div className="main-section border-teal-200">
        <h3 className="section-header mb-5">
          <User className="w-5 h-5 text-teal-600" />
          Guarantor Personal Information
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="input-label">
              <User className="w-4 h-4 text-teal-600" />
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ankit Kesharwani"
              className="input-field focus:border-teal-500"
            />
          </div>
          <div>
            <label className="input-label">
              Relationship with Applicant
              <span className="text-red-500">*</span>
            </label>
            <select className="input-field focus:border-teal-500">
              <option value={''}>Select relationship</option>
              <option value={'parent'}>Parent</option>
              <option value={'sibling'}>Sibling</option>
              <option value={'spouse'}>Spouse</option>
              <option value={'friend'}>Friend</option>
              <option value={'businessPartner'}>Business Partner</option>
              <option value={'other'}>Other</option>
            </select>
          </div>

          <div>
            <label className="input-label">
              <Phone className="w-4 h-4 text-teal-600" />
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91-1234567890"
              className="input-field focus:border-teal-500"
            />
          </div>
          <div>
            <label className="input-label">
              <Mail className="w-4 h-4 text-teal-600" />
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ankit@email.com"
              className="input-field focus:border-teal-500"
            />
          </div>
          <div className="col-span-2">
            <label className="input-label">
              <MapPin className="w-4 h-4 text-teal-600" />
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="Complete residential address"
              className="input-field focus:border-teal-500 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Guarantor Employment Details */}
      <div className="main-section border-teal-200">
        <h3 className="section-header mb-5">
          <Briefcase className="w-5 h-5 text-teal-600" />
          Guarantor Employment & Income
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="input-label">
              Employer Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="XYZ Corporation"
              className="input-field focus:border-teal-500"
            />
          </div>

          <div>
            <label className="input-label">
              Designation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Senior Analyst"
              className="input-field focus:border-teal-500"
            />
          </div>

          <div>
            <label className="input-label">
              Monthly Income (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="80,000"
              className="input-field focus:border-teal-500"
            />
          </div>

          <div>
            <label className="input-label">
              Years of Employment <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="5"
              className="input-field focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Guarantor Credit Information */}
      <div className="main-section border-teal-200">
        <h3 className="section-header mb-5">
          <CreditCard className="w-5 h-5 text-teal-600" />
          Guarantor Credit Information
        </h3>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="input-label">
              Credit Score (CIBIL) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="780"
              min="300"
              max="900"
              className="input-field focus:border-teal-500"
            />
          </div>

          <div>
            <label className="input-label">Existing Loan EMI (₹)</label>
            <input
              type="number"
              placeholder="10,000"
              className="input-field focus:border-teal-500"
            />
          </div>
        </div>

        {/* Guarantor Consent */}
        <div className="mt-6 p-5 bg-teal-50 border-2 border-teal-200 rounded-xl">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 mt-1 text-teal-600 rounded border-2 border-teal-300"
            />
            <div>
              <p className="text-sm font-bold text-teal-900">
                Guarantor Consent
              </p>
              <p className="text-xs text-teal-700 mt-1">
                I confirm that the guarantor has agreed to guarantee this loan
                and understands their legal obligations.
              </p>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
}

export default Guarantor;
