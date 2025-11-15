import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { PortfolioData } from '../types/portfolio.types';
import { defaultData } from '../Data/ProfileData';

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

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