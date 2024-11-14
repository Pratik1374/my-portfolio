import React, { useRef } from "react";
import { myWork, teamWork } from "../data/data";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { motion, useInView } from "framer-motion";

const Work = () => {
  // Refs for in-view triggers
  const personalProjectsRef = useRef(null);
  const groupProjectsRef = useRef(null);

  // useInView hook to detect when each section is in the viewport
  const personalProjectsInView = useInView(personalProjectsRef, { once: true });
  const groupProjectsInView = useInView(groupProjectsRef, { once: true });

  // Animation variants for the sections and cards
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // Smooth easing curve
    },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center mx-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          className="flex justify-center items-center mb-5"
        >
          <SectionHeading
            title="Projects"
            subtitle="A collection of my crafted solutions"
            icon="briefcase"
          />
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          ref={personalProjectsRef}
          initial="hidden"
          animate={personalProjectsInView ? "visible" : "hidden"}
          variants={containerVariant}
          className="mx-2 mt-3"
        >
          <motion.div variants={sectionVariant} className="flex justify-center">
            <p className="text-lg text-violet-400 font-semibold border-2 border-l-0 border-r-0  border-violet-800 border-dashed p-2 my-4">
              Personal Projects
            </p>
          </motion.div>
          <motion.div
            variants={containerVariant}
            className="flex flex-wrap gap-4 gap-y-8 justify-center mt-3"
          >
            {myWork.map((work) => (
              <motion.div key={work.title} variants={cardVariant}>
                <ProjectCard project={work} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Group Projects Section */}
        <motion.div
          ref={groupProjectsRef}
          initial="hidden"
          animate={groupProjectsInView ? "visible" : "hidden"}
          variants={containerVariant}
          className="mx-2 mt-8"
        >
          <motion.div variants={sectionVariant} className="flex justify-center">
            <p className="text-lg text-violet-400 font-semibold border-2 border-l-0 border-r-0  border-violet-800 border-dashed p-2 my-4">
              Group Projects
            </p>
          </motion.div>
          <motion.div
            variants={containerVariant}
            className="flex flex-wrap gap-3 gap-y-8 justify-center mt-3"
          >
            {teamWork.map((work) => (
              <motion.div key={work.title} variants={cardVariant}>
                <ProjectCard project={work} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
