"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative" aria-labelledby="hero-heading" role="region">
      <div className="container mx-auto max-w-screen-xl px-2 lg:px-10 md:pt-40 md:pb-20">
        {/* Flexbox for Two Columns */}
        <header className="hero flex items-start justify-between">
          {/* Left Column: Hero Text */}
          <motion.div
            className="w-full md:w-1/2 text-left flex flex-col justify-start"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.25 } },
            }}
          >
            {/* Name and Role */}
            <motion.h1
              id="hero-heading"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="md:mt-6 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug lg:leading-tight"
            >
              Ife Oluwatosin
            </motion.h1>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-lg mb-4"
            >
              Competence | Character
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-base sm:text-lg md:text-lg mb-6 lg:mb-8"
            >
              I help businesses <strong className="theme-highlight">thrive</strong> by
              building fast, scalable, and customer-loved web applications that
              solve real-world problems.
            </motion.p>

            {/* Social Media Links */}
            <nav aria-label="Social media" className="flex gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/ife-oluwatosin-40155b7b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl theme-navbar-background hover:opacity-80 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ifeoluwatosin.official@gmail.com"
                className="text-lg md:text-xl theme-navbar-background hover:opacity-80 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/ifetosin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl theme-navbar-background hover:opacity-80 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </nav>

            {/* Call-to-Action Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <ScrollLink
                  to="projects"
                  smooth
                  duration={500}
                  className="hover:opacity-90 cursor-pointer"
                  aria-label="Scroll to Projects"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="font-semibold theme-highlight transition px-4 py-2 rounded"
                  >
                    Explore My Work
                  </motion.button>
                </ScrollLink>

                <a
                  href="https://drive.google.com/file/d/1UyfHdZ-JlD4KQmGMZIreEwLuRTrQInPm/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resume on Google Drive"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="font-semibold theme-highlight transition px-4 py-2 rounded"
                  >
                    View Resume
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Additional Information */}
          <motion.aside
            className="w-full md:w-1/2 flex flex-col justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="md:p-6 w-full max-w-lg text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                Senior Front-End Developer <br /> 6+ Years | Banking | Fintech | EdTech
              </h2>
              <p className="text-base md:text-lg mb-4">
                I build reliable, user-centric, and high-performing web
                applications. With proficiency in HTML, CSS, JavaScript, React,
                Next.js, and TypeScript, I’ve developed digital platforms
                trusted by thousands every day.
              </p>
              <p className="text-base md:text-lg">
                Beyond development, I mentor junior engineers to become
                impactful contributors. I thrive in collaborating with vendors
                and cross-functional teams to deliver complex projects that
                drive measurable results.
              </p>
            </div>
          </motion.aside>
        </header>
      </div>
    </section>
  );
};
