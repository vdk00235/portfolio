import { MouseEvent } from 'react';
import { Code, Smartphone, Wind, Box, Palette, Zap, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skills = [
  {
    key: 'react' as const,
    name: 'React',
    icon: Code,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    key: 'reactNative' as const,
    name: 'React Native',
    icon: Smartphone,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    key: 'flutter' as const,
    name: 'Flutter',
    icon: Box,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    key: 'bootstrap' as const,
    name: 'Bootstrap',
    icon: Palette,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    key: 'tailwind' as const,
    name: 'Tailwind CSS',
    icon: Wind,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    key: 'fastapi' as const,
    name: 'FastAPI',
    icon: Zap,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    key: 'node' as const,
    name: 'Node.js',
    icon: Server,
    color: 'from-amber-500 to-yellow-500',
  },
];

export function Skills() {
  const { t } = useLanguage();

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="skills" className="py-20 px-4 bg-muted/40 dark:bg-muted/20 border-y border-border transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.skills.subtitle}</p>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                onMouseMove={handleMouseMove}
                className="group spotlight hairline-gradient glass-card relative p-6 rounded-2xl shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.07] rounded-2xl transition-opacity duration-300`}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-card`}
                  >
                    <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{t.skills[skill.key]}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 border border-accent text-accent rounded-lg font-semibold hover:bg-accent-soft transition-colors"
          >
            {t.nav.contactUs}
          </a>
        </div>
      </div>
    </section>
  );
}
