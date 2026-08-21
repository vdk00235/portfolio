import { User2, Code2, Smartphone, Server } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const focusAreas = [
  { icon: Code2, label: 'Web' },
  { icon: Smartphone, label: 'Mobile' },
  { icon: Server, label: 'APIs' },
  { icon: User2, label: 'UI/UX' },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-background transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center" data-reveal>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              {t.about.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-accent rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium border-2 border-border text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              {t.contact.getInTouch}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.label}
                  className="group hairline-gradient glass-card relative rounded-2xl p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-soft dark:bg-accent-soft rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{area.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}