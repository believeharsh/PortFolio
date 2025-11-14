import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { PortfolioData } from '../types/portfolio.types';

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// Default portfolio data - Replace with your actual data
const defaultData: PortfolioData = {
  personalInfo: {
    name: "Harsh Dahiya",
    title: "Full Stack Developer",
    bio: "Passionate developer with expertise in building scalable web applications. I love creating elegant solutions to complex problems.",
    email: "onlybelieveharsh@gmail.com",
    location: "Your City, Country",
    resume: "/resume.pdf"
  },
  skills: [
    { name: "React", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
  ],
  experience: [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      companyLogo: "https://itux.com", // URL to company logo
      companyWebsite: "https://itux.solutios.com", // Company website URL
      location: "Remote",
      startDate: "Jan 2022",
      endDate: "Present",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Startup Inc",
      companyLogo: "https://itux.com", // URL to company logo
      companyWebsite: "https://itux.solutios.com", // Company website URL
      location: "City, Country",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      description: [
        "Built RESTful APIs handling 10k requests per minute",
        "Developed responsive web applications using React",
        "Optimized database queries improving performance by 40%"
      ],
      technologies: ["React", "Express", "MongoDB", "Redis"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/project",
      liveUrl: "https://project-demo.com"
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Real-time collaborative task management application with drag-and-drop functionality.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/yourusername/project2"
    },
    {
      id: "3",
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and real-time updates.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://dashboard-demo.com"
    }
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { platform: "X", url: "https://twitter.com/yourusername", icon: "x" },
    { platform: "Youtube", url: "https://twitter.com/yourusername", icon: "youtube" },
    { platform: "Instagram", url: "https://twitter.com/yourusername", icon: "instagram" }
  ]
};

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(defaultData);

  const updateData = (newData: Partial<PortfolioData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
};