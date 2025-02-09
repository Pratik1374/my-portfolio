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
      className="relative flex flex-col items-center justify-center pt-6"
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
        className="relative w-full z-10 flex items-center justify-center flex-col lg:flex-row gap-12 mt-8"
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Block */}
        <div className="relative w-full max-w-[500px] text-center lg:text-left p-3 md:p-6 shadow-lg bg-gray-900/20 backdrop-blur-lg rounded-lg border border-white/10 ">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">
            Software Developer
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Full-Stack Developer and Founding Engineer at{" "}
            <a
              className="underline text-purple-200"
              href="https://applybuddy.co"
              target="_blank"
            >
              ApplyBuddy
            </a>
            , where I independently built and currently maintain applications
            serving over 2,000 registered users and 8,000 monthly active users.
            I developed 100% of the responsive frontend using React and Next.js,
            and approximately 90% of the backend using Node.js, Express, and
            PostgreSQL. My work also includes optimizing database performance,
            implementing features using AI (ChatGPT, Gemini API, LLM
            fine-tuning), and driving key technical decisions in an early-stage
            startup environment. I've also built standalone AI-powered
            applications like{" "}
            <a
              className="underline text-purple-200"
              href="https://story-copilot.vercel.app/"
              target="_blank"
            >
              Story Co-Pilot
            </a>
            . Hackathon winner (Smart India Hackathon Finalist, Braint-It-On 2.0
            Winner).
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
              className="h-6 w-6 rounded-full bg-blue-600"
              variants={floatingEffect}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            ></motion.div>
            <span>LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/pratik1374"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              linkedin.com/in/pratik1374
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
              className="h-6 w-6 rounded-full bg-[#bffcd3]"
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
        className="relative mt-12 py-2 px-4 md:py-4 md:px-8 rounded-full shadow-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition-transform text-center"
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
