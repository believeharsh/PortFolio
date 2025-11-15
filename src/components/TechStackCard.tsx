// import React from 'react';

// // TechBadge Component - Reusable technology badge
// interface TechBadgeProps {
//   name: string;
//   icon: string;
//   color?: string;
// }

// export const TechBadge: React.FC<TechBadgeProps> = ({ name, icon, color = '#3b82f6' }) => {
//   return (
//     <div className="group relative flex items-center gap-2.5 px-4 py-2.5 bg-bg-tertiary hover:bg-bg-secondary border border-border hover:border-primary-500/50 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105">
//       {/* Icon */}
//       <div className="w-6 h-6 flex items-center justify-center shrink-0">
//         <img 
//           src={icon} 
//           alt={`${name} icon`}
//           className="w-full h-full object-contain"
//           style={{ filter: 'brightness(0.9)' }}
//         />
//       </div>
      
//       {/* Name */}
//       <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
//         {name}
//       </span>
      
//       {/* Subtle glow on hover */}
//       <div 
//         className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"
//         style={{ backgroundColor: color }}
//       ></div>
//     </div>
//   );
// };

// // TechStack Component - Container for all technologies
// interface TechStackProps {
//   title?: string;
//   technologies: Array<{
//     name: string;
//     icon: string;
//     color?: string;
//   }>;
// }

// export const TechStack: React.FC<TechStackProps> = ({ title = "Tech Stack", technologies }) => {
//   return (
//     <div className="space-y-4">
//       {title && (
//         <h3 className="text-lg font-semibold text-text-primary">
//           {title}
//         </h3>
//       )}
//       <div className="flex flex-wrap gap-2.5 sm:gap-3">
//         {technologies.map((tech) => (
//           <TechBadge 
//             key={tech.name}
//             name={tech.name}
//             icon={tech.icon}
//             color={tech.color}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Default export with preset technologies


// export default TechStack;





import React from "react";

export interface TechItem {
  name: string;
  icon: string | React.ReactNode; // URL or an icon component/node
  color?: string;
}

interface TechBadgeProps {
  item: TechItem;
  // visual controls
  size?: number | string;           // px number or CSS size like "1em"
  badgeClassName?: string;          // outer container
  iconWrapperClassName?: string;    // size + alignment wrapper
  nameClassName?: string;           // text styling
  glow?: boolean;                   // subtle colored glow on hover
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  item,
  size = "1em",
  badgeClassName = "group relative flex items-center gap-2.5 px-4 py-2.5 bg-bg-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105",
  iconWrapperClassName = "w-6 h-6 flex items-center justify-center shrink-0",
  nameClassName = "text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors",
  glow = true,
}) => {
  const { name, icon, color = "#3b82f6" } = item;

  const isStringIcon = typeof icon === "string";

  return (
    <div className={badgeClassName}>
      <div
        className={iconWrapperClassName}
        style={{
          // when size is a number assume px, else use provided string (e.g. "1em")
          width: typeof size === "number" ? `${size}px` : size,
          height: typeof size === "number" ? `${size}px` : size,
        }}
      >
        {isStringIcon ? (
          <img
            src={icon as string}
            alt={`${name} icon`}
            className="w-full h-full object-contain"
            style={{ filter: "brightness(0.95)" }}
            // loading="lazy" // optional
          />
        ) : (
          // if icon is a ReactNode like an imported SVG/component, render it
          icon as React.ReactNode
        )}
      </div>

      <span className={nameClassName}>{name}</span>

      {glow && (
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"
          style={{ backgroundColor: color }}
          aria-hidden
        />
      )}
    </div>
  );
};

interface TechStackProps {
  title?: string;
  technologies: TechItem[];
  // global styling overrides for badges
  badgeSize?: number | string;
  badgeClassName?: string;
  iconWrapperClassName?: string;
  nameClassName?: string;
  gridClassName?: string; // container for badges
  showTitle?: boolean;
}

export const TechStack: React.FC<TechStackProps> = ({
  title = "Tech Stack",
  technologies,
  badgeSize = "1em",
  badgeClassName,
  iconWrapperClassName,
  nameClassName,
  gridClassName = "flex flex-wrap gap-2.5 sm:gap-3",
  showTitle = true,
}) => {
  return (
    <div className="space-y-4">
      {showTitle && <h3 className="text-lg font-semibold text-text-primary">{title}</h3>}

      <div className={gridClassName}>
        {technologies.map((tech) => (
          <TechBadge
            key={tech.name}
            item={tech}
            size={badgeSize}
            badgeClassName={badgeClassName}
            iconWrapperClassName={iconWrapperClassName}
            nameClassName={nameClassName}
          />
        ))}
      </div>
    </div>
  );
};
