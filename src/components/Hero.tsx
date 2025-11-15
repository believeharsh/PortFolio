import React from "react";
import {
  FaSquareXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { usePortfolio } from "../context/portfolioContext";
import Icon from "./icon/Icon";
import { technologies } from "./techstack-card/myTechnlogiesArr";
import TechStackCard from "./techstack-card/TechStackCard";

const Hero: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo, socialLinks } = data;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      github: <FaGithub className="w-6 h-6" />,
      linkedin: <FaLinkedin className="w-6 h-6" />,
      x: <FaSquareXTwitter className="w-6 h-6" />,
      instagram: <FaInstagram className="w-6 h-6" />,
      youtube: <FaYoutube className="w-6 h-6" />,
    };
    return icons[iconName.toLowerCase()] || null;
  };

  return (
    <section className="section-container flex items-center mt-16 ">
      <div className="w-full max-w-5xl mx-auto">
        {/* Main content */}
        <div className="space-y-6 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-400 font-medium">
              Hi, I'm
              <span> {personalInfo.name} - </span>
              <span className="text-primary-300">{personalInfo.title}.</span>
            </h1>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="pt-2">
            <TechStackCard
              technologies={technologies}
              title=""
              badgeClassName="gap-2 px-3 py-2"
              iconWrapperClassName="w-4 h-4 "
              nameClassName="text-sm"
            />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
            {personalInfo.resume && (
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm sm:text-base rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
              >
                {/* <FileText className="w-4 h-4" /> */}
                <Icon name="file-text" className="w-4 h-4" />
                View Resume
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-bg-tertiary hover:bg-surface-hover text-text-primary font-medium text-sm sm:text-base rounded-lg border border-border hover:border-border-hover transition-all duration-200"
            >
              {/* <Mail className="w-4 h-4" /> */}
              <Icon name="mail" />
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2  hover:bg-surface-hover border border-border hover:border-primary-500 rounded-lg transition-all duration-200 hover:shadow-md group"
                aria-label={link.platform}
                title={link.platform}
              >
                <span className="text-text-muted group-hover:text-primary-400 transition-colors">
                  {getIcon(link.icon)}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary-500 rounded-full"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
