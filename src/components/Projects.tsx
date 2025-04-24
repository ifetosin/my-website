"use client";

import { projects } from "../util/projects";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section className="container mx-auto px-2 md:px-10 py-12">
      {/* Section Header */}
      <h1 className="text-2xl md:text-3xl font-bold text-left mb-6 md:mb-12">Some Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden flex flex-col items-start text-left cursor-pointer border-2 shadow-lg"
            style={{
              borderColor: "var(--theme-border-color)",
              boxShadow: "var(--theme-shadow)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onClick={() => window.open(project.url, "_blank")}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              className="w-full h-auto md:h-[300px] object-cover" 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <div className="p-3 md:p-8 pt-1 pb-5">
              {/* Title with Slanted Arrow */}
              <div className="w-full flex items-left justify-between mb-4">
                <h2
                  className="text-xl font-bold"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.url, "_blank");
                  }}
                >
                  {project.name}
                </h2>
                <motion.span
                  className="text-md font-bold theme-highlight"
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

              {/* Project Description */}
              <p className="mb-8">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap">
                {project.stack.map((tech, i) => (
                  <motion.button
                    key={i}
                    className="px-3 py-3 mr-2 mb-2 rounded-lg shadow-md text-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                  >
                    {tech.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
