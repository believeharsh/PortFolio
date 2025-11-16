import React, { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { usePortfolio } from "../context/portfolioContext";
import TechStackCard from "./techstack-card/TechStackCard";

const Projects: React.FC = () => {
  const { data } = usePortfolio();
  const { projects } = data;
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

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
              className="bg-bg-tertiary cursor-pointer border-2 border-border rounded-lg overflow-hidden flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="relative w-full h-48 bg-bg-secondary overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-primary-500/10 to-accent/10 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-500/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
                
                {/* View Details Button Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-5 space-y-3">
                <h3 className="text-xl font-bold text-text-primary">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex-1">
                  <TechStackCard
                    technologies={project.technologies}
                    title=""
                    badgeClassName="gap-"
                    iconWrapperClassName="w-6 h-6"
                    nameClassName="text-xs"
                  />
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-3 border-t border-border">
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
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-bg-secondary border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative w-full h-64 bg-bg-tertiary overflow-hidden">
                {selectedProject.imageUrl ? (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-primary-500/10 to-accent/10 flex items-center justify-center">
                    <div className="text-8xl font-bold text-primary-500/20">
                      {selectedProject.title.charAt(0)}
                    </div>
                  </div>
                )}
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Technologies Used
                  </h3>
                  <TechStackCard
                    technologies={selectedProject.technologies}
                    title=""
                    badgeClassName="gap-2 px-3 py-2"
                    iconWrapperClassName="w-5 h-5"
                    nameClassName="text-sm"
                  />
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-bg-tertiary hover:bg-surface-hover border border-border hover:border-primary-500 rounded-lg transition-all text-sm font-medium text-text-primary"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;