"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const defaultTheme = "default"; // Set your default theme here
  const [theme, setTheme] = useState<string>(defaultTheme);

  // On initial load, check if a theme is saved in localStorage, otherwise apply default
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || defaultTheme;
    setTheme(savedTheme); // Apply the theme
    document.documentElement.className = `theme-${savedTheme}`; // Set <html> class
  }, []); // Empty dependency array means this only runs on mount

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme); // Set the new theme
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
    document.documentElement.className = `theme-${newTheme}`; // Update <html> class
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
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
