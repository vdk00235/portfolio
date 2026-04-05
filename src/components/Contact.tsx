import { Mail, MessageCircle, Send, Github, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'mhtmht2400@gmail.com',
      href: 'mailto:mhtmht2400@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: '+235 97 07 24 00',
      href: 'https://wa.me/23597072400',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/vdk00235',
      label: 'GitHub',
    },
    {
      icon: Globe, // هنا أيقونة الموقع أو أي أيقونة مناسبة
      href: 'https://baaeed.com/u/softwarePioneer',
      label: 'Baaed',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {method.label}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {method.value}
                  </p>

                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    <span>{t.contact.getInTouch}</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Mahamat Mahamat Tahir. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
