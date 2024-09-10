import { createContext, useContext, useEffect, useState } from 'react';

export enum SelectedSection {
  About = 'about',
  Projects = 'projects',
  Skills = 'skills',
  Contact = 'contact',
}

interface ScrollContextType {
  isTopOfPage: boolean;
  selectedSection: SelectedSection;
  setSelectedSection: (page: SelectedSection) => void;
}

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedSection, setSelectedSection] = useState<SelectedSection>(SelectedSection.About);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedSection(SelectedSection.About);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isTopOfPage, selectedSection, setSelectedSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
