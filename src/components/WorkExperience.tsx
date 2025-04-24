"use client";

import { motion } from "framer-motion";
import { experienceData } from "../util/experienceData";

export const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="container mx-auto px-4 sm:px-6 md:px-10 py-12"
      aria-labelledby="work-experience-heading"
    >
      <h2
        id="work-experience-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-left"
      >
        Work Experience
      </h2>

      <div className="flex flex-col gap-12">
        {experienceData.map((experience, index) => (
          <motion.article
            key={experience.company + index}
            className="flex flex-col lg:flex-row gap-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            aria-labelledby={`experience-${index}-company`}
          >
            {/* Date */}
            <div className="lg:w-1/3 text-sm sm:text-base font-medium">
              <time dateTime={experience.date}>{experience.date}</time>
            </div>

            {/* Role + Company + Achievements */}
            <div className="lg:w-2/3">
              <div className="mb-3 sm:mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3
                    id={`experience-${index}-company`}
                    className="text-xl sm:text-2xl font-semibold theme-highlight"
                  >
                    {experience.company}
                  </h3>
                  <h4 className="text-lg sm:text-xl font-medium mt-1 sm:mt-0">
                    {experience.title}
                  </h4>
                </div>
              </div>

              <p className="text-sm sm:text-base font-normal text-justify mb-4">
                {experience.description}
              </p>

              {experience.achievements?.length > 0 && (
                <ul
                  className="list-disc pl-6 space-y-2 text-sm sm:text-base"
                  aria-label={`Achievements at ${experience.company}`}
                >
                  {experience.achievements.map((achievement, idx) => (
                    <li key={experience.company + "-achv-" + idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
