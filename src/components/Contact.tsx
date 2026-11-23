import { Mail, MessageCircle, Send, Github, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RequestForm } from './RequestForm';

export function Contact() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'opicasoft@gmail.com',
      href: 'mailto:opicasoft@gmail.com',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: '+235 97 07 24 00',
      href: 'https://wa.me/23597072400',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/vdk00235',
      label: 'GitHub',
    },
    {
      icon: Globe,
      href: 'https://baaeed.com/u/softwarePioneer',
      label: 'Baaed',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/40 dark:bg-muted/20 border-t border-border transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto mt-6" />
          <a
            href="/contact"
            className="mt-7 inline-flex items-center justify-center px-5 py-2.5 border border-accent text-accent rounded-lg font-semibold hover:bg-accent-soft transition-colors"
          >
            {t.nav.contactUs}
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" data-reveal>
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group hairline-gradient glass-card relative p-8 rounded-2xl shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-[0.07] rounded-2xl transition-opacity duration-300`}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-card`}
                  >
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{method.label}</h3>
                  <p className="text-muted-foreground mb-4">{method.value}</p>

                  <div className="flex items-center font-medium text-accent">
                    <span>{t.contact.getInTouch}</span>
                    <Send
                      className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto" data-reveal>
          <RequestForm />
        </div>

        <div className="mt-12 flex justify-center gap-4" data-reveal>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent-foreground hover:bg-gradient-accent hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-card"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">© 2024 Mahamat Mahamat Tahir. All rights reserved.</p>
          <a href="/contact" className="mt-3 inline-block font-medium text-accent hover:text-foreground transition-colors">
            {t.nav.contactUs}
          </a>
        </div>
      </div>
    </section>
  );
}
