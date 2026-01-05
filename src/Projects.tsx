import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY3MzM4ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-blue-300 to-purple-300'
    },
    {
      title: 'Mobile Fitness App',
      description: 'A cross-platform fitness tracking app with workout plans, progress analytics, and social features to keep users motivated.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY3MjQ3NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-purple-300 to-pink-300'
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive data visualization platform that transforms complex datasets into actionable insights with interactive charts and reports.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzMyNjMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TypeScript', 'D3.js', 'Python', 'REST API'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-pink-300 to-blue-300'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-2.5 h-2.5 bg-blue-200 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-[25%] right-[8%] w-2 h-2 bg-purple-200 rounded-full opacity-30 animate-float-delay-2"></div>
        <div className="absolute top-[50%] left-[15%] w-2 h-2 bg-pink-200 rounded-full opacity-40 animate-float-delay-1"></div>
        <div className="absolute bottom-[25%] right-[18%] w-3 h-3 bg-blue-200 rounded-full opacity-30 animate-float-delay-3"></div>
        <div className="absolute top-[40%] right-[25%] text-purple-200 opacity-40 animate-float">+</div>
        <div className="absolute bottom-[40%] left-[12%] text-pink-200 opacity-30 animate-float-delay-2">+</div>
        <div className="absolute top-[65%] right-[10%] w-2 h-2 bg-purple-200 opacity-40 rotate-45 animate-float-delay-1"></div>
        <div className="absolute bottom-[15%] left-[22%] text-blue-200 opacity-40 animate-float-delay-3">✦</div>
        <div className="absolute top-[20%] left-[35%] w-2 h-2 bg-pink-200 opacity-30 rotate-45 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-gray-900 text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center gap-4`}>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform scale-0 group-hover:scale-100 transition-transform duration-300"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} className="text-gray-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} className="text-gray-900" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            View more projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}