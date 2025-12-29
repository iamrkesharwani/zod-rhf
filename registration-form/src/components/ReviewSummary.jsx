import { CheckCircle2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const ReviewSummary = () => {
  const { getValues } = useFormContext();
  const data = getValues();

  const userInfo = [
    { label: 'Full name', value: data.fullName },
    { label: 'Email', value: data.email },
    { label: 'Phone', value: data.phone },
    { label: 'Username', value: data.username },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Final Step
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Review & Confirm
        </h2>
        <p className="text-gray-600 text-lg">
          Please review your information before submitting
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
          <div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-blue-700 mb-5">
                Your Info
              </h3>

              {userInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 bg-white/80 backdrop-blur rounded-xl"
                >
                  <span className="text-sm text-gray-600 font-medium">
                    {item.label}:
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {item.value}
                  </span>
                </div>
              ))}

              <div className="p-3 bg-white/80 backdrop-blur rounded-xl">
                <span className="text-sm text-gray-600 font-medium block mb-3">
                  Selected Interests
                </span>
                <div className="flex flex-wrap gap-2">
                  {data.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-orange-100 to-pink-100 rounded-full text-xs font-bold text-orange-700 border border-orange-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-orange-50 rounded-2xl p-6 border-2 border-purple-100">
          <div className="relative">
            <h3 className="text-2xl font-bold text-orange-700 mb-5">
              Preferences
            </h3>

            <div className="space-y-4">
              <div className="p-3 bg-white/80 backdrop-blur rounded-xl">
                <span className="text-sm text-gray-600 font-medium block mb-3">
                  Active Notifications
                </span>
                <div className="flex flex-wrap gap-6">
                  {Object.keys(data.notifications).map((key) => {
                    if (!data.notifications[key]) return null;

                    return (
                      <div key={key} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-gray-700 font-medium">
                          {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
                          Notifications
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
