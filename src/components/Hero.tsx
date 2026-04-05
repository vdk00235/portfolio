import { ArrowRight, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {t.hero.role}
            </span>
          </div>

          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {t.hero.name}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:scale-105 transition-all"
            >
              {t.contact.getInTouch}
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative w-full h-96 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform -rotate-6 opacity-20"></div>
            <div className="relative h-full bg-gradient-to-br from-blue-600/90 to-cyan-600/90 rounded-2xl flex items-center justify-center">
              <Code2 className="w-32 h-32 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
