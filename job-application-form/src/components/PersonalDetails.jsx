import { User } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const PersonalDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Personal Details
          </h2>
          <p className="text-sm text-slate-500">Tell us about yourself</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('personalDetails.fullName')}
            type="text"
            placeholder="Rahul Kesharwani"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none"
          />

          {errors?.personalDetails?.fullName && (
            <p className="text-sm text-red-500 mt-1 font-semibold">
              {errors.personalDetails.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('personalDetails.email')}
            type="text"
            placeholder="rahul@email.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none"
          />

          {errors?.personalDetails?.email && (
            <p className="text-sm text-red-500 mt-1 font-semibold">
              {errors.personalDetails.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('personalDetails.phone')}
            type="tel"
            placeholder="+91-1234567890"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none"
          />

          {errors?.personalDetails?.phone && (
            <p className="text-sm text-red-500 mt-1 font-semibold">
              {errors.personalDetails.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2">
            LinkedIn Profile
          </label>
          <input
            {...register('personalDetails.url')}
            type="url"
            placeholder="https://linkedin.com/in/rahul"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none"
          />
        </div>

        <div className="col-span-2">
          <label className="text-sm font-semibold text-slate-700 mb-2">
            Professional Summary <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('personalDetails.summary')}
            rows={4}
            placeholder="Brief overview of your professional background and career objectives..."
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 transition-all outline-none resize-none"
          />
          <div className="flex items-center justify-between">
            {errors?.personalDetails?.summary && (
              <p className="text-sm text-red-500 mt-1 font-semibold">
                {errors.personalDetails.summary.message}
              </p>
            )}
            <p className="ml-auto text-xs text-slate-500 mt-2">
              Minimum 50 characters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
