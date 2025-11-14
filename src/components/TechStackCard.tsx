import React from 'react';

// TechBadge Component - Reusable technology badge
interface TechBadgeProps {
  name: string;
  icon: string;
  color?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, icon, color = '#3b82f6' }) => {
  return (
    <div className="group relative flex items-center gap-2.5 px-4 py-2.5 bg-bg-tertiary hover:bg-bg-secondary border border-border hover:border-primary-500/50 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105">
      {/* Icon */}
      <div className="w-6 h-6 flex items-center justify-center shrink-0">
        <img 
          src={icon} 
          alt={`${name} icon`}
          className="w-full h-full object-contain"
          style={{ filter: 'brightness(0.9)' }}
        />
      </div>
      
      {/* Name */}
      <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
        {name}
      </span>
      
      {/* Subtle glow on hover */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

// TechStack Component - Container for all technologies
interface TechStackProps {
  title?: string;
  technologies: Array<{
    name: string;
    icon: string;
    color?: string;
  }>;
}

export const TechStack: React.FC<TechStackProps> = ({ title = "Tech Stack", technologies }) => {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-lg font-semibold text-text-primary">
          {title}
        </h3>
      )}
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {technologies.map((tech) => (
          <TechBadge 
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
};

// Default export with preset technologies
export const technologies = [
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: '#3178c6'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#f7df1e'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61dafb'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: '#000000'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933'
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#000000'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47a248'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    color: '#06b6d4'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#f05032'
  },
  {
    name: 'npm',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    color: '#cb3837'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#4169e1'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776ab'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: '#2496ed'
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    color: '#ff9900'
  },
  {
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    color: '#764abc'
  },
  {
    name: 'GraphQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    color: '#e10098'
  }
];

export default TechStack;