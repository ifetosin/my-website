"use client";

import { projects } from "../util/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section className="container mx-auto px-2 lg:px-10 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-left mb-6 md:mb-12">
        Some Projects
      </h1>

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
            {/* ✅ Optimized Responsive Image */}
            <div className="relative w-full h-[200px] md:h-[300px]">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0} // LCP image
              />
            </div>

            <div className="p-3 lg:p-8 pt-5 md:pt-5 pb-5">
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

              <p className="mb-8">{project.description}</p>

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
