import { useState } from 'react';
import { Search, ExternalLink, Code, Smartphone, Wind, Box, Palette, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, typeof Code> = {
  React: Code,
  'React Native': Smartphone,
  Flutter: Box,
  Bootstrap: Palette,
  'Tailwind CSS': Wind,
  FastAPI: Zap,
};

const projects = [
  {
    id: 1,
    title: 'Hasib',
    description: 'Full-stack wallet solution with payment integration',
    technologies: ['React', 'Tailwind CSS', 'FastAPI'],
    image: 'https://i.postimg.cc/HxFZ7QMq/2.png',
  },
  {
    id: 2,
    title: 'LGK site',
    description: 'Corporate website for a leading logistics company',
    technologies: ['React', 'FastAPI'],
    image: 'https://i.postimg.cc/T2WHv48k/c956a60f-1a09-4f27-a7a6-483f406a1ab5.png',
  },
  {
    id: 3,
    title: 'Dashboard Admin',
    description: 'Admin dashboard for managing users and content',
    technologies: ['React', 'Bootstrap', 'FastAPI'],
    image: 'https://i.postimg.cc/T1mkjpjS/60a2f8d9_3d76_45f9_bc24_7bd43bf42fa2.png',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    technologies: ['React', 'Bootstrap', 'FastAPI'],
    image: 'https://i.postimg.cc/T1mkjpjS/60a2f8d9_3d76_45f9_bc24_7bd43bf42fa2.png',
  },
  {
    id: 5,
    title: 'Marketplace App',
    description: 'Mobile marketplace application for buying and selling products',
    technologies: ['React Native', 'FastAPI'],
    image: 'https://i.postimg.cc/fW0gQr41/a156f4db_3a66_4443_a61a_68d9ef040b61.png',
  },
  {
    id: 6,
    title: 'Restaurant App',
    description: 'Mobile app for restaurant reservations and menu browsing',
    technologies: ['Flutter', 'FastAPI'],
    image: 'https://i.postimg.cc/yx9fhkXJ/530afea5_ec74_4c32_a132_599d73c4e873.png',
  },
  
];

export function Projects() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const allTechnologies = ['All', ...Array.from(new Set(projects.flatMap(p => p.technologies)))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.projects.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedTech === tech
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500'
                }`}
              >
                {tech === 'All' ? t.projects.all : tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => {
                    const Icon = iconMap[tech] || Code;
                    return (
                      <div
                        key={tech}
                        className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        <Icon className="w-3 h-3 mr-1" />
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
