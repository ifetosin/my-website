"use client";

import { motion } from "framer-motion";
import { experienceData } from "../util/experienceData";

export const WorkExperience = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-10 py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-left">
        Work Experience
      </h1>

      <div className="flex flex-col gap-12">
        {experienceData.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row gap-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {/* Date */}
            <div className="lg:w-1/3 text-sm sm:text-base font-medium">
              {experience.date}
            </div>

            {/* Role + Company + Achievements */}
            <div className="lg:w-2/3">
              <div className="mb-3 sm:mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-xl sm:text-2xl font-semibold theme-highlight">
                    {experience.company}
                  </h3>  
                  <h2 className="text-lg sm:text-xl font-medium mt-1 sm:mt-0">
                    {experience.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base font-normal text-justify mb-4">
                {experience.description}
              </p>

              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
