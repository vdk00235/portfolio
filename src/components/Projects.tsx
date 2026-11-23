import { useEffect, useState, MouseEvent } from 'react';
import {
  Search,
  ExternalLink,
  Code,
  Smartphone,
  Wind,
  Box,
  Palette,
  Zap,
  Eye,
  X,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, typeof Code> = {
  React: Code,
  'React Native': Smartphone,
  Flutter: Box,
  Bootstrap: Palette,
  'Tailwind CSS': Wind,
  FastAPI: Zap,
};

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hasib',
    description: 'Full-stack wallet solution with payment integration',
    technologies: ['React', 'Tailwind CSS', 'FastAPI'],
    image: 'https://i.postimg.cc/HxFZ7QMq/2.png',
    highlights: [
      'Payment integration built on FastAPI',
      'Responsive dashboard UI',
      'Secure transaction history & balance tracking',
    ],
  },
  {
    id: 2,
    title: 'LGK site',
    description: 'Corporate website for a leading logistics company',
    technologies: ['React', 'FastAPI'],
    image: 'https://i.postimg.cc/T2WHv48k/c956a60f-1a09-4f27-a7a6-483f406a1ab5.png',
    highlights: [
      'Multi-page corporate layout',
      'FastAPI-powered contact endpoints',
      'SEO-friendly and performant structure',
    ],
  },
  {
    id: 3,
    title: 'Dashboard Admin',
    description: 'Admin dashboard for managing users and content',
    technologies: ['React', 'Bootstrap', 'FastAPI'],
    image: 'https://i.postimg.cc/T1mkjpjS/60a2f8d9-3d76-45f9-bc24-7bd43bf42fa2.png',
    highlights: [
      'User and content management',
      'Real-time statistics widgets',
      'Clean data tables with filtering',
    ],
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    technologies: ['React', 'Bootstrap', 'FastAPI'],
    image: 'https://i.postimg.cc/T1mkjpjS/60a2f8d9-3d76-45f9-bc24-7bd43bf42fa2.png',
    highlights: [
      'Cross-platform analytics overview',
      'Custom reporting by channel',
      'Performance insights at a glance',
    ],
  },
  {
    id: 5,
    title: 'Marketplace App',
    description: 'Mobile marketplace application for buying and selling products',
    technologies: ['React Native', 'FastAPI'],
    image: 'https://i.postimg.cc/fW0gQr41/a156f4db-3a66-4443-a61a-68d9ef040b61.png',
    highlights: [
      'Buy & sell flow backed by FastAPI',
      'Product search with images',
      'Built-in messaging between users',
    ],
  },
  {
    id: 6,
    title: 'Restaurant App',
    description: 'Mobile app for restaurant reservations and menu browsing',
    technologies: ['Flutter', 'FastAPI'],
    image: 'https://i.postimg.cc/yx9fhkXJ/530afea5-ec74-4c32-a132-599d73c4e873.png',
    highlights: [
      'Reservation system with availability',
      'Menu browsing by category',
      'Table availability and booking flow',
    ],
  },
];

export function Projects() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allTechnologies = ['All', ...Array.from(new Set(projects.flatMap(p => p.technologies)))];

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query);
    const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <section id="projects" className="py-20 px-4 bg-background transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {t.projects.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto" />
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4" data-reveal>
          <div className="flex-1 relative">
            <Search
              className="absolute start-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder={t.projects.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={t.projects.search}
              className="w-full ps-10 pe-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                aria-pressed={selectedTech === tech}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  selectedTech === tech
                    ? 'bg-gradient-accent text-white dark:text-background shadow-card'
                    : 'bg-card text-muted-foreground border border-border hover:border-accent hover:text-accent'
                }`}
              >
                {tech === 'All' ? t.projects.all : tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal>
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              onMouseMove={handleMouseMove}
              className="group spotlight hairline-gradient glass-card relative rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="glimmer absolute inset-0 z-10" aria-hidden="true" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-100"
                  >
                    {t.projects.viewProject}
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const Icon = iconMap[tech] || Code;
                    return (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-accent-soft dark:bg-accent-soft text-accent rounded-full text-sm font-medium"
                      >
                        <Icon className="w-3 h-3" aria-hidden="true" />
                        {tech}
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  {t.projects.details}
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">{t.projects.noResults}</p>
          </div>
        )}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useLanguage();

  return (
    <div
      className="fixed inset-0 z-[60] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-backdrop-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed top-1/2 left-1/2 w-full max-w-2xl max-h-[88vh] overflow-y-auto glass-card rounded-2xl shadow-lift hairline-gradient animate-modal-in">
        <div className="relative h-56 md:h-64 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" aria-hidden="true" />
          <button
            onClick={onClose}
            className="absolute top-4 end-4 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors cursor-pointer"
            aria-label={t.projects.close}
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-lg mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => {
              const Icon = iconMap[tech] || Code;
              return (
                <div
                  key={tech}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent-soft dark:bg-accent-soft text-accent rounded-full text-sm font-medium"
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  {tech}
                </div>
              );
            })}
          </div>

          <ul className="space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-foreground">{highlight}</span>
              </li>
            ))}
          </ul>

          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-accent text-white dark:text-background rounded-lg font-semibold shadow-card hover:shadow-lift hover:-translate-y-0.5 hover-glow transition-all duration-300"
          >
            {t.projects.viewProject}
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="/contact"
            className="mt-8 ms-3 inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent-soft transition-colors"
          >
            {t.nav.contactUs}
          </a>
        </div>
      </div>
    </div>
  );
}
