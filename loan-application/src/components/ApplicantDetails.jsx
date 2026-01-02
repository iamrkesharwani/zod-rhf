import { User, Calendar, MapPin, Phone, Mail, CreditCard } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import ErrorMsg from '../utils/ErrorMsg';

function ApplicantDetails() {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const selectedStatus = watch('applicantDetails.maritalStatus');

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
            {...register('applicantDetails.fullName')}
            type="text"
            placeholder="Rahul Kesharwani"
            className="input-field focus:border-blue-500"
          />
          {errors?.applicantDetails?.fullName && (
            <ErrorMsg err={errors.applicantDetails.fullName.message} />
          )}
        </div>

        <div>
          <label className="input-label">
            <Calendar className="w-4 h-4 text-blue-600" />
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            {...register('applicantDetails.dateOfBirth')}
            type="date"
            className="input-field focus:border-blue-500"
            onBlur={() => trigger('applicantDetails.dateOfBirth')}
          />
          {errors?.applicantDetails?.dateOfBirth && (
            <ErrorMsg err={errors.applicantDetails.dateOfBirth.message} />
          )}
        </div>

        <div>
          <label className="input-label">
            <Mail className="w-4 h-4 text-blue-600" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('applicantDetails.email')}
            type="email"
            placeholder="rahul@email.com"
            className="input-field focus:border-blue-500"
          />
          {errors?.applicantDetails?.email && (
            <ErrorMsg err={errors.applicantDetails.email.message} />
          )}
        </div>

        <div>
          <label className="input-label">
            <Phone className="w-4 h-4 text-blue-600" />
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('applicantDetails.phone')}
            type="tel"
            placeholder="+91-0000000000"
            className="input-field focus:border-blue-500"
          />
          {errors?.applicantDetails?.phone && (
            <ErrorMsg err={errors.applicantDetails.phone.message} />
          )}
        </div>

        <div>
          <label className="input-label">
            <CreditCard className="w-4 h-4 text-blue-600" />
            PAN Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('applicantDetails.panNumber')}
            type="text"
            placeholder="ABCDE1234F"
            className="input-field focus:border-blue-500 uppercase"
            maxLength={10}
          />
          {errors?.applicantDetails?.panNumber && (
            <ErrorMsg err={errors.applicantDetails.panNumber.message} />
          )}
        </div>

        <div>
          <label className="input-label">
            <CreditCard className="w-4 h-4 text-blue-600" />
            Aadhaar Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('applicantDetails.aadhaarNumber')}
            type="text"
            placeholder="1234 5678 9012"
            className="input-field focus:border-blue-500"
            maxLength={14}
          />
          {errors?.applicantDetails?.aadhaarNumber && (
            <ErrorMsg err={errors.applicantDetails.aadhaarNumber.message} />
          )}
        </div>

        <div className="col-span-2">
          <label className="input-label">
            <MapPin className="w-4 h-4 text-blue-600" />
            Current Address <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('applicantDetails.address')}
            rows={3}
            placeholder="Enter your complete residential address"
            className="input-field focus:border-blue-500 resize-none"
          />
          {errors?.applicantDetails?.address && (
            <ErrorMsg err={errors.applicantDetails.address.message} />
          )}
        </div>

        <div>
          <label className="input-label">
            City <span className="text-red-500">*</span>
          </label>
          <input
            {...register('applicantDetails.city')}
            type="text"
            placeholder="Kolkata"
            className="input-field focus:border-blue-500"
          />
          {errors?.applicantDetails?.city && (
            <ErrorMsg err={errors.applicantDetails.city.message} />
          )}
        </div>

        <div>
          <label className="input-label">
            PIN Code <span className="text-red-500">*</span>
          </label>
          <input
            {...register('applicantDetails.pinCode')}
            type="text"
            placeholder="123456"
            className="input-field focus:border-blue-500"
            maxLength={6}
          />
          {errors?.applicantDetails?.pinCode && (
            <ErrorMsg err={errors.applicantDetails.pinCode.message} />
          )}
        </div>

        <div className="col-span-2">
          <label className="input-label">
            Marital Status <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-4 gap-3">
            {['Single', 'Married', 'Divorced', 'Widowed'].map((status) => {
              const isSelected = selectedStatus === status;
              return (
                <label
                  key={status}
                  className={`multi-button transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-100'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-blue-400'
                  }`}
                >
                  <input
                    {...register('applicantDetails.maritalStatus')}
                    type="radio"
                    value={status}
                    className="sr-only"
                  />
                  <span className="text-sm font-bold select-none">
                    {status}
                  </span>
                </label>
              );
            })}
          </div>
          {errors?.applicantDetails?.maritalStatus && (
            <ErrorMsg err={errors.applicantDetails.maritalStatus.message} />
          )}
        </div>
      </div>
    </section>
  );
}

export default ApplicantDetails;
