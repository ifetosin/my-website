"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative" aria-labelledby="hero-heading" role="region">
      <div className="container mx-auto max-w-screen-xl">
        <header className="hero block md:flex items-start justify-between">
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
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-snug lg:leading-tight mt-10 md:mt-4"
            >
              Ife Oluwatosin
            </motion.h1>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-md sm:text-lg md:text-xl mb-4"
            >
              Competence | Character
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/4 text-base sm:text-lg md:text-xl mb-6 mr-5 mx-auto lg:mx-0"
            >
              I help businesses{" "}
              <strong className="theme-highlight">thrive</strong> by building
              fast, scalable, and customer-loved web applications.
            </motion.p>

            {/* Social Links */}
            <nav aria-label="Social media" className="flex gap-4 mb-8">
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
              className="text-left mt-5"
            >
              <div className="flex md:flex-row gap-4 items-center mb-6">
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
                    className="font-semibold transition"
                  >
                    <span className="block sm:hidden">My Work</span>
                    <span className="hidden sm:block">Explore My Work</span>
                  </motion.button>
                </ScrollLink>

                <a
                  href="https://drive.google.com/file/d/18cnD70UeuHaQIEbmNoC82P0QU7RLZK8B/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resume on Google Drive"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="font-semibold transition"
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
              <h2 className="text-xl md:text-3xl  font-semibold mb-2">
                Senior Front-End Developer
              </h2>
              <h3 className="text-md md:text-xl lg:text-2xl font-semibold mb-3">
                6+ Years | Banking | Fintech | EdTech
              </h3>
              <p className="text-base lg:text-left mb-4">
                I build reliable, user-centric, and high-performing web
                applications that solve real-world problems. With deep expertise
                in HTML, CSS, JavaScript, React, Next.js, and TypeScript, I’ve
                developed digital platforms trusted by thousands and designed to
                deliver measurable business value.
              </p>
              <p className="text-base lg:text-left mb-4">
                Beyond development, I mentor junior engineers, guiding them to
                become confident and impactful team members. I enjoy
                collaborating across cross-functional teams to transform complex
                requirements into elegant, scalable solutions that deliver an
                excellent user experience. My goal is not just to build but to
                lead initiatives that scale, inspire, and create meaningful,
                lasting impact.
              </p>
            </div>
          </motion.aside>
        </header>
      </div>
    </section>
  );
};
