import React, { useEffect, useRef } from "react";
import { experience } from "../data/data";
import { motion, useInView, useAnimation } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const lineControls = useAnimation();

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "calc(100% - 20px)", opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      lineControls.start("visible");
    } else {
      lineControls.start("hidden");
    }
  }, [isInView, lineControls]);

  return (
    <section id="experience" className="container py-10">
      <h2 className="text-4xl font-bold text-center text-purple-500 mb-12">
        Experience
      </h2>

      <div className="relative ml-[12px]" ref={ref}>
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }} // Change x to y for vertical animation
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Change x to y
            transition={{
              duration: (index + 1) * 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            className="ml-8 relative -mt-[20px]"
          >
            {/* Animated connecting line */}
            <motion.div
              className="absolute w-[2px] left-[-0.9rem] top-[20px]"
              variants={lineVariants}
              initial="hidden"
              animate={lineControls}
              transition={{
                duration: 1.5, // Increased duration for slower animation
                delay: index * 0.5, // Reduced delay for smoother staggering
                ease: "easeInOut", // Smooth easing
              }}
              style={{
                background:
                  "linear-gradient(to bottom, rgba(147, 51, 234, 1), rgba(147, 51, 234, 0.5))",
                filter: "blur(1px)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))",
              }}
            />

            <div className="flex items-center mb-2 -ml-[20px]">
              <motion.div
                className="w-[12px] h-[12px] bg-purple-500 rounded-full mr-3 neon-dot"
                whileHover={{ scale: 1.2 }}
              ></motion.div>
              <h3 className="text-xl font-semibold text-purple-300 hover:text-purple-300 transition duration-200">
                {exp.role}
              </h3>
            </div>
            <h4 className="text-lg text-purple-200 mb-1 flex gap-2">
              {exp.company}
              <a
                href={exp.appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 flex items-center space-x-1 hover:text-purple-400 transition duration-200"
              >
                <span className="text-xs">View App</span>
              </a>
            </h4>
            <span className="text-sm text-gray-400 italic">{exp.duration}</span>
            <ul
              className={`mt-4 ml-5 list-disc space-y-2 ${
                index != experience.length - 1 ? "pb-12" : ""
              }`}
            >
              {exp.description.map((desc, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed hover:text-purple-300 transition duration-200"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
