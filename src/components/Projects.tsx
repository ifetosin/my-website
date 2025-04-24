"use client";

import { projects } from "../util/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 md:px-10 py-12"
      aria-labelledby="projects-heading"
    >
      <h1
        id="projects-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-left"
      >
        Some Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="rounded-lg overflow-hidden flex flex-col items-start text-left border-2 shadow-lg transition"
            style={{
              borderColor: "var(--theme-border-color)",
              boxShadow: "var(--theme-shadow)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative h-[200px] md:h-[300px] block focus:outline focus:outline-2"
              aria-label={`Open ${project.name} project in a new tab`}
            >
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </a>

            <div className="p-3 lg:p-8 pt-5 md:pt-5 pb-5">
              <div className="flex justify-between items-center mb-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold hover:underline focus:outline focus:outline-2"
                >
                  {project.name}
                </a>
                <motion.span
                  className="text-md font-bold theme-highlight"
                  aria-hidden="true"
                  initial={{ x: 0, y: 0 }}
                  animate={{ x: 5, y: -5 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  ↗
                </motion.span>
              </div>

              <p className="mb-8">{project.description}</p>

              <div className="flex flex-wrap" aria-label="Technology stack">
                {project.stack.map((tech, i) => (
                  <motion.span
                    key={tech.name + i}
                    className="px-3 py-2 mr-2 mb-2 rounded-lg shadow-md text-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
