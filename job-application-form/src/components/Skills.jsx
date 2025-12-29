import { Award, Check } from 'lucide-react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const initialSkills = [
  'JavaScript',
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'AWS',
  'Docker',
  'GraphQL',
  'MongoDB',
  'PostgreSQL',
  'Git',
  'CI/CD',
  'REST API',
  'Microservices',
  'Kubernetes',
  'Redis',
  'Vue.js',
  'Angular',
  'Next.js',
  'Express.js',
];

const Skills = () => {
  const [customSkill, setCustomSkill] = useState('');
  const [skillOptions, setSkillOptions] = useState(initialSkills);

  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selected = watch('skills') || [];

  const toggleSkills = (item) => {
    const updatedSkills = selected.includes(item)
      ? selected.filter((i) => i !== item)
      : [...selected, item];

    setValue('skills', updatedSkills, {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
  };

  const addCustomSkill = () => {
    const skill = customSkill.trim();
    if (!skill) return;

    if (!skillOptions.includes(skill)) {
      setSkillOptions([...skillOptions, skill]);
    }

    if (!selected.includes(skill)) {
      setValue('skills', [...selected, skill], {
        shouldValidate: true,
        shouldDirty: true,
      });
    }

    setCustomSkill('');
  };

  const removeSkill = (skillToRemove) => {
    setValue(
      'skills',
      selected.filter((s) => s !== skillToRemove),
      { shouldValidate: true, shouldDirty: true }
    );
  };

  return (
    <section className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Skills & Expertise
          </h2>
          <p className="text-sm text-slate-500">Add your skills here</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {skillOptions.map((skill) => (
          <label
            key={skill}
            className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 hover:border-emerald-400 hover:bg-emerald-50/50
            cursor-pointer transition-all group 
            ${
              selected.includes(skill)
                ? 'border-emerald-400 bg-emerald-50/50'
                : 'border-slate-200'
            }`}
          >
            <input
              type="checkbox"
              className="peer sr-only"
              checked={selected.includes(skill)}
              onChange={() => toggleSkills(skill)}
            />
            <div
              className="w-5 h-5 rounded-md border-2 border-slate-300 peer-checked:bg-emerald-400 peer-checked:border-emerald-400 flex
            items-center justify-center transition-all"
            >
              <Check
                className="w-3 h-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                strokeWidth={3}
              />
            </div>

            <span className="text-sm font-semibold text-slate-700 peer-checked:text-emerald-700">
              {skill}
            </span>
          </label>
        ))}
        {errors?.skills?.message && (
          <p className="text-red-600 text-sm mt-1 font-semibold">
            {errors.skills.message}
          </p>
        )}
      </div>

      {selected.length > 0 && (
        <div className="mt-4">
          <h2 className="font-bold text-2xl mb-2">Selected Skills</h2>
          <div className="flex flex-wrap gap-2">
            {selected.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => removeSkill(skill)}
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-semibold"
              >
                {skill} <span className="text-emerald-600 font-bold">×</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <label className="text-sm font-semibold text-slate-700 mb-2">
          Add Custom Skill
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            placeholder="e.g. Machine Learning"
            className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 transition-all outline-none"
          />
          <button
            disabled={!customSkill.trim()}
            onClick={addCustomSkill}
            type="button"
            className={`px-6 py-3 rounded-xl font-semibold text-white bg-emerald-600 ${
              !customSkill.trim()
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-emerald-500 transition-all active:scale-95'
            }`}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
