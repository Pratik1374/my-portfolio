import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { mySkillsData } from "../data/data";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center relative"
    >
      <SectionHeading
        title="Skills"
        subtitle="The technical foundation behind my work"
        icon="code"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4 md:px-8 lg:px-12" ref={ref}>
        {mySkillsData.map((category, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-lg shadow-lg bg-opacity-20 bg-black backdrop-blur-md border border-gray-800 transition duration-300 hover:-translate-y-2 group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-[#201e2e]"></div>

            <h3
              className="text-2xl font-semibold mb-4 relative z-10 text-shadow-sm"
              style={{ color: category.shade }}
            >
              {category.category}
            </h3>
            <p className="text-base text-gray-400 mb-4 leading-relaxed">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="inline-block bg-[#2d2d44] px-3 py-1 rounded-md text-sm font-medium text-gray-300 shadow-inner transition duration-300 hover:bg-[#444461] group-hover:text-white group-hover:border-2 group-hover:border-purple-500 group-hover:bg-[#241e2c]"
                  style={{ border: `1px solid ${category.shade}` }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: skillIndex * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
