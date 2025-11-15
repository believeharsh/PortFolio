import React from "react";

export interface TechItem {
  name: string;
  icon: string | React.ReactNode; // URL or an icon component/node
  color?: string;
}

interface TechBadgeProps {
  item: TechItem;
  // visual controls
  size?: number | string; // px number or CSS size like "1em"
  badgeClassName?: string; // outer container
  iconWrapperClassName?: string; // size + alignment wrapper
  nameClassName?: string; // text styling
  glow?: boolean; // subtle colored glow on hover
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  item,
  size = "1em",
  badgeClassName = "",
  iconWrapperClassName = "",
  nameClassName = "",
  glow = true,
}) => {
  const { name, icon, color = "#3b82f6" } = item;

  const isStringIcon = typeof icon === "string";

  return (
    <div
      className={`${badgeClassName} group relative flex items-center bg-bg-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md hover:scale-105`}
    >
      <div
        className={`${iconWrapperClassName} flex items-center justify-center shrink-0`}
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
            loading="lazy"
          />
        ) : (
          // if icon is a ReactNode like an imported SVG/component, render it
          (icon as React.ReactNode)
        )}
      </div>

      <span
        className={`${nameClassName} text-text-secondary group-hover:text-text-primary transition-colors`}
      >
        {name}
      </span>

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
