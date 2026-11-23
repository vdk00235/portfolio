import { useState, useEffect } from 'react';
import { Moon, Sun, Languages, Menu, X, Check, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const languages = [
    { code: 'en' as const, label: 'English' },
    { code: 'fr' as const, label: 'Français' },
    { code: 'ar' as const, label: 'العربية' },
  ];

  useEffect(() => {
    const ids = ['home', 'about', 'skills', 'projects', 'contact'];
    const offset = 120;

    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      let current = '#home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            onClick={() => setActiveSection('#home')}
            className="flex-shrink-0"
            aria-label="Go to home"
          >
            <img
              src="/mt-logo-new.svg"
              alt="MT logo"
              className="h-10 w-10 rounded-xl"
              width="40"
              height="40"
            />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="#request"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-accent text-white dark:text-background text-sm font-semibold shadow-card hover:shadow-lift hover:-translate-y-0.5 hover-glow transition-all duration-300"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              {t.nav.request}
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 rounded-lg bg-muted hover:bg-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Change language"
                aria-expanded={showLangMenu}
              >
                <Languages className="w-5 h-5" />
              </button>

              {showLangMenu && (
                <div className="absolute end-0 mt-2 w-40 bg-card dark:bg-card rounded-lg shadow-lift border border-border py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-start hover:bg-muted transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                        language === lang.code ? 'text-accent font-semibold' : 'text-foreground'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-muted hover:bg-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-background border-b border-border overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          <a
            href="#request"
            onClick={() => setMobileMenuOpen(false)}
            className="mb-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-accent text-white dark:text-background text-sm font-semibold shadow-card hover-glow"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            {t.nav.request}
          </a>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveSection(item.href);
              }}
              className={`block py-2 rounded-lg px-3 font-medium transition-colors ${
                activeSection === item.href
                  ? 'bg-accent-soft text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
