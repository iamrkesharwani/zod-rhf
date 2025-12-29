import { useFormContext } from 'react-hook-form';
import { Key, Lock, Shield, User } from 'lucide-react';

const AccountDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
          <Shield className="h-3.5 w-3.5" />
          Step 2 of 3
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
          Account Details
        </h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <User className="h-4 w-4 text-purple-500" />
            Username
          </label>
          <div>
            <input
              {...register('username')}
              type="text"
              className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 text-gray-900 placeholder:text-gray-400"
              placeholder="rahulkesharwani"
            />
            {errors?.username?.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Lock className="h-4 w-4 text-purple-500" />
            Password
          </label>
          <div className="relative group">
            <input
              {...register('password')}
              type="password"
              className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 text-gray-900 placeholder:text-gray-400"
              placeholder="••••••••••••"
            />
            {errors?.password?.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2.5">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Key className="h-4 w-4 text-purple-500" />
            Confirm Password
          </label>
          <div className="relative group">
            <input
              {...register('confirmPassword')}
              type="password"
              className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 text-gray-900 placeholder:text-gray-400"
              placeholder="••••••••••••"
            />
            {errors?.confirmPassword?.message && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
