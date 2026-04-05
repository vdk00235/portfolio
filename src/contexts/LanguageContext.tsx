import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    search: string;
    filter: string;
    all: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    whatsapp: string;
    getInTouch: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Mahamat Mahamat Tahir',
      role: 'Full-Stack Developer',
      description: 'Building exceptional digital experiences with modern technologies. Specialized in React, React Native, Flutter, and FastAPI.',
      cta: 'View My Work',
    },
    about: {
      title: 'About Me',
      description: 'I\'m a passionate Full-Stack Developer with expertise in building web and mobile applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.',
    },
    skills: {
      title: 'Technologies & Skills',
      subtitle: 'Tools and frameworks I work with',
    },
    projects: {
      title: 'Featured Projects',
      search: 'Search projects...',
      filter: 'Filter by technology',
      all: 'All',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s work together on your next project',
      email: 'Email',
      whatsapp: 'WhatsApp',
      getInTouch: 'Contact Me',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Mahamat Mahamat Tahir',
      role: 'Développeur Full-Stack',
      description: 'Création d\'expériences numériques exceptionnelles avec des technologies modernes. Spécialisé en React, React Native, Flutter et FastAPI.',
      cta: 'Voir Mon Travail',
    },
    about: {
      title: 'À Propos',
      description: 'Je suis un développeur Full-Stack passionné avec une expertise dans la création d\'applications web et mobiles. J\'aime créer des solutions élégantes à des problèmes complexes et rester à jour avec les dernières technologies.',
    },
    skills: {
      title: 'Technologies & Compétences',
      subtitle: 'Outils et frameworks avec lesquels je travaille',
    },
    projects: {
      title: 'Projets en Vedette',
      search: 'Rechercher des projets...',
      filter: 'Filtrer par technologie',
      all: 'Tous',
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'Travaillons ensemble sur votre prochain projet',
      email: 'Email',
      whatsapp: 'WhatsApp',
      getInTouch: 'Me Contacter',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'محمد محمد طاهر',
      role: 'مطور ويب متكامل',
      description: 'بناء تجارب رقمية استثنائية باستخدام التقنيات الحديثة. متخصص في React و React Native و Flutter و FastAPI.',
      cta: 'اعرض أعمالي',
    },
    about: {
      title: 'نبذة عني',
      description: 'أنا مطور ويب متكامل شغوف بخبرة في بناء تطبيقات الويب والهاتف المحمول. أحب إنشاء حلول أنيقة لمشاكل معقدة والبقاء على اطلاع بأحدث التقنيات.',
    },
    skills: {
      title: 'التقنيات والمهارات',
      subtitle: 'الأدوات والأطر التي أعمل بها',
    },
    projects: {
      title: 'المشاريع المميزة',
      search: 'البحث عن المشاريع...',
      filter: 'التصفية حسب التقنية',
      all: 'الكل',
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لنعمل معاً على مشروعك القادم',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      getInTouch: 'اتصل بي',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
