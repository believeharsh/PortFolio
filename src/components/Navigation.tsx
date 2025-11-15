import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/portfolioContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data } = usePortfolio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Profile Picture + Navigation */}
          <div className="flex items-center gap-8">
            {/* Profile Picture */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500 hover:border-primary-400 transition-colors">
                <img
                  src={data.personalInfo?.avatar || '/placeholder-profile.jpg'}
                  alt={data.personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>

            {/* Navigation Items */}
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-text-secondary hover:text-primary-400 transition-colors font-medium text-md cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Resume Button */}
          {data.personalInfo.resume && (
            <a
              href={data.personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm rounded-lg transition-colors"
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;