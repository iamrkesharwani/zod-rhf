import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const Row = ({ valid, title, subtitle }) => {
  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg border ${
        valid ? 'bg-green-50 border-green-200' : 'bg-white border-amber-200'
      }`}
    >
      {valid ? (
        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
      )}
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-xs text-slate-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

const Validation = () => {
  const {
    formState: { errors },
    watch,
  } = useFormContext();

  const personalErrors = errors.personalDetails;
  const experienceErrors = errors.experiences;
  const skillsErrors = errors.skills;
  const resumeErrors = errors.resume;

  const experiences = watch('experiences') || [];
  const skills = watch('skills') || [];
  const resume = watch('resume');

  const isPersonalValid = !personalErrors;
  const isExperienceValid = experiences.length > 0 && !experienceErrors;
  const isSkillsValid = skills.length >= 3 && !skillsErrors;
  const isResumeValid = !!resume && !resumeErrors;

  const issues =
    (!isPersonalValid ? 1 : 0) +
    (!isExperienceValid ? 1 : 0) +
    (!isSkillsValid ? 1 : 0) +
    (!isResumeValid ? 1 : 0);

  return (
    <section className="p-8">
      <div className="bg-gradient-to-br from-amber-50 border-2 border-amber-200 rounded-2xl p-6">
        <div className="gap-4">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-amber-900">Form Summary</h3>
              <p className="text-sm text-amber-700">
                Review the details before submitting
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-3">
              <Row
                subtitle={
                  isPersonalValid
                    ? 'All required fields completed'
                    : 'Some personal details are missing'
                }
                title={'Personal Details'}
                valid={isPersonalValid}
              />

              <Row
                subtitle={
                  isExperienceValid
                    ? 'Experience details look good'
                    : 'Please complete at least one experience'
                }
                title={'Work Experience'}
                valid={isExperienceValid}
              />

              <Row
                subtitle={
                  isSkillsValid
                    ? 'Skills selected successfully'
                    : 'Select at least 3 skills'
                }
                title={'Skills'}
                valid={isSkillsValid}
              />

              <Row
                subtitle={
                  isResumeValid
                    ? 'Resume uploaded and validated'
                    : 'Resume is missing or invalid'
                }
                title={'Resume Upload'}
                valid={isResumeValid}
              />
            </div>

            <div className="mt-5 pt-5 border-t border-amber-200 flex items-center justify-between">
              <div className="text-sm">
                <span className="font-bold text-amber-900">{issues}</span>
                <span className="text-amber-700"> issues remaining</span>
              </div>
              <div className="text-sm">
                <span className="font-bold text-green-700">{4 - issues}</span>
                <span className="text-slate-600"> completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Validation;
