/* eslint-disable @next/next/google-font-preconnect */
"use client";
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
import { Loader } from "../components/Loader";
import Head from "next/head";

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
      <Head>
        <title>Ife Oluwatosin Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio, showcasing my skills, projects, and work experience."
        />
        <meta
          name="keywords"
          content="portfolio, web development, React, Next.js, JavaScript, skills, projects, front end development, software engineering, developer"
        />
        <meta name="author" content="Ife Oluwatosin" />
        <meta property="og:title" content="Ife Oluwatosin Portfolio" />
        <meta
          property="og:description"
          content="Explore my portfolio to learn more about my work and skills."
        />
        <meta
          property="og:image"
          content="/images/portfolio-image.jpg" // Make sure to replace this with an actual image URL
        />
        <meta
          property="og:url"
          content="https://ifeoluwatosin.netlify.app/"
        />
        <link
          rel="canonical"
          href="https://ifeoluwatosin.netlify.app/"
        />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="max-w-screen-xl mx-auto px-2 md:px-10">
        <header>
          {/* Navbar Toggle Icon */}
          {!isNavOpen && (
            <div
              className="nav-icon fixed top-4 left-4 z-50 p-4 rounded-full shadow-lg cursor-pointer transition hover:scale-105"
              style={{
                backgroundColor: "var(--theme-navbar-background)",
              }}
              onClick={() => setIsNavOpen(true)} // Opens the navbar
              aria-label="Open Navigation"
            >
              <FaBars className="theme-highlight text-2xl" />
            </div>
          )}

          {/* Sidebar Navbar */}
          <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </header>

        <ThemeToggleButton />

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-200 ${
            isNavOpen ? "ml-70" : "ml-0"
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
