import { User, Calendar, MapPin, Phone, Mail, CreditCard } from 'lucide-react';

function ApplicantDetails() {
  return (
    <section className="p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="icon-bg bg-blue-600">
          <User className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Applicant Details
          </h2>
          <p className="text-slate-600 mt-1">
            Basic information about the loan applicant
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="input-label">
            <User className="w-4 h-4 text-blue-600" />
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Rahul Kesharwani"
            className="input-field focus:border-blue-500"
          />
        </div>

        <div>
          <label className="input-label">
            <Calendar className="w-4 h-4 text-blue-600" />
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input type="date" className="input-field focus:border-blue-500" />
        </div>

        <div>
          <label className="input-label">
            <Mail className="w-4 h-4 text-blue-600" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="rahul@email.com"
            className="input-field focus:border-blue-500"
          />
        </div>

        <div>
          <label className="input-label">
            <Phone className="w-4 h-4 text-blue-600" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+91-0000000000"
            className="input-field focus:border-blue-500"
          />
        </div>

        <div>
          <label className="input-label">
            <CreditCard className="w-4 h-4 text-blue-600" />
            PAN Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="ABCDE1234F"
            className="input-field focus:border-blue-500 uppercase"
            maxLength={10}
          />
        </div>

        <div>
          <label className="input-label">
            <CreditCard className="w-4 h-4 text-blue-600" />
            Aadhaar Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012"
            className="input-field focus:border-blue-500"
            maxLength={14}
          />
        </div>

        <div className="col-span-2">
          <label className="input-label">
            <MapPin className="w-4 h-4 text-blue-600" />
            Current Address <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={3}
            placeholder="Enter your complete residential address"
            className="input-field focus:border-blue-500 resize-none"
          />
        </div>

        <div>
          <label className="input-label">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Kolkata"
            className="input-field focus:border-blue-500"
          />
        </div>

        <div>
          <label className="input-label">
            PIN Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="123456"
            className="input-field focus:border-blue-500"
            maxLength={6}
          />
        </div>

        <div className="col-span-2">
          <label className="input-label">
            Marital Status <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-4 gap-3">
            {['Single', 'Married', 'Divorced', 'Widowed'].map((status) => (
              <label
                key={status}
                className="multi-button bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50"
              >
                <input type="radio" name="marital" className="peer sr-only" />
                <span className="text-sm font-bold select-none">{status}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicantDetails;
