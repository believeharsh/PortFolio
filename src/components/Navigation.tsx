import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePortfolio } from '../context/portfolioContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = usePortfolio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold text-gradient-primary cursor-pointer"
          >
            {data.personalInfo.name.split(' ')[0]}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-text-secondary hover:text-primary-400 transition-colors font-medium text-sm cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            {data.personalInfo.resume && (
              <a
                href={data.personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm rounded-lg transition-colors"
              >
                Resume
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-border animate-slide-down">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block text-text-secondary hover:text-primary-400 transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            {data.personalInfo.resume && (
              <a
                href={data.personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
              >
                Resume
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;