import React from "react";
import { TechBadge } from "./techstack-card/TechBadge";

export interface TechItem {
  name: string;
  icon: string | React.ReactNode; // URL or an icon component/node
  color?: string;
}

// interface TechBadgeProps {
//   item: TechItem;
//   // visual controls
//   size?: number | string;           // px number or CSS size like "1em"
//   badgeClassName?: string;          // outer container
//   iconWrapperClassName?: string;    // size + alignment wrapper
//   nameClassName?: string;           // text styling
//   glow?: boolean;                   // subtle colored glow on hover
// }


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
