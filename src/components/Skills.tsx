import React from 'react';
import { usePortfolio } from '../context/portfolioContext';
import type { Skill } from '../types/portfolio.types';

const Skills: React.FC = () => {
  const { data } = usePortfolio();
  const { skills } = data;

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & DevOps',
    other: 'Other'
  };

  return (
    <section id="skills" className="section-container">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Skills & Technologies
          </h2>
          <p className="text-text-secondary">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="card space-y-4 animate-slide-up"
            >
              <h3 className="text-xl font-semibold text-text-primary">
                {categoryLabels[category] || category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-bg-secondary border border-border rounded-lg text-sm text-text-secondary hover:border-primary-500 hover:text-primary-400 transition-all duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;