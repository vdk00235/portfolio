import { ArrowRight, TerminalSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const lines = [
    { prompt: '$ whoami', output: 'mahamattahir' },
    { prompt: '$ cat role.txt', output: t.hero.role },
    { prompt: '$ skills --quick --list', output: 'React · React Native · Flutter · FastAPI · Node.js' },
    { prompt: '$ status', output: '● open to opportunities' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden bg-background transition-colors"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -start-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -end-32 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-soft dark:bg-accent-soft rounded-full">
            <TerminalSquare className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-accent">{t.hero.role}</span>
          </div>

          <div>
            <p className="text-lg text-muted-foreground mb-2">{t.hero.greeting}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              {t.hero.name}
            </h1>
            <div className="h-1 w-24 bg-gradient-accent rounded-full" />
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-accent text-white dark:text-background rounded-lg font-semibold shadow-card hover:shadow-lift hover:-translate-y-0.5 hover-glow transition-all duration-300"
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border-2 border-border text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.contact.getInTouch}
            </a>
          </div>
        </div>

        <div className="relative hidden md:block" aria-hidden="true">
          <div className="relative w-full animate-float">
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl rotate-3 opacity-20" />
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl -rotate-3 opacity-20" />

            <div className="relative bg-[#141310] dark:bg-[#121110] border border-border rounded-2xl shadow-lift overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/70 bg-background/60">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ms-3 text-xs font-display text-muted-foreground">
                  mahamat@portfolio — zsh
                </span>
              </div>

              <div className="p-6 font-display text-sm space-y-3">
                {lines.map((line, index) => (
                  <div key={line.prompt} className="animate-fade-in-up" style={{ animationDelay: `${index * 220}ms` }}>
                    <p className="text-stone-400">
                      <span className="text-amber-400">{line.prompt}</span>
                    </p>
                    <p className="text-amber-200 mt-0.5">{line.output}</p>
                  </div>
                ))}

                <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${lines.length * 220}ms` }}>
                  <span className="text-amber-400">$</span>
                  <span className="w-2.5 h-5 bg-amber-400 animate-caret" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}