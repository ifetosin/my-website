"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const Skills = () => {
  const { scrollYProgress } = useScroll();
  const [isLargeUp, setIsLargeUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint
    const handleChange = () => setIsLargeUp(mediaQuery.matches);

    handleChange(); // Initial check
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const xFirstLine = useTransform(scrollYProgress, [0, 1], isLargeUp ? ["-20%", "20%"] : ["0%", "0%"]);
  const xSecondLine = useTransform(scrollYProgress, [0, 1], isLargeUp ? ["10%", "-50%"] : ["0%", "0%"]);
  const xThirdLine = useTransform(scrollYProgress, [0, 1], isLargeUp ? ["-20%", "20%"] : ["0%", "0%"]);

  const skillSet1 = "HTML / CSS / JavaScript / TypeScript / React / Next.js";
  const skillSet2 = "Critical Thinking / Communication / Emotional Intelligence";
  const skillSet3 = "Git / Tailwind CSS / Bootstrap / Material UI / Agile Development";

  return (
    <div className="w-full overflow-hidden max-w-[100vw]">
      <section className="relative w-full space-y-8 px-4 py-10 md:py-14">
        {/* First Line */}
        <motion.div
          className="w-full text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold whitespace-normal lg:whitespace-nowrap"
          style={{ x: xFirstLine }}
        >
          <span className="inline-block lg:min-w-full">
            {skillSet1}
            <span className="hidden lg:inline-block"> / {skillSet1}</span>
          </span>
        </motion.div>

        {/* Second Line */}
        <motion.div
          className="w-full text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold whitespace-normal lg:whitespace-nowrap"
          style={{ x: xSecondLine }}
        >
          <span className="inline-block lg:min-w-full">
            {skillSet2}
            <span className="hidden lg:inline-block"> / {skillSet2}</span>
          </span>
        </motion.div>

        {/* Third Line */}
        <motion.div
          className="w-full text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold whitespace-normal lg:whitespace-nowrap"
          style={{ x: xThirdLine }}
        >
          <span className="inline-block lg:min-w-full">
            {skillSet3}
            <span className="hidden lg:inline-block"> / {skillSet3}</span>
          </span>
        </motion.div>
      </section>
    </div>
  );
};
