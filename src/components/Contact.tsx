"use client";

import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Added FaArrowUp for the scroll-up icon

export const ContactFooter = () => {
  const year = new Date().getFullYear();

  // Scroll back to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  };

  return (
    <footer
      className="py-8 px-6 mt-12 relative"
      style={{
        borderTop: "2px solid var(--theme-border-color)", // Apply dynamic theme color
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-left gap-4 md:gap-6 text-left md:text-left">
        {/* Social Icons */}
        <div className="flex justify-start space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/ife-oluwatosin-40155b7b/"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-highlight transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ifeoluwatosin.official@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-highlight transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-sm text-gray-600 leading-relaxed mr-4">
          <div>
            &copy; {year}{" "}
            <span className="theme-highlight">Ife Oluwatosin</span>
          </div>

          <div>Implemented with Next.js & Tailwind CSS.</div>
        </div>
      </div>

      {/* Scroll Up Button */}
      <button
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full transition"
        onClick={scrollToTop}
      >
        ↑
      </button>
    </footer>
  );
};
