import { Briefcase, Plus, X, Calendar } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const WorkExperience = () => {
  const {
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiences',
  });

  return (
    <section className="p-8">
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Work Experience
            </h2>
            <p className="text-sm text-slate-500">
              Add your professional experience
            </p>
          </div>
        </div>
      </div>

      {fields.map((field, index) => {
        const isCurrent = watch(`experiences.${index}.isCurrent`);

        return (
          <div key={field.id} className="p-6 mb-6 border-2 rounded-xl">
            <div className="flex items-start justify-between mb-5">
              <div className="flex justify-between mb-4">
                <h3 className="font-bold">Experience #{index + 1}</h3>
              </div>

              {fields.length > 1 && (
                <button
                  type="button"
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all active:scale-75"
                  onClick={() => remove(index)}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  {...register(`experiences.${index}.jobTitle`)}
                  type="text"
                  placeholder="Senior software developer"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none"
                />

                {errors?.experiences?.[index]?.jobTitle && (
                  <p className="text-sm text-red-500 mt-1 font-semibold">
                    {errors.experiences[index].jobTitle.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  {...register(`experiences.${index}.company`)}
                  type="text"
                  placeholder="Tech Corp Inc."
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none"
                />

                {errors?.experiences?.[index]?.company && (
                  <p className="text-sm text-red-500 mt-1 font-semibold">
                    {errors.experiences[index].company.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register(`experiences.${index}.startDate`)}
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>

                {errors?.experiences?.[index]?.startDate && (
                  <p className="text-sm text-red-500 mt-1 font-semibold">
                    {errors.experiences[index].startDate.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2">
                  End Date <span className="text-red-500">*</span>
                </label>
                <div className="relative mb-3">
                  <input
                    {...register(`experiences.${index}.endDate`)}
                    type={isCurrent ? 'text' : 'date'}
                    placeholder="Currently working"
                    disabled={isCurrent}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all outline-none ${
                      isCurrent
                        ? 'bg-slate-100 cursor-not-allowed border-slate-200'
                        : 'border-slate-200 focus:border-orange-500'
                    }`}
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    {...register(`experiences.${index}.isCurrent`)}
                    type="checkbox"
                    className="w-4 h-4 text-orange-600 rounded border-2 border-slate-300"
                    onChange={(e) => {
                      const checked = e.target.checked;

                      setValue(`experiences.${index}.isCurrent`, checked, {
                        shouldValidate: true,
                        shouldDirty: true,
                      });

                      if (checked) {
                        setValue(`experiences.${index}.endDate`, '', {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  <span className="text-sm font-medium text-slate-700">
                    Currently working here
                  </span>
                </label>

                {!isCurrent && errors?.experiences?.[index]?.endDate && (
                  <p className="text-sm text-red-500 mt-1 font-semibold">
                    {errors.experiences[index].endDate.message}
                  </p>
                )}
              </div>

              <div className="col-span-2">
                <label className="text-sm font-semibold text-slate-700 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register(`experiences.${index}.workDescription`)}
                  rows={4}
                  placeholder="Describe your key responsibilities and achievements..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 transition-all outline-none resize-none"
                />
                <div className="flex items-center justify-between">
                  {errors?.experiences?.[index]?.workDescription && (
                    <p className="text-sm text-red-500 mt-1 font-semibold">
                      {errors.experiences[index].workDescription.message}
                    </p>
                  )}

                  <p className="ml-auto text-xs text-slate-500 mt-1">
                    Minimum 50 characters
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="col-span-2 grid justify-items-end mt-4">
        <button
          onClick={() =>
            append({
              jobTitle: '',
              company: '',
              startDate: '',
              endDate: '',
              isCurrent: false,
              workDescription: '',
            })
          }
          type="button"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl transition-all font-semibold active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </button>
      </div>

      {errors?.experiences?.message && (
        <p className="text-sm text-red-500 mt-1 font-semibold">
          {errors.experiences.message}
        </p>
      )}
    </section>
  );
};

export default WorkExperience;
