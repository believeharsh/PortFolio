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

const Contact: React.FC = () => {
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
    <section id="contact" className="section-container ">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Let's Work Together
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact card */}
        <div className="card max-w-2xl mx-auto space-y-8 text-center">
          {/* Email CTA */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto">
              {/* <Mail className="w-8 h-8 text-primary-400" /> */}
               <Icon name="mail" className="w-8 h-8 text-primary-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-text-primary">
                Drop me a message
              </h3>
              <p className="text-text-secondary">
                Feel free to reach out for collaborations or just a friendly
                chat
              </p>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
            >
              {/* <Send className="w-4 h-4" /> */}
               <Icon name="send"  className="w-4 h-4" />
              Send Email
            </a>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-bg-tertiary text-text-muted">
                Or connect with me on
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-bg-secondary hover:bg-surface-hover border border-border hover:border-primary-500 rounded-lg transition-all duration-200 group min-w-[120px]"
              >
                <span className="text-text-muted group-hover:text-primary-400 transition-colors">
                  {getIcon(link.icon)}
                </span>
                <span className="text-sm text-text-secondary group-hover:text-primary-400 transition-colors">
                  {link.platform}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React &
            TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
