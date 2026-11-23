import { Navigation } from './components/Navigation';
import { Contact } from './components/Contact';
import { useLanguage } from './contexts/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';

export function ContactPage() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background transition-colors">
      <Navigation />
      <main className="pt-16">
        <section className="px-4 py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto text-center" data-reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
              {t.contactPage.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              {t.contactPage.intro}
            </p>
            <a
              href="#request"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-gradient-accent text-white dark:text-background rounded-lg font-semibold shadow-card hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.contactPage.startProject}
            </a>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}
