import { Code, Smartphone, Wind, Box, Palette, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skills = [
  {
    name: 'React',
    description: 'JavaScript framework for building UIs',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'React Native',
    description: 'Mobile app development',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Flutter',
    description: 'Cross-platform application development',
    icon: Box,
    color: 'from-sky-500 to-blue-500',
  },
  {
    name: 'Bootstrap',
    description: 'CSS framework for responsive design',
    icon: Palette,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Tailwind CSS',
    description: 'Modern CSS design system',
    icon: Wind,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    name: 'FastAPI',
    description: 'Python framework for building APIs',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
  },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>

                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
