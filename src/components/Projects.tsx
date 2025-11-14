import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { usePortfolio } from '../context/portfolioContext';

const Projects: React.FC = () => {
  const { data } = usePortfolio();
  const { projects } = data;

  return (
    <section id="projects" className="section-container">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Featured Projects
          </h2>
          <p className="text-text-secondary">
            Some of my recent work and side projects
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card group hover:border-primary-500/50 space-y-4 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image placeholder */}
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg bg-bg-secondary"
                />
              ) : (
                <div className="w-full h-48 bg-linear-to-br from-primary-500/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-500/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-bg-secondary border border-border rounded text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2 border-t border-border">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-primary-400 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-muted hover:text-primary-400 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;