import React, { useEffect, useRef, useState } from "react";
import { experience } from "../data/data";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: isVisible ? 0.5 : 0 }}
      className="relative w-full lg:w-[45%]  my-bg-dark-gradien p-6 rounded-lg my-4 shadow-lg hover:shadow-cyan-800 cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-transparent rounded-l-lg"></div>

      <h3 className="text-xl font-bold text-white">{experience.role}</h3>
      <p className="text-gray-400 text-sm mt-2">
        {experience.company} • {experience.duration}{" "}
      </p>
      <ul className="list-disc ml-4 text-gray-300 text-sm mt-4">
        {experience.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {experience.appLink && (
        <a
          href={experience.appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block text-sm"
        >
          View App
        </a>
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="my-bg-dark-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl mb-4 underline underline-offset-4 text-cyan-300 font-extrabold">
            Experience
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {experience.map((exp) => (
              <ExperienceCard key={exp.role} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
