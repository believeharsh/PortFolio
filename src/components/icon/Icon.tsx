import iconMap from "./IconMap";
import type { LucideProps } from "lucide-react";

interface IconProps {
  name: string;
  size?: number | string;      // number = px, or use "1em", "20px"
  color?: string;              // optional; prefer using CSS text color
  className?: string;
}

/** Icon component — safe defaults and defensive checks */
const Icon: React.FC<IconProps> = ({
  name,
  size = "1em",          // default to 1em so Tailwind sizing works
  color,                 // only pass color if provided
  className,
}) => {
  const key = name.toLowerCase();
  const LucideIconComponent = iconMap[key];

  if (!LucideIconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" not found in iconMap (lookup key: "${key}").`);
      console.log("Available keys:", Object.keys(iconMap));
    }
    return null;
  }

  // Prefer letting className (w-4 h-4, text-*) handle size/color.
  const props: Partial<LucideProps> = { size };
  if (color) props.color = color;

  return <LucideIconComponent {...props} className={className} />;
};

export default Icon;
