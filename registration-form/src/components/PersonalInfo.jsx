import { Mail, Phone, Sparkles, User } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
          <Sparkles className="h-3.5 w-3.5" />
          Step 1 of 3
        </div>
        <h2 className="text-2xl font-bold text-blue-600">
          Personal Information
        </h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <User className="h-4 w-4 text-blue-500" />
            Full Name
          </label>
          <div>
            <input
              {...register('fullName')}
              type="text"
              className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 text-gray-900 placeholder:text-gray-400"
              placeholder="Rahul Kesharwani"
            />
            {errors?.fullName?.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Mail className="h-4 w-4 text-blue-500" />
            Email Address
          </label>
          <div>
            <input
              {...register('email')}
              type="text"
              className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 text-gray-900 placeholder:text-gray-400"
              placeholder="rahul@email.com"
            />
            {errors?.email?.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Phone className="h-4 w-4 text-blue-500" />
            Phone Number
          </label>
          <div className="relative group">
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 text-gray-900 placeholder:text-gray-400"
              placeholder="+91-1234567890"
            />
            {errors?.phone?.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
