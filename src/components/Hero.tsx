"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="relative min-h-auto">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10">
        <div className="hero block md:flex">
          {/* Left: Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-left"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-snug lg:leading-tight pt-20 md:pt-32"
            >
              Ife Oluwatosin
            </motion.h1>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-md sm:text-lg md:text-xl text-gray-600 mb-4"
            >
              Competence | Character
            </motion.h3>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 mr-5 max-w-xl mx-auto lg:mx-0"
            >
              I help businesses{" "}
              <span className="font-semibold theme-highlight">thrive</span> by
              creating web applications
              <br className="hidden md:block" /> that are fast, scalable, and
              loved by customers.
            </motion.p>

            {/* Social Links Section */}
            <div className="flex gap-4 mb-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ife-oluwatosin-40155b7b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-3xl  theme-navbar-background hover:opacity-80 transition"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href="mailto:ifeoluwatosin.official@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-3xl  theme-navbar-background hover:opacity-80 transition"
                aria-label="Email Address"
              >
                <FaEnvelope />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ifetosin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-3xl  theme-navbar-background hover:opacity-80 transition"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
            </div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="flex md:flex-row gap-4 justify-left items-center">
                {/* Explore My Work Button */}
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:opacity-90 cursor-pointer"
                >
                  <motion.button
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="theme-highlight font-semibold cursor-pointer transition"
                  >
                    <span className="block sm:hidden">My Work</span>{" "}
                    {/* Text for mobile */}
                    <span className="hidden sm:block">
                      Explore My Work
                    </span>{" "}
                    {/* Text for larger screens */}
                  </motion.button>
                </ScrollLink>

                {/* View Resume */}
                <div>
                  <a
                    href="https://drive.google.com/file/d/1UyfHdZ-JlD4KQmGMZIreEwLuRTrQInPm/view"
                    target="_blank"
                  >
                    <motion.button
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="theme-highlight font-semibold cursor-pointer transition"
                    >
                      View Resume
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: About Box */}
          <motion.div
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
                applications. With expertise in HTML, CSS, Javascript, React,
                Next.js, and TypeScript, I’ve developed and optimized digital
                platforms relied on by thousands daily.{" "}
                <br className="hidden md:block" />I create fast, responsive
                front-end solutions that improve performance, increase user
                retention, and drive business growth across industries. Beyond
                development, I mentor junior engineers, helping them become
                impactful team contributors. I also excel at collaborating with
                vendors, consultants, and cross-functional teams to deliver
                complex projects. With strong emotional intelligence,
                <br className="hidden md:block" /> I align teams and navigate
                stakeholder relationships efficiently to drive success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
