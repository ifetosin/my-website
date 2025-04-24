'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check if there's a saved theme in localStorage; if not, default to "fav"
  const savedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  const initialTheme = savedTheme || 'fav'; // Default to 'fav' if no saved theme
  
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    // Apply the theme to the document element
    const root = document.documentElement;
    root.className = '';  // Remove any existing theme classes
    root.classList.add(`theme-${theme}`);  // Add the new theme class (e.g., theme-fav, theme-dark)
    
    // Save the selected theme in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme); // Update the theme state
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
