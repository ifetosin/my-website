import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { ThemeMenu } from "./ThemeMenu"; 

export const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false); 
  const menuRef = useRef<HTMLDivElement | null>(null); 
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after the component has mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu); 
  };

  const handleToggleTheme = (theme: string) => {
    toggleTheme(theme); 
    setShowMenu(false); 
  };

  // Close the menu when clicking outside
  useEffect(() => {
    if (!isClient) return; 

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside); 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClient]); 
  return (
    <div>
      <button
        onClick={handleToggleMenu} 
        className="fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg font-semibold hover:opacity-90 transition z-50"
      >
        Change Theme
      </button>

      {/* Render ThemeMenu if showMenu is true and we're on the client */}
      {showMenu && isClient && (
        <ThemeMenu
          ref={menuRef}
          onThemeSelect={handleToggleTheme}
        />
      )}
    </div>
  );
};
