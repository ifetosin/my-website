import { useEffect, useState } from "react";
import {
  FaTimes,
  FaBriefcase,
  FaUser,
  FaPhoneAlt,
  FaCode,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

interface NavbarProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ isNavOpen, setIsNavOpen }) => {
  const [isClient, setIsClient] = useState(false);

  // Set client-side state after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent SSR-related mismatches

  return (
    <div
      id="navbar"
      className={`fixed top-0 left-0 h-screen w-70 shadow-lg z-50 transition-transform duration-200 ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      } md:block hidden`}
      style={{
        backgroundColor: `var(--theme-navbar-background)`,
        boxShadow: `var(--theme-navbar-shadow)`,
      }}
    >
      <div className="flex flex-col h-full">
        {/* Logo and Close Button */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-3 transition cursor-pointer"
        >
          <div className="flex items-center justify-between p-5 w-full">
            {/* Left Section: Logo */}
            <div className="flex items-center">
              <div className="theme-highlight cursor-pointer">
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
                  <path d="M60 20 A30 30 0 0 0 60 80" />
                  <path d="M40 20 A30 30 0 0 1 40 80" />
                </svg>
              </div>
              <div className="text-lg font-bold cursor-pointer ml-2">
                Ife Oluwatosin
              </div>
            </div>

            {/* Right Section: Close Button */}
            <button
              className="text-lg cursor-pointer hover:opacity-80 p-4 rounded-full shadow-lg focus:outline-none theme-highlight"
              onClick={() => setIsNavOpen(false)}
              aria-label="Close navigation"
            >
              <FaTimes />
            </button>
          </div>
        </ScrollLink>

        {/* Navigation Links */}
        <div className="flex flex-col px-6 space-y-6 mt-6">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 transition cursor-pointer"
          >
            <FaBriefcase className="text-xl" />
            <span>Projects</span>
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 transition cursor-pointer"
          >
            <FaCode className="text-xl" />
            <span>Skills</span>
          </ScrollLink>
          <ScrollLink
            to="work-experience"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 transition cursor-pointer"
          >
            <FaUser className="text-xl" />
            <span>Work Experience</span>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 transition cursor-pointer"
          >
            <FaPhoneAlt className="text-xl" />
            <span>Contact</span>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};
