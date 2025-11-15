import React from "react";
import { TechBadge, type TechItem } from "./TechBadge";


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

const TechStackCard: React.FC<TechStackProps> = ({
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


export default TechStackCard ; 