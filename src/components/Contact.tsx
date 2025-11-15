import React from "react";
import { Mail, Send, Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { usePortfolio } from "../context/portfolioContext";

const Contact: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo, socialLinks } = data;

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      github: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      linkedin: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      x: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      twitter: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      instagram: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
      youtube: <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />,
    };
    return icons[iconName.toLowerCase()] || null;
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
            Let's Work Together
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact card */}
        <div className="card max-w-2xl mx-auto space-y-6 sm:space-y-8 text-center">
          {/* Email CTA */}
          <div className="space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto ring-1 ring-primary-500/20">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-primary-400" />
            </div>
            <div className="space-y-2 px-4">
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                Drop me a message
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Feel free to reach out for collaborations or just a friendly
                chat
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm sm:text-base rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20 hover:scale-105"
            >
              <Send className="w-4 h-4" />
              Send Email
            </a>
          </div>

          {/* Divider */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-3 sm:px-4 bg-bg-tertiary text-text-muted">
                Or connect with me on
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4 px-2 sm:px-0">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-bg-secondary hover:bg-surface-hover border border-border hover:border-primary-500 rounded-lg transition-all duration-200 group min-w-[100px] sm:min-w-[120px] hover:scale-105 hover:shadow-md"
              >
                <span className="text-text-muted group-hover:text-primary-400 transition-colors">
                  {getIcon(link.icon)}
                </span>
                <span className="text-xs sm:text-sm text-text-secondary group-hover:text-primary-400 transition-colors font-medium">
                  {link.platform}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border px-4">
          <p className="text-text-muted text-xs sm:text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React &
            TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;