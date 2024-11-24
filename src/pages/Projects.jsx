import React, { useRef } from "react";
import { myProjects, teamProjects } from "../data/data";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const personalProjectsRef = useRef(null);
  const groupProjectsRef = useRef(null);

  const personalProjectsInView = useInView(personalProjectsRef, { once: true });
  const groupProjectsInView = useInView(groupProjectsRef, { once: true });

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
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
      className="w-full flex flex-col items-center justify-center pt-6"
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
            {myProjects.map((project) => (
              <motion.div key={project.title} variants={cardVariant}>
                <ProjectCard project={project} />
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
            {teamProjects.map((project) => (
              <motion.div key={project.title} variants={cardVariant}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
