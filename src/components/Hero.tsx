import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { usePortfolio } from '../context/portfolioContext';

const Hero: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo, socialLinks } = data;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      github: <Github className="w-5 h-5" />,
      linkedin: <Linkedin className="w-5 h-5" />,
      twitter: <Twitter className="w-5 h-5" />
    };
    return icons[iconName.toLowerCase()] || null;
  };

  return (
    <section className="section-container flex items-center mt-16">
      <div className="w-full max-w-5xl mx-auto">
        {/* Main content */}
        <div className="space-y-6 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <h1 className='text-base md:text-4xl text-primary-400 font-medium'>
                Hi, I'm
                <span>  { personalInfo.name} - </span>    
                <span className='text-primary-300'>  {personalInfo.title}.</span>
            </h1>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap gap-4 text-text-muted">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm md:text-base">{personalInfo.email}</span>
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {personalInfo.resume && (
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-bg-tertiary hover:bg-surface-hover text-text-primary font-medium rounded-lg border border-border hover:border-border-hover transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 pt-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-bg-tertiary hover:bg-surface-hover border border-border hover:border-primary-500 rounded-lg transition-all duration-200 hover:shadow-md group"
                aria-label={link.platform}
              >
                <span className="text-text-muted group-hover:text-primary-400 transition-colors">
                  {getIcon(link.icon)}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;