import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const floatingEffect = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex flex-col items-center justify-center h-screen max-h-[1000px] p-10"
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] h-[150px] w-[150px] rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-500 blur-2xl opacity-40"
        variants={floatingEffect}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-50px] right-[-50px] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400 blur-3xl opacity-30"
        variants={floatingEffect}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      ></motion.div>

      <SectionHeading title="About Me" subtitle="Who I Am" icon="user" />

      {/* Content Section */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row gap-12 items-center mt-12"
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Block */}
        <div className="relative max-w-md text-center lg:text-left p-6 shadow-lg bg-white/10 backdrop-blur-lg rounded-lg border border-white/10 ">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">
            Software Developer
          </h2>
          <p className="text-gray-200 leading-relaxed">
            I'm a software developer specializing in building and optimizing web
            applications using React, Next.js, and Node.js. I'm passionate about
            creating efficient and user-friendly solutions, with a focus on
            performance and scalability. My experience includes developing SaaS
            applications, integrating LLMs into web platforms, and leading
            successful hackathon projects.
          </p>
        </div>

        {/* Right Block */}
        <div className="relative space-y-6 text-gray-300 text-sm lg:text-base">
          <div className="flex items-center gap-4">
            <motion.div
              className="h-6 w-6 rounded-full bg-purple-500"
              variants={floatingEffect}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            ></motion.div>
            <span>Email: </span>
            <a
              href="mailto:pratik1374@gmail.com"
              className="text-purple-400 hover:underline"
            >
              pratik1374@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              className="h-6 w-6 rounded-full bg-pink-500"
              variants={floatingEffect}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            ></motion.div>
            <span>GitHub: </span>
            <a
              href="https://github.com/Pratik1374"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              github.com/Pratik1374
            </a>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              className="h-6 w-6 rounded-full bg-blue-500"
              variants={floatingEffect}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            ></motion.div>
            <span>Location: </span>
            <span>Maharashtra, India</span>
          </div>
        </div>
      </motion.div>

      {/* Footer Highlight */}
      <motion.div
        className="relative mt-12 py-4 px-8 rounded-full shadow-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold cursor-pointer hover:scale-105 transition-transform"
        variants={floatingEffect}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Let’s create something extraordinary together!
      </motion.div>
    </section>
  );
};

export default About;
