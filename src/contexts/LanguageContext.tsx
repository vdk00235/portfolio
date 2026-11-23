import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
    contactUs: string;
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
      fallback: string;
      success: string;
    };
  };
  contactPage: {
    title: string;
    intro: string;
    startProject: string;
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
      contactUs: 'Contact Us',
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
        sendNote: 'If delivery fails, you can review and send the prepared email yourself.',
        sending: 'Sending...',
        error: 'The request could not be sent. Please try again or email opicasoft@gmail.com directly.',
        fallback: 'Email delivery could not be confirmed. We tried to open a draft in your email app; if it did not open, contact opicasoft@gmail.com directly.',
        success: 'Thanks, your request was sent successfully.',
      },
    },
    contactPage: {
      title: 'Contact Us',
      intro: 'Have a project in mind? Reach out by email or WhatsApp to discuss your goals and the next steps. You can also send a project inquiry using the form below.',
      startProject: 'Start a Project',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      contactUs: 'Contactez-nous',
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
        sendNote: 'Si l’envoi échoue, vous pourrez vérifier et envoyer vous-même le courriel préparé.',
        sending: 'Envoi en cours...',
        error: 'La demande n’a pas pu être envoyée. Veuillez réessayer ou écrire directement à opicasoft@gmail.com.',
        fallback: 'L’envoi du courriel n’a pas pu être confirmé. Nous avons tenté d’ouvrir un brouillon dans votre application de messagerie ; s’il ne s’est pas ouvert, écrivez directement à opicasoft@gmail.com.',
        success: 'Merci, votre demande a bien été envoyée.',
      },
    },
    contactPage: {
      title: 'Contactez-nous',
      intro: 'Vous avez un projet en tête ? Écrivez-nous par e-mail ou sur WhatsApp pour discuter de vos objectifs et des prochaines étapes. Vous pouvez aussi envoyer une demande de projet avec le formulaire ci-dessous.',
      startProject: 'Démarrer un projet',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل',
      contactUs: 'اتصل بنا',
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
        sendNote: 'إذا تعذر الإرسال، يمكنك مراجعة مسودة البريد وإرسالها بنفسك.',
        sending: 'جارٍ الإرسال...',
        error: 'تعذر إرسال الطلب. يرجى المحاولة مجدداً أو مراسلة opicasoft@gmail.com مباشرة.',
        fallback: 'تعذر تأكيد إرسال البريد الإلكتروني. حاولنا فتح مسودة في تطبيق البريد؛ إذا لم تُفتح، يرجى مراسلة opicasoft@gmail.com مباشرة.',
        success: 'شكراً لك، تم إرسال طلبك بنجاح.',
      },
    },
    contactPage: {
      title: 'اتصل بنا',
      intro: 'هل لديك مشروع؟ تواصل عبر البريد الإلكتروني أو واتساب لمناقشة أهدافك والخطوات التالية. يمكنك أيضاً إرسال تفاصيل المشروع باستخدام النموذج أدناه.',
      startProject: 'ابدأ مشروعاً',
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
    const isContactPage = window.location.pathname.replace(/\/$/, '') === '/contact';
    const metadata = {
      en: {
        title: isContactPage ? 'Contact Us | Opica Soft' : 'Mahamat Mahamat Tahir | Full-Stack Developer Portfolio',
        description: isContactPage ? 'Contact Opica Soft about a project by email, WhatsApp, or the project inquiry form.' : 'Portfolio of Mahamat Mahamat Tahir, a full-stack developer building web and mobile applications with React, React Native, Flutter, FastAPI and Node.js. Explore selected projects and contact Opica Soft.',
      },
      fr: {
        title: isContactPage ? 'Contactez-nous | Opica Soft' : 'Mahamat Mahamat Tahir | Portfolio de développeur full-stack',
        description: isContactPage ? 'Contactez Opica Soft au sujet d’un projet par e-mail, WhatsApp ou le formulaire de demande.' : 'Portfolio de Mahamat Mahamat Tahir, développeur full-stack d’applications web et mobiles avec React, React Native, Flutter, FastAPI et Node.js. Découvrez ses projets et contactez Opica Soft.',
      },
      ar: {
        title: isContactPage ? 'اتصل بنا | Opica Soft' : 'محمد محمد طاهر | معرض أعمال مطور متكامل',
        description: isContactPage ? 'تواصل مع Opica Soft بشأن مشروع عبر البريد الإلكتروني أو واتساب أو نموذج طلب المشروع.' : 'معرض أعمال محمد محمد طاهر، مطور متكامل لتطبيقات الويب والهواتف باستخدام React وReact Native وFlutter وFastAPI وNode.js. استكشف المشاريع وتواصل مع Opica Soft.',
      },
    }[language];
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
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
