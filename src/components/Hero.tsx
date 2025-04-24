"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      className="relative min-h-auto"
      aria-labelledby="hero-heading"
      role="region"
    >
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10">
        <header className="hero block md:flex items-center justify-between">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-left"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.25 } },
            }}
          >
            <motion.h1
              id="hero-heading"
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-snug lg:leading-tight pt-20 md:pt-32"
            >
              Ife Oluwatosin
            </motion.h1>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8 }}
              className="text-md sm:text-lg md:text-xl text-gray-600 mb-4"
            >
              Competence | Character
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 mr-5 max-w-xl mx-auto lg:mx-0"
            >
              I help businesses{" "}
              <strong className="theme-highlight">thrive</strong> by building
              <br className="hidden md:block" />
              fast, scalable, and customer-loved web applications.
            </motion.p>

            {/* Social Links */}
            <nav aria-label="Social media" className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/in/ife-oluwatosin-40155b7b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-3xl theme-navbar-background hover:opacity-80 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ifeoluwatosin.official@gmail.com"
                className="text-xl md:text-3xl theme-navbar-background hover:opacity-80 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/ifetosin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-3xl theme-navbar-background hover:opacity-80 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </nav>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="flex md:flex-row gap-4 items-center">
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
                    className="theme-highlight font-semibold transition"
                  >
                    <span className="block sm:hidden">My Work</span>
                    <span className="hidden sm:block">Explore My Work</span>
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
                    className="theme-highlight font-semibold transition"
                  >
                    View Resume
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.aside
            className="w-full md:w-1/2 flex items-center justify-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="md:p-6 w-full max-w-lg text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 pt-13 md:pt-16">
                Senior Front-End Developer <br /> 6+ Years | Banking | Fintech |
                EdTech
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg md:text-justify">
                I build scalable, user-centric and high-performing web
                applications. With expertise in HTML, CSS, JavaScript, React,
                Next.js, and TypeScript, I’ve developed and optimized digital
                platforms relied on by thousands daily.
                <br className="hidden md:block" />
                I create fast, responsive front-end solutions that improve
                performance, increase user retention, and drive business growth
                across industries.
                <br className="hidden md:block" />
                I also mentor junior engineers and collaborate across teams to
                deliver impactful products, using emotional intelligence and
                leadership to ensure success.
              </p>
            </div>
          </motion.aside>
        </header>
      </div>
    </section>
  );
};
