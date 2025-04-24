"use client"
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // Import a better icon for the navbar toggle
import { Navbar } from "../components/Navbar";
import { ThemeToggleButton } from "../components/ToggleButton";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";
import { Skills } from "../components/Skills";
import { ContactFooter } from "../components/Contact";
import { useTheme } from "../context/ThemeContext";
import {Loader} from "../components/Loader"

export default function PortfolioPage() {
  const { theme } = useTheme(); // Dynamic theme context
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!document.getElementById("navbar")?.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isNavOpen]);


  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => setIsLoading(false), 2000); // Example delay
    return () => clearTimeout(timer); // Cleanup timer
  }, []);


  if (isLoading) {
    return <Loader />; // Show loader while page is loading
  }

  return (
    <div className={`${theme} flex`}>
      <div className="max-w-screen-xl mx-auto px-2 md:px-10">
        <div className="relative">
          {/* Navbar Toggle Icon */}
          {!isNavOpen && (
            <div
              className="nav-icon fixed top-4 left-4 z-50 p-4 rounded-full shadow-lg cursor-pointer transition hover:scale-105"
              style={{
                backgroundColor: "theme-background-background"
              }}
              onClick={() => setIsNavOpen(true)} // Opens the navbar
            >
              <FaBars className="theme-highlight text-2xl" /> {/* Updated to use FaBars */}
            </div>
          )}

          {/* Sidebar Navbar */}
          <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>

        <ThemeToggleButton />

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-200 ${
            isNavOpen ? "ml-64" : "ml-0"
          }`}
        >
          {/* Add IDs to sections for smooth scrolling */}
          <section id="hero">
            <Hero />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
           <Skills />
          </section>
          <section id="work-experience">
            <WorkExperience />
          </section>
          <section id="contact">
            <ContactFooter />
          </section>
        </main>
      </div>
    </div>
  );
}


