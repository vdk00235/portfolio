import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
    request: string;
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
    react: string;
    reactNative: string;
    flutter: string;
    bootstrap: string;
    tailwind: string;
    fastapi: string;
    node: string;
  };
  projects: {
    title: string;
    search: string;
    filter: string;
    all: string;
    viewProject: string;
    noResults: string;
    details: string;
    close: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    whatsapp: string;
    getInTouch: string;
    form: {
      heading: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      description: string;
      descriptionPlaceholder: string;
      files: string;
      submit: string;
      required: string;
      validEmail: string;
      sendNote: string;
      sending: string;
      error: string;
      success: string;
    };
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
      request: 'Request a Project',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Mahamat Mahamat Tahir',
      role: 'Full-Stack Developer',
      description: 'Building exceptional digital experiences with modern technologies. Specialized in React, React Native, Flutter, FastAPI and Node.js.',
      cta: 'View My Work',
    },
    about: {
      title: 'About Me',
      description: 'I\'m a passionate Full-Stack Developer with expertise in building web and mobile applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.',
    },
    skills: {
      title: 'Technologies & Skills',
      subtitle: 'Tools and frameworks I work with',
      react: 'JavaScript framework for building UIs',
      reactNative: 'Mobile app development',
      flutter: 'Cross-platform application development',
      bootstrap: 'CSS framework for responsive design',
      tailwind: 'Modern CSS design system',
      fastapi: 'Python framework for building APIs',
      node: 'JavaScript runtime for building servers',
    },
    projects: {
      title: 'Featured Projects',
      search: 'Search projects...',
      filter: 'Filter by technology',
      all: 'All',
      viewProject: 'View Project',
      noResults: 'No projects found matching your criteria.',
      details: 'Details',
      close: 'Close',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s work together on your next project',
      email: 'Email',
      whatsapp: 'WhatsApp',
      getInTouch: 'Contact Me',
      form: {
        heading: 'Request a Project',
        name: 'Your Name',
        namePlaceholder: 'What should I call you?',
        email: 'Your Email',
        emailPlaceholder: 'name@example.com',
        description: 'Project Description',
        descriptionPlaceholder: 'Tell me about your project — goals, features, timeline...',
        files: 'Files or Images (optional)',
        submit: 'Send Request',
        required: 'This field is required',
        validEmail: 'Please enter a valid email address',
        sendNote: 'Your request goes straight to my inbox.',
        sending: 'Sending...',
        error: 'Something went wrong. Please try again, or email me directly at mhtmht2400@gmail.com.',
        success: 'Thanks! I will get back to you soon.',
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      request: 'Demander un Projet',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Mahamat Mahamat Tahir',
      role: 'Développeur Full-Stack',
      description: 'Création d\'expériences numériques exceptionnelles avec des technologies modernes. Spécialisé en React, React Native, Flutter , FastAPI et Node.js.',
      cta: 'Voir Mon Travail',
    },
    about: {
      title: 'À Propos',
      description: 'Je suis un développeur Full-Stack passionné avec une expertise dans la création d\'applications web et mobiles. J\'aime créer des solutions élégantes à des problèmes complexes et rester à jour avec les dernières technologies.',
    },
    skills: {
      title: 'Technologies & Compétences',
      subtitle: 'Outils et frameworks avec lesquels je travaille',
      react: 'Framework JavaScript pour construire des interfaces',
      reactNative: "Développement d'applications mobiles",
      flutter: "Développement d'applications multiplateformes",
      bootstrap: 'Framework CSS pour un design responsive',
      tailwind: 'Système de design CSS moderne',
      fastapi: 'Framework Python pour créer des APIs',
      node: "Runtime JavaScript pour construire des serveurs",
    },
    projects: {
      title: 'Projets en Vedette',
      search: 'Rechercher des projets...',
      filter: 'Filtrer par technologie',
      all: 'Tous',
      viewProject: 'Voir le projet',
      noResults: 'Aucun projet ne correspond à votre recherche.',
      details: 'Détails',
      close: 'Fermer',
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: 'Travaillons ensemble sur votre prochain projet',
      email: 'Email',
      whatsapp: 'WhatsApp',
      getInTouch: 'Me Contacter',
      form: {
        heading: 'Demander un Projet',
        name: 'Votre Nom',
        namePlaceholder: 'Comment vous appeler ?',
        email: 'Votre Email',
        emailPlaceholder: 'nom@exemple.com',
        description: 'Description du Projet',
        descriptionPlaceholder: 'Parlez-moi de votre projet — objectifs, fonctionnalités, calendrier...',
        files: 'Fichiers ou Images (facultatif)',
        submit: 'Envoyer la Demande',
        required: 'Ce champ est obligatoire',
        validEmail: 'Veuillez saisir une adresse email valide',
        sendNote: 'Votre demande arrivera directement dans ma boîte de réception.',
        sending: 'Envoi en cours...',
        error: 'Une erreur est survenue. Veuillez réessayer, ou écrivez-moi directement à mhtmht2400@gmail.com.',
        success: 'Merci ! Je vous recontacterai bientôt.',
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل',
      request: 'اطلب مشروعاً',
    },
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'محمد محمد طاهر',
      role: 'مطور ويب متكامل',
      description: 'بناء تجارب رقمية استثنائية باستخدام التقنيات الحديثة. متخصص في React و React Native و Flutter و FastAPI و Node.js.',
      cta: 'اعرض أعمالي',
    },
    about: {
      title: 'نبذة عني',
      description: 'أنا مطور ويب متكامل شغوف بخبرة في بناء تطبيقات الويب والهاتف المحمول. أحب إنشاء حلول أنيقة لمشاكل معقدة والبقاء على اطلاع بأحدث التقنيات.',
    },
    skills: {
      title: 'التقنيات والمهارات',
      subtitle: 'الأدوات والأطر التي أعمل بها',
      react: 'إطار عمل جافاسكريبت لبناء واجهات المستخدم',
      reactNative: 'تطوير تطبيقات الهاتف المحمول',
      flutter: 'تطوير تطبيقات متعددة المنصات',
      bootstrap: 'إطار عمل CSS للتصميم المتجاوب',
      tailwind: 'نظام تصميم CSS حديث',
      fastapi: 'إطار عمل بايثون لبناء واجهات برمجة التطبيقات',
      node: 'بيئة تشغيل جافاسكريبت لبناء الخوادم',
    },
    projects: {
      title: 'المشاريع المميزة',
      search: 'البحث عن المشاريع...',
      filter: 'التصفية حسب التقنية',
      all: 'الكل',
      viewProject: 'عرض المشروع',
      noResults: 'لا توجد مشاريع مطابقة لمعايير البحث.',
      details: 'التفاصيل',
      close: 'إغلاق',
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لنعمل معاً على مشروعك القادم',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      getInTouch: 'اتصل بي',
      form: {
        heading: 'اطلب مشروعاً',
        name: 'الاسم',
        namePlaceholder: 'كيف أناديك؟',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'name@example.com',
        description: 'وصف المشروع',
        descriptionPlaceholder: 'أخبرني عن مشروعك — الأهداف، المميزات، الجدول الزمني...',
        files: 'الملفات أو الصور (اختياري)',
        submit: 'إرسال الطلب',
        required: 'هذا الحقل مطلوب',
        validEmail: 'يرجى إدخال بريد إلكتروني صحيح',
        sendNote: 'سيصل طلبك مباشرة إلى بريدي الوارد.',
        sending: 'جارٍ الإرسال...',
        error: 'حدث خطأ ما. حاول مرة أخرى أو راسلني مباشرة على mhtmht2400@gmail.com.',
        success: 'شكراً لك! سأتواصل معك قريباً.',
      },
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
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

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
