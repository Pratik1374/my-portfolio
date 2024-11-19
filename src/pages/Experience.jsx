import React, { useEffect, useRef } from "react";
import { experience } from "../data/data";
import { motion, useInView, useAnimation } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import FeatherIcon from "feather-icons-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const lineControls = useAnimation();

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      lineControls.start("visible");
    } else {
      lineControls.start("hidden");
    }
  }, [isInView, lineControls]);

  return (
    <section
      id="experience"
      className="w-full flex flex-col items-center justify-center pt-6"
    >
      <SectionHeading
        title="Experience"
        subtitle="A journey through my professional milestones"
        icon="briefcase"
      />

      <div className="relative ml-[12px]" ref={ref}>
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: (index + 1) * 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            className="ml-[15px] md:ml-[30px] relative -mt-[20px]"
          >
            {/* Animated connecting line */}
            <motion.div
              className="absolute w-[2px] left-[-0.9rem] top-[20px] h-[calc(100%-20px)]"
              variants={lineVariants}
              initial="hidden"
              animate={lineControls}
              transition={{
                duration: 1.5,
                delay: index * 0.5,
                ease: "easeInOut",
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
                className="mr-[8px] w-[12px] h-[12px] bg-purple-500 rounded-full neon-dot"
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
                className="text-purple-500 flex items-center space-x-1 hover:text-purple-400 transition duration-200 hover:scale-110"
              >
                <FeatherIcon
                  icon="external-link"
                  size={16}
                  className="ml-1 stroke-purple-100 group-hover:stroke-purple-100 transition-colors duration-300"
                />
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
