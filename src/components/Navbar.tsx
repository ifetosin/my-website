import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
// import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ isNavOpen, setIsNavOpen }) => {
  // const { theme } = useTheme(); // Get theme from context
  const [isClient, setIsClient] = useState(false);

  // Set client-side state after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent SSR-related mismatches

  return (
    <div
      id="navbar"
      className={`fixed top-0 left-0 h-screen w-64 shadow-lg z-50 transition-transform duration-200 ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      } lg:block hidden`}
      style={{
        backgroundColor: `var(--theme-navbar-background)`, 
        boxShadow: `var(--theme-navbar-shadow)`,
      }}
    >
      <div className="flex flex-col h-full">
        {/* Logo and Close Button */}
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center">
            <div className="theme-highlight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="70"
                height="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                className="w-8 h-8"
              >
                {/* Left half C (I) */}
                <path d="M60 20 A30 30 0 0 0 60 80" />
                {/* Right half C */}
                <path d="M40 20 A30 30 0 0 1 40 80" />
              </svg>
            </div>
            <div>Ife Oluwatosin</div>
          </div>

          <div
            className="text-lg cursor-pointer hover:opacity-80 p-2 rounded-full shadow-lg focus:outline-none theme-highlight"
            onClick={() => setIsNavOpen(false)} // Close the navbar
          >
         <FaTimes /> 
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col px-6 space-y-4">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="hover:opacity-80 cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className="hover:opacity-80 cursor-pointer"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="work-experience"
            smooth={true}
            duration={500}
            className="hover:opacity-80 cursor-pointer"
          >
            Work Experience
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="hover:opacity-80 cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};
