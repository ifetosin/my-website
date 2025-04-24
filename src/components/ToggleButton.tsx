import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { ThemeMenu } from "./ThemeMenu"; // Import ThemeMenu

export const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false); // State to control the visibility of the theme menu
  const menuRef = useRef<HTMLDivElement | null>(null); // Correctly type the ref as HTMLDivElement
  const [isClient, setIsClient] = useState(false); // State to track whether we're on the client

  // Set isClient to true after the component has mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  const handleToggleTheme = (theme: string) => {
    toggleTheme(theme); // Pass the theme string to toggleTheme
    setShowMenu(false); // Close the menu when a theme is selected
  };

  // Close the menu when clicking outside
  useEffect(() => {
    if (!isClient) return; // Ensure we're on the client before adding the event listener

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false); // Close the menu if the click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Listen for mouse clicks
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup the event listener
    };
  }, [isClient]); // Re-run the effect when the client-side check changes

  return (
    <div>
      <button
        onClick={handleToggleMenu} // Show or hide the theme menu
        className="fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg font-semibold hover:opacity-90 transition z-50"
      >
        Change Theme
      </button>

      {/* Render ThemeMenu if showMenu is true and we're on the client */}
      {showMenu && isClient && (
        <ThemeMenu
          ref={menuRef} // Pass the menuRef to the ThemeMenu
          onThemeSelect={handleToggleTheme} // Pass the handleToggleTheme to ThemeMenu
        />
      )}
    </div>
  );
};
