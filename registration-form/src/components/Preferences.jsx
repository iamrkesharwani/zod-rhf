import { Bell, CheckCircle2, Heart, Mail, Phone, Star } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const interests = [
  'Technology',
  'Design',
  'Business',
  'Marketing',
  'Science',
  'Art',
];

const notification = [
  {
    key: 'email',
    name: 'Email Notification',
    desc: 'Receive updates via email',
    icon: Mail,
  },
  {
    key: 'sms',
    name: 'SMS Notifications',
    desc: 'Receive text messages',
    icon: Phone,
  },
  {
    key: 'push',
    name: 'Push Notifications',
    desc: 'Receive push notifications',
    icon: Bell,
  },
];

const Preferences = () => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  
  const selected = watch('interests') || [];

  const toggleInterest = (item) => {
    if (selected.includes(item)) {
      setValue(
        'interests',
        selected.filter((i) => i !== item),
        { shouldValidate: true }
      );
    } else {
      setValue('interests', [...selected, item], { shouldValidate: true });
    }
  };

  const notificationState = watch('notifications');

  const toggleNotification = (key) => {
    setValue(`notifications.${key}`, !notificationState[key], {
      shouldValidate: true,
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
          <Star className="h-3.5 w-3.5" />
          Step 3 of 3
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          Preferences
        </h2>
      </div>

      <div className="space-y-7">
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Heart className="h-4 w-4 text-orange-500" />
            Select Your Interests
          </label>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((int) => (
              <button
                type="button"
                key={int}
                onClick={() => toggleInterest(int)}
                className={`group relative px-5 py-4 border-2  rounded-xl text-sm font-semibold transition hover:shadow-lg active:scale-95 ${
                  selected.includes(int)
                    ? 'border-orange-500 bg-orange-50 text-orange-800'
                    : 'border-gray-500 text-slate-700'
                }`}
              >
                <div className="relative flex items-center justify-between">
                  <span>{int}</span>
                  {selected.includes(int) && (
                    <CheckCircle2 className="h-5 w-5 text-orange-700" />
                  )}
                </div>
              </button>
            ))}
          </div>
          {errors?.interests?.message && (
            <p className="text-red-600 text-sm mt-1">
              {errors.interests.message}
            </p>
          )}
        </div>

        {/* Notification Preferences */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Bell className="h-4 w-4 text-orange-500" />
            Notification Preferences
          </label>

          <div className="space-y-3 bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200">
            {notification.map((not) => {
              const Icon = not.icon;
              const isActive = notificationState?.[not.key];

              return (
                <button
                  key={not.key}
                  type="button"
                  onClick={() => toggleNotification(not.key)}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-xl transition hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-orange-100' : 'bg-gray-100'
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          isActive ? 'text-orange-600' : 'text-gray-400'
                        }`}
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{not.name}</p>
                      <p className="text-sm text-gray-500">{not.desc}</p>
                    </div>
                  </div>
                  <div
                    className={`relative w-14 h-8 rounded-full transition ${
                      isActive ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                        isActive ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
