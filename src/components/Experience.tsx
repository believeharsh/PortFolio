import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { usePortfolio } from '../context/portfolioContext';

const Experience: React.FC = () => {
  const { data } = usePortfolio();
  const { experience } = data;

  return (
    <section id="experience" className="section-container">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="space-y-2 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-[9px] ring-4 ring-bg-secondary"></div>

              {/* Content */}
              <div className="card ml-4 space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                      {exp.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      exp.endDate === 'Present' 
                        ? 'bg-bg-success text-success border border-success/20' 
                        : 'bg-bg-secondary text-text-muted border border-border'
                    }`}>
                      {exp.endDate === 'Present' ? 'Current' : 'Past'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-primary-400 font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-text-secondary">
                      <span className="text-primary-500 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-bg-secondary border border-border rounded text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;